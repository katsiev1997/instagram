import { type User } from '@/entities/User/model/types/user';

export interface ProfileState {
  posts: any[];
  users: User[];
  user: User;
  error: string;
  succees: string;
  loading: boolean;
}
