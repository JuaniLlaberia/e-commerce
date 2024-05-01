import mongoose from 'mongoose';

const guestSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'This field is required'],
      minLength: [3, 'The name must be at least 3 characters long.'],
      maxLength: [30, 'The name must be less than 30 characters long.'],
    },
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
    phone: {
      type: {
        areaCode: String,
        number: String,
      },
      required: [true, 'This field is required'],
    },
    nationality: String,
    nationalId: String,
  },
  { timestamps: true }
);

guestSchema.index({ fullName: 1, email: 1 });

const Guest = mongoose.models.Guest || mongoose.model('Guest', guestSchema);
export default Guest;
