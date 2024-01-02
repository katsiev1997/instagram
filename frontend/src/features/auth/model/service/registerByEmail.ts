import { type ThunkConfig } from '@/app/provider';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const registerByEmail = createAsyncThunk<any, any, ThunkConfig>(
  'auth/register',
  async (userData, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      console.log(userData);
      const res = await axios.post(
        'http://localhost:5000/api/register',
        userData
      );
      console.log(res);
    } catch (error) {
      return rejectWithValue(error.response.data.msg);
    }
  }
);
