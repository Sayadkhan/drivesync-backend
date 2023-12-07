import mongoose, { Schema, model } from 'mongoose';
import { userType } from '../types/user.type';

import validator from 'validator';
import bcrypt from 'bcrypt';
import { UserModelInterFace } from '../interfaces/user.interface';

const userSchema = new Schema<userType>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    role: {
      enum: ['user', 'admin'],
      default: 'user',
      type: String,
      required: true,
    },
    bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bookings' }],
  },
  {
    timestamps: true,
  }
);

userSchema.statics.register = async function (
  name,
  email,
  password,
  image,
  address,
  phoneNumber
): Promise<userType> {
  if (!name || !email || !password || !image) {
    throw new Error('Must fill name, email, password, image');
  }

  const existingUser = await this.findOne({ email });

  if (existingUser) {
    throw new Error('email alreadt exits');
  }

  if (!validator.isEmail(email)) {
    throw new Error('Invalied email');
  }
  if (!validator.isStrongPassword) {
    throw new Error('password must be strong');
  }

  const salt = await bcrypt.genSalt(10);

  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({
    name,
    email,
    password: hash,
    image,
    address,
    phoneNumber,
  });

  return user;
};

userSchema.statics.login = async function (email, password): Promise<userType> {
  if (!email || !password) {
    throw new Error('Must fill email and password');
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw new Error('Incorret email or password');
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw new Error('Incorret email or password');
  }

  return user;
};

const UserModle = model<userType, UserModelInterFace>('User', userSchema);

export default UserModle;
