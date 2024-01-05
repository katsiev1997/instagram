import { createSlice } from '@reduxjs/toolkit';
import { type ProfileState } from '../types/profile';
import { getUsers } from '../service/searchUsers';
import { getUserProfile } from '../service/getUserProfile';

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
    builder
      .addCase(getUsers.pending, (state) => {
        state.searchLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.searchUsers = action.payload;
        state.searchLoading = false;
      })
      .addCase(getUsers.rejected, (state) => {
        state.searchLoading = false;
      })
      .addCase(getUserProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.users = [...state.users, action.payload.user];
        state.loading = false;
      })
      .addCase(getUserProfile.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const profileActions = profileSlice.actions;
export const profileReducer = profileSlice.reducer;
