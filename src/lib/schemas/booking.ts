import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: ['A booking must belong to an user.'],
    },
    roomId: {
      type: mongoose.Schema.ObjectId,
      ref: 'Room',
      required: ['A booking must linked to a room.'],
    },
    status: {
      type: String,
      enum: ['cancelled', 'checked-in', 'checked-out', 'unconfirmed'],
      default: 'unconfirmed',
    },
    dateRange: {
      type: {
        startDate: Date,
        endDate: Date,
      },
      required: [true, 'This field is required.'],
    },
    totalGuests: {
      type: Number,
      required: [true, 'This field is required.'],
    },
    totalNights: {
      type: Number,
      required: [true, 'This field is required.'],
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
    hasBreakfast: {
      type: Boolean,
      default: false,
    },
    totalPricec: {
      type: Number,
      required: [true, 'This field is required.'],
    },
  },
  { timestamps: true }
);

bookingSchema.index({ userId: 1 });
bookingSchema.index({ roomId: 1 });
bookingSchema.index({ status: 1 });
bookingSchema.index({ 'dateRange.startDate': 1, 'dateRange.endDate': 1 });

const Booking =
  mongoose.models.Booking || mongoose.model('Booking', bookingSchema);
export default Booking;
