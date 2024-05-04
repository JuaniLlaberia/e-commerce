import Badge from '@/components/ui/badge';
import RoomsActions from './rooms-actions';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getRooms } from '@/lib/actions/rooms';

type RoomsTableType = {
  page: string;
  type: string;
};

const RoomsTable = async ({ type, page }: RoomsTableType) => {
  const rooms = await getRooms(type, Number(page));

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[100px]'></TableHead>
          <TableHead>Number</TableHead>
          <TableHead>Capacity</TableHead>
          <TableHead>Room Type</TableHead>
          <TableHead>Rate Type</TableHead>
          <TableHead className='text-right'></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rooms.length > 0 ? (
          rooms.map(room => (
            <TableRow key={room._id}>
              <TableCell>
                <div className='w-20 h-12 bg-red-300'></div>
              </TableCell>
              <TableCell>{room.name}</TableCell>
              <TableCell>Up to {room.capacity} guests</TableCell>
              <TableCell>
                <div className='flex'>
                  <Badge text={room.type} color='purple' />
                </div>
              </TableCell>

              <TableCell>
                <div className='flex'>
                  <Badge text='Checked In' color='green' />
                </div>
              </TableCell>
              <TableCell className='text-end'>
                <RoomsActions
                  room={{
                    _id: String(room._id),
                    name: room.name,
                    description: room.description,
                    type: room.type,
                  }}
                />
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={10} className='text-center py-8 text-text-2'>
              No results
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default RoomsTable;
