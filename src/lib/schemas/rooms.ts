import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, 'This field is required.'] },
    description: {
      type: String,
      required: [true, 'This field is required.'],
      minLength: [10, 'Description must be at least 10 characters long.'],
    },
    capacity: { type: Number, required: [true, 'This field is required.'] },
    type: {
      type: String,
      enum: ['junior', 'standard', 'suite', 'luxury', 'family'],
      required: [true, 'This field is required.'],
    },
    photos: { type: [String], default: [] },
    rate: {},
  },
  { timestamps: true }
);

roomSchema.index({ capacity: 1, type: 1 });

const Room = mongoose.models.Room || mongoose.model('Room', roomSchema);

export default Room;
