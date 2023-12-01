import { Document } from "mongoose";
import { userType } from "./user.type";
import { carServicesType } from "./carServices.type";

export type bookingType ={
    user: userType
    service: carServicesType

} & Document