export type Role = 'USER' | 'EDITOR' | 'ADMINISTRATOR';
export type IUserPublic = Omit<IUser, 'password'>;

export interface IUser {
  uuid: string;
  name: string;
  email: string;
  password: string;
  role: Role;
}

export interface ICreateUserResponse {
  statusCode: number;
  message: string;
  data: IUserPublic;
}

export interface IUpdateUserResponse {
  statusCode: number;
  message: string;
  data: IUserPublic;
}
