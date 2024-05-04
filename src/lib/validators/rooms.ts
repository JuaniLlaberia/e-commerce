import { z } from 'zod';

export const RoomValidator = z.object({
  name: z.string().min(1, 'Missing require value/s'),
  description: z.string().min(1, 'Missing require value/s'),
  type: z.enum(['junior', 'standard', 'suite', 'luxury', 'family']),
});
