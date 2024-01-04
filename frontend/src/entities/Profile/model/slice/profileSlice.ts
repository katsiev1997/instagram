import { createSlice } from '@reduxjs/toolkit';
import { type ProfileState } from '../types/profile';

const initialState: ProfileState = {
  posts: [],
  users: [],
  user: null,
  loading: false,
  succees: '',
  error: '',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileUser: (state, action) => {
      state.user = action.payload
    }
  },
});

export const profileActions = profileSlice.actions;
export const profileReducer = profileSlice.reducer;
