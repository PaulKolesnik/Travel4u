export class UserModel {

      constructor(
            public role: string,
            public fullName?: string,
            public userName?: string,
            public password?: string,
            public birthDate?: Date,
            public email?: string,
            public phoneNumber?: number,
            public createdAt?: string,
            public token?: string
      ) { }

}
export class UserLoggedModel {
      user: UserModel;
      token: string;
}