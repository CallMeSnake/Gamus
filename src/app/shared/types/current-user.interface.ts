export interface CurrentUser {
  user: { id: number; email: string; createdAt: string; updatedAt: string; username: string };
  bio: string | null;
  image: string | null;
  accessToken: string | null;
}
