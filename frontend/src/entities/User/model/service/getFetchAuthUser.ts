import { type ThunkConfig } from '@/app/provider';
import { userActions } from '@/entities/User';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_TOKEN } from '@/shared/consts/localStorage';
import { type GetFetchLoginData } from '@/features/auth/model/service/loginByEmail';

export const getFetchAuthUser = createAsyncThunk<
  string,
  void,
  ThunkConfig<string>
>('user/getAuthUser', async (_, thunkApi) => {
  const { rejectWithValue, dispatch, extra } = thunkApi;
  try {
    const res = await extra.api.post<GetFetchLoginData>('/refresh_token');

    if (res.data) {
      dispatch(userActions.setAuthData(res.data));
      localStorage.setItem(LOCAL_STORAGE_TOKEN, res.data.token);
    }
  } catch (error) {
    return rejectWithValue(error.response.data.msg);
  }
});
