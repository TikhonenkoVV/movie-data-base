import { createSlice } from '@reduxjs/toolkit';
import {
    hendleFetchFavorites,
    hendleAddFavorites,
    hendleDeleteFavorites,
} from './favoritesOperations';

const initialState = {
    favoritesArray: [],
    isLoading: false,
    error: null,
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(hendleFetchFavorites.pending, state => {
                state.isLoading = true;
            })
            .addCase(hendleFetchFavorites.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.favoritesArray = action.payload;
            })
            .addCase(hendleFetchFavorites.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(hendleAddFavorites.pending, state => {
                state.isLoading = true;
            })
            .addCase(hendleAddFavorites.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.favoritesArray.push(action.payload);
            })
            .addCase(hendleAddFavorites.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(hendleDeleteFavorites.pending, state => {
                state.isLoading = true;
            })
            .addCase(hendleDeleteFavorites.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                const i = state.favoritesArray.findIndex(
                    favorites => favorites.id === action.payload.id
                );
                state.favoritesArray.splice(i, 1);
            })
            .addCase(hendleDeleteFavorites.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const favoritesReducer = favoritesSlice.reducer;
