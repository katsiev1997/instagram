import { type ThunkConfig } from '@/app/provider';
import { userActions } from '@/entities/User';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { type LoginFormValues } from '../schema/useLoginForm';
import { type User } from '@/entities/User/model/types/user';
import { LOCAL_STORAGE_TOKEN } from '@/shared/consts/localStorage';

interface getLoginData {
  user: User;
  token: string;
}

export const loginByEmail = createAsyncThunk<
  any,
  LoginFormValues,
  ThunkConfig<string>
>('auth/login', async (userData, thunkApi) => {
  const { rejectWithValue, dispatch } = thunkApi;
  try {
    console.log(userData);
    const res = await axios.post<getLoginData>(
      'http://localhost:5000/api/login',
      userData
    );
    console.log(res);
    if (res.data) {
      dispatch(userActions.setAuthData(res.data));
      localStorage.setItem(LOCAL_STORAGE_TOKEN, res.data.token);
    }
  } catch (error) {
    return rejectWithValue(error.response.data.msg);
  }
});
