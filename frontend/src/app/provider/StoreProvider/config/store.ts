import { type ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { type StateSchema } from './stateSchema';
import { authReducer } from '@/features/auth';
// ...

export const createStore = () => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    auth: authReducer,
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
