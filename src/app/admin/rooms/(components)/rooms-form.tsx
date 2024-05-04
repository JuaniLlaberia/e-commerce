'use client';

import { useFormState } from 'react-dom';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { createRoom, updateRoom } from '@/lib/actions/rooms';
import SubmitButton from '@/components/submit-button';

export type RoomType = {
  _id: string;
  name: string;
  type: string;
  description: string;
};

const RoomsForm = ({ room }: { room?: RoomType | null }) => {
  const [error, action] = useFormState(
    room == null ? createRoom : updateRoom.bind(null, room._id),
    {}
  );

  return (
    <form action={action} className='flex flex-col h-full'>
      <Label>Identifier</Label>
      <Input
        type='text'
        name='name'
        defaultValue={room?.name || ''}
        placeholder='Room identifier (e.g. 001)'
      />
      <Label>Room Type</Label>
      <Select name='type' defaultValue={room?.type || ''}>
        <SelectTrigger>
          <SelectValue placeholder='Select room type' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='junior'>Junior</SelectItem>
          <SelectItem value='standard'>Standard</SelectItem>
          <SelectItem value='suite'>Suite</SelectItem>
          <SelectItem value='luxury'>Luxury</SelectItem>
          <SelectItem value='family'>Family</SelectItem>
        </SelectContent>
      </Select>
      <Label>Rate Type</Label>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder='Select room type' />
        </SelectTrigger>
        <SelectContent></SelectContent>
      </Select>
      <Label>Description</Label>
      <Textarea
        name='description'
        defaultValue={room?.description || ''}
        placeholder='Room description'
      />

      <SubmitButton>{room == null ? 'Create room' : 'Edit room'}</SubmitButton>
    </form>
  );
};

export default RoomsForm;
