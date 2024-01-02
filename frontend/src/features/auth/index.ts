export type { AuthState } from './model/types/auth';
export { authReducer, authActions } from './model/slice/authSlice';

export { registerByEmail } from './model/service/registerByEmail';
export { loginByEmail } from './model/service/loginByEmail';
export { getAuthError } from './model/selectors/getAuthError';
export { getAuthLoading } from './model/selectors/getAuthLoading';
