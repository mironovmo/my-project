import { StateSchema } from 'app/provider/StoreProvider';

export const getUserAuthData = (state: StateSchema) => state.user.athData;
