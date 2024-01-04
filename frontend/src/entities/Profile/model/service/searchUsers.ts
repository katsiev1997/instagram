import { type ThunkConfig } from '@/app/provider';
import { type User } from '@/entities/User/model/types/user';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface searchUsersParams {
  search: string;
}
interface getFetchSearchUsers {
  users: User[];
}

export const getUsers = createAsyncThunk<
  any,
  searchUsersParams,
  ThunkConfig<string>
>('profile/searchUsers', async ({ search }, thunkApi) => {
  const { rejectWithValue, extra } = thunkApi;
  try {
    const res = await extra.api.get<getFetchSearchUsers>(
      `/search?username=${search}`
    );
    return res.data.users;
  } catch (error) {
    return rejectWithValue(error.response.data.msg);
  }
});
