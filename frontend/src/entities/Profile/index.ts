export { ProfilePost } from './ui/ProfilePost/ProfilePost';
export { ProfileInfo } from './ui/ProfileInfo/ProfileInfo';

export type { ProfileState } from './model/types/profile';
export { profileActions, profileReducer } from './model/slice/profileSlice';
export { getProfileUser } from './model/selectors/getProfileUser';
export { getSearchUsers } from './model/selectors/getSearchUsers';
export { getSearchLoading } from './model/selectors/getSearchLoading';
export { getUsers } from './model/service/searchUsers';
