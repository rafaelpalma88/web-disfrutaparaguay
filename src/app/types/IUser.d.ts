export interface IUser {
  approved_at: boolean | null;
  created_at: string;
  email: string;
  id: string;
  name: string;
  role: IRoleUser;
}
