'use server';

import { notFound } from 'next/navigation';
import { revalidatePath } from 'next/cache';

import Employee from '../schemas/employees';
import { connectDB } from '../mongoose';
import { EmployeeType } from '@/app/admin/employees/(components)/employees-table';

export const getEmployees = async ({
  status,
  search,
  page,
}: {
  status: string;
  search: string;
  page: string;
}) => {
  connectDB();

  let query = Employee.find();

  if (search) {
  }

  if (status && status !== 'all') query.where({ status });

  const pageNum = Number(page) || 1;
  const limit = 10;
  const skip = (pageNum - 1) * limit;

  const employees: EmployeeType[] = await query
    .skip(skip)
    .limit(limit)
    .sort({ type: 1 })
    .lean();

  return employees;
};

export const createEmployee = async (
  prevState: unknown,
  formData: FormData
) => {};

export const updateEmployee = async (
  id: string,
  prevState: unknown,
  formData: FormData
) => {};

export const deleteEmployee = async (id: string) => {
  connectDB();

  if (!id) return notFound();

  await Employee.deleteOne({ _id: id });
  revalidatePath('/admin/employees');
};
