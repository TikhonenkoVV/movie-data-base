// import { createSelector } from '@reduxjs/toolkit';

// export const selectRefreshToken = state => state.auth.refreshToken;
// export const selectUserName = state => state.auth.user.name;
// export const selectContacts = state => state.favorites.contactsArray;
// export const selectIsSignedIn = state => state.auth.isSignedIn;
// export const selectIsLoading = state => state.favorites.isLoading;

export const selectVerifiedUser = state => state.auth.isSignedIn;
export const selectTheme = state => state.auth.theme;
export const selectLang = state => state.auth.lang;
export const selectDictionary = state => state.auth.dictionary;
export const selectDevice = state => state.device.device;
