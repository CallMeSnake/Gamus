export interface CurrentUser {
  user: {
    id: number;
    email: string;
    createdAt: string;
    updatedAt: string;
    username: string;
    bio?: string;
    image?: string;
  };
  accessToken: string | null;
}
