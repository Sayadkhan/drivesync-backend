import mongoose, { Schema, model } from 'mongoose';
import { bookingType } from '../types/booking.type';

const bookingSchema = new Schema<bookingType>(
  {
    service: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'CarServices',
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const BoookingModel = model<bookingType>('Booking', bookingSchema);

export default BoookingModel;
