import Badge from '@/components/ui/badge';
import EmployeesActions from './employees-actions';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getEmployees } from '@/lib/actions/employees';

export type EmployeeType = {
  _id: string;
  fullName: string;
  email: string;
  type: 'regular' | 'admin';
  status: 'active' | 'inactive';
};

type EmployeesTableProps = {
  status: string;
  search: string;
  page: string;
};

const EmployeesTable = async ({
  status,
  search,
  page,
}: EmployeesTableProps) => {
  const employees = await getEmployees({ status, search, page });

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[50px]'></TableHead>
          <TableHead>Full name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Permissions</TableHead>
          <TableHead>Activity</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {employees.length > 0 ? (
          employees.map(employee => (
            <TableRow>
              <TableCell>
                <Avatar className='size-8 mx-auto'>
                  <AvatarFallback>{employee.fullName.at(0)}</AvatarFallback>
                  <AvatarImage />
                </Avatar>
              </TableCell>
              <TableCell className='min-w-[150px]'>
                {employee.fullName}
              </TableCell>
              <TableCell className='min-w-[200px]'>{employee.email}</TableCell>
              <TableCell>
                <div className='flex'>
                  <Badge
                    text={employee.type}
                    color={employee.type === 'admin' ? 'red' : 'blue'}
                  />
                </div>
              </TableCell>
              <TableCell>
                <div className='flex'>
                  <Badge
                    text={employee.status}
                    color={employee.status === 'active' ? 'green' : 'gray'}
                  />
                </div>
              </TableCell>
              <TableCell className='text-end'>
                <EmployeesActions
                  employee={{ ...employee, _id: String(employee._id) }}
                />
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell
              colSpan={10}
              className='text-center py-9 text-text-2'
            >
              No results
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default EmployeesTable;
