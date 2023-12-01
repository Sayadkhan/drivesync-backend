import mongoose, { Schema, model } from 'mongoose';
import { carServicesType } from '../types/carServices.type';

const carServicesSchema = new Schema<carServicesType>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      required: true,
    },
    images: [{ type: String, required: true }],
    price: {
      type: Number,
      required: true,
    },
    bookings: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking',
      },
    ],
  },
  {
    timestamps: true,
  }
);

const carServicesModle = model<carServicesType>(
  'CarServices',
  carServicesSchema
);

export default carServicesModle;
