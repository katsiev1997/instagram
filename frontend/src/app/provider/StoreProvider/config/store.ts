import { type ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { type ThunkExtraArg, type StateSchema } from './stateSchema';
import { authReducer } from '@/features/auth';
import { userReducer } from '@/entities/User';
import { $api } from '@/shared/api';
// ...

export const createStore = () => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    auth: authReducer,
    user: userReducer,
  };

  const extraArg: ThunkExtraArg = {
    api: $api,
  };

  const store = configureStore({
    reducer: rootReducers,
    devTools: DEV,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }),
    // {
    //   //   posts: postsReducer,
    //   //   comments: commentsReducer,
    //   //   users: usersReducer,
    // },
  });
  return store;
};

export type AppDispatch = ReturnType<typeof createStore>['dispatch'];
