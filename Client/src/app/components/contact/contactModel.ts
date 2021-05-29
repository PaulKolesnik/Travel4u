export class MessageModel {
      public constructor(
            public messageID: number,
            public name: string,
            public email: string,
            public subject: string,
            public message: string,
            public sendAt?: Date
      ) { }
}
