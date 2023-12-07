import { Model } from 'mongoose';

import { userType } from '../types/user.type';

export interface UserModelInterFace extends Model<userType> {
  register(
    name: string,
    email: string,
    password: string,
    image: string,
    address?: string,
    phoneNumber?: string
  ): Promise<userType>;

  // login
  login(email: string, password: string): Promise<userType>;
}
