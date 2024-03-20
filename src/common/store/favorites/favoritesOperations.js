import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL =
//     'https://murmuring-reaches-74476-7a9ce3386298.herokuapp.com/api';
axios.defaults.baseURL = 'http://localhost:5000/api';

export const hendleFetchFavorites = createAsyncThunk(
    'favorites/fetchAll',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get('/favorites');
            return data;
        } catch (err) {
            rejectWithValue(err.message);
        }
    }
);

export const hendleAddFavorites = createAsyncThunk(
    'favorites/addFavorites',
    async (newFavorites, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/favorites', newFavorites);
            return data;
        } catch (err) {
            rejectWithValue(err.message);
        }
    }
);

export const hendleDeleteFavorites = createAsyncThunk(
    'favorites/deleteFavorites',
    async (favoritesId, { rejectWithValue }) => {
        try {
            const response = await axios.delete(`/favorites/${favoritesId}`);
            return response.data;
        } catch (err) {
            rejectWithValue(err.message);
        }
    }
);
