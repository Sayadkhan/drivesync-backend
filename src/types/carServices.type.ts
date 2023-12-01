import { Document } from "mongoose";

export type carServicesType = {

title: string
description: string
category: string
images: string[]
price: number

} & Document