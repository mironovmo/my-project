import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

const initialState: UserSchema = {};

export const userSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.athData = action.payload;
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
            if (user) {
                state.athData = JSON.parse(user);
            }
        },
        logout: (state) => {
            state.athData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
