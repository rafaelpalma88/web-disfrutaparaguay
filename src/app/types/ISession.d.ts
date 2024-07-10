export interface ISession {
  user: {
    id: string;
    email: string;
    name: string;
    role: IRoleUser;
    created_at: string | null;
    approved_at: boolean | null;
  };
  expires: string;
  token?: string;
}
