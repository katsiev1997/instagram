import { type StateSchema } from '@/app/provider/StoreProvider/config/stateSchema';

export const getAuthError = (state: StateSchema) => state.auth.error || false;
