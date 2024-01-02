import { type ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { type StateSchema } from './stateSchema';
import { authReducer } from '@/features/auth';
import { userReducer } from '@/entities/User';
// ...

export const createStore = () => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    auth: authReducer,
    user: userReducer,
  };

  const store = configureStore({
    reducer: rootReducers,
    // {
    //   //   posts: postsReducer,
    //   //   comments: commentsReducer,
    //   //   users: usersReducer,
    // },
  });
  return store;
};

export type AppDispatch = ReturnType<typeof createStore>['dispatch'];
