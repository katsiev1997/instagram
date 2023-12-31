import { type ThunkConfig } from '@/app/provider';
import { userActions } from '@/entities/User';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { type LoginFormValues } from '../schema/useLoginForm';
import { LOCAL_STORAGE_TOKEN } from '@/shared/consts/localStorage';
import { type User } from '@/entities/User/model/types/user';

export interface GetFetchLoginData {
  user: User;
  token: string;
}

export const loginByEmail = createAsyncThunk<
  string,
  LoginFormValues,
  ThunkConfig<string>
>('auth/login', async (userData, thunkApi) => {
  const { rejectWithValue, dispatch, extra } = thunkApi;
  try {
    const res = await extra.api.post<GetFetchLoginData>('/login', userData);

    if (res.data) {
      dispatch(userActions.setAuthData(res.data));
      localStorage.setItem(LOCAL_STORAGE_TOKEN, res.data.token);
    }
  } catch (error) {
    return rejectWithValue(error.response.data.msg);
  }
});
