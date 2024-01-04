import { createSlice } from '@reduxjs/toolkit';
import { type ProfileState } from '../types/profile';
import { getUsers } from '../service/searchUsers';

const initialState: ProfileState = {
  posts: [],
  users: [],
  user: null,
  loading: false,
  success: '',
  error: '',
  searchUsers: [],
  searchLoading: false,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileUser: (state, action) => {
      state.user = action.payload;
    },
    setSearchUsers: (state) => {
      state.searchUsers = [];
    },
  },
  extraReducers(builder) {
    builder.addCase(getUsers.pending, (state) => {
      state.searchLoading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.searchUsers = action.payload;
      state.searchLoading = false;
    });
    builder.addCase(getUsers.rejected, (state) => {
      state.searchLoading = false;
    });
  },
});

export const profileActions = profileSlice.actions;
export const profileReducer = profileSlice.reducer;
