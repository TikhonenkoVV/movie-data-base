import { createSelector } from '@reduxjs/toolkit';

export const selectRefreshToken = state => state.auth.refreshToken;
export const selectUserName = state => state.auth.user.name;
export const selectContacts = state => state.favorites.contactsArray;
export const selectIsSignedIn = state => state.auth.isSignedIn;
export const selectIsLoading = state => state.favorites.isLoading;
