import { createSlice } from '@reduxjs/toolkit';
import {
    hendleRefreshUser,
    hendleSignIn,
    hendleSignOut,
    hendleSignUp,
} from './authOperations';

const initialState = {
    user: { name: '', email: '', subscription: null },
    accessToken: null,
    refreshToken: null,
    isSignedIn: false,
    isLoading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(hendleSignUp.pending, state => {
                state.isLoading = true;
            })
            .addCase(hendleSignUp.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.accessToken = action.payload.tokens.accessToken;
                state.refreshToken = action.payload.tokens.refreshToken;
                state.isSignedIn = true;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(hendleSignUp.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(hendleSignIn.pending, state => {
                state.isLoading = true;
            })
            .addCase(hendleSignIn.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.accessToken = action.payload.tokens.accessToken;
                state.refreshToken = action.payload.tokens.refreshToken;
                state.isSignedIn = true;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(hendleSignIn.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(hendleSignOut.pending, state => {
                state.isLoading = true;
            })
            .addCase(hendleSignOut.fulfilled, state => {
                state.user = { name: '', email: '', subscription: null };
                state.accessToken = null;
                state.refreshToken = null;
                state.isSignedIn = false;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(hendleSignOut.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(hendleRefreshUser.pending, state => {
                state.isLoading = true;
            })
            .addCase(hendleRefreshUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isSignedIn = true;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(hendleRefreshUser.rejected, (state, action) => {
                console.log('payload :', action.payload);
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const authReducer = authSlice.reducer;
