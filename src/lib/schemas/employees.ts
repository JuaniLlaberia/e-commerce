import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema(
  {
    fullname: { type: String, required: [true, 'This field is required'] },
    email: {
      type: String,
      required: [true, 'User must have an email.'],
      validate: {
        validator: (value: string) =>
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            value
          ),
        message: 'Email is not valid.',
      },
    },
    password: {
      type: String,
      required: [true, 'This field is required.'],
    },
    avatar: String,
    type: {
      type: String,
      enum: ['regular', 'admin'],
    },
    status: {
      type: String,
      enum: ['active', 'inactive'],
    },
  },
  { timestamps: true }
);

employeeSchema.index({ email: 1 });

const Employee =
  mongoose.models.Employee || mongoose.model('Employee', employeeSchema);
export default Employee;
