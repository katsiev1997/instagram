import { type AuthState } from '@/features/auth';

export interface StateSchema {
  auth: AuthState;
}

export interface ThunkConfig {
  rejectValue: any;
  extra: any;
  state: StateSchema;
}
