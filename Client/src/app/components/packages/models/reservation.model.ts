import { UserModel } from "src/app/models/userModel";
import { PackageModel } from "./package.model";

export class ReservationModel {

      constructor(
            public orderID: number,
            public packagee: PackageModel,
            public totalPrice: number,
            public customer: UserModel,
            public status: string,
            public date?: Date,
            public _id?,
      ) { }
}
