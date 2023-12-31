import { createSlice } from '@reduxjs/toolkit';
import { type AuthState } from '../types/auth';
import { registerByEmail } from '../service/registerByEmail';
import { loginByEmail } from '../service/loginByEmail';

const initialState: AuthState = {
  loading: false,
  error: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(registerByEmail.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerByEmail.fulfilled, (state) => {
      state.loading = false;
      state.error = '';
    });
    builder.addCase(registerByEmail.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(loginByEmail.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginByEmail.fulfilled, (state) => {
      state.loading = false;
      state.error = '';
    });
    builder.addCase(loginByEmail.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
