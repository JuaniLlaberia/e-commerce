import mongoose from 'mongoose';

let isConnected = false;

export const connectDB = async () => {
  //Prevent unknown fields in queries
  mongoose.set('strictQuery', true);

  if (!process.env.MONGODB_URL)
    throw new Error('Missing MongoDB connection url, please provide one.');

  if (isConnected) return console.log('MongoDB is already connected.');

  try {
    await mongoose.connect(process.env.MONGODB_URL);
    isConnected = true;

    console.log('MongoDB connected successfully.');
  } catch (error) {
    throw new Error('Failed to connect to MongoDB.');
  }
};
