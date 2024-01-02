import { type StateSchema } from '@/app/provider/StoreProvider/config/stateSchema';

export const getAuthLoading = (state: StateSchema) => state.auth.loading;
