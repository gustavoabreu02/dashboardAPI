export interface IProduct {
  id?: number;
  name: string;
  amount: string;
}

export interface ILogin {
  id?: number;
  username: string;
  password: string;
}

export interface IUser {
  id?: number;
  username: string;
  classe: string;
  level: number;
  password: string;
}

export interface IOrder {
  // user?: string,
  // username?: string,
  // id?: number,
  // userId?: number,
  // productsIds: number[],
  user: IUser;
  productsIds: number[];
}
