export type Role = 'USER' | 'EDITOR' | 'ADMINISTRATOR';

export interface IUser {
  uuid: string;
  name: string;
  email: string;
  password: string;
  role: Role;
}
