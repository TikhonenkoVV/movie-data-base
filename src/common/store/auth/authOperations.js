import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const hendleSignUp = createAsyncThunk(
    'auth/signUp',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/users/signup', credentials);
            setAuthHeader(data.tokens.accessToken);
            return data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

export const hendleSignIn = createAsyncThunk(
    'auth/signIn',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/users/signin', credentials);
            setAuthHeader(data.tokens.accessToken);
            return data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

export const hendleSignOut = createAsyncThunk(
    'auth/signout',
    async (_, { rejectWithValue }) => {
        try {
            await axios.post('/users/logout');
            setAuthHeader('');
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

export const hendleRefreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, { rejectWithValue, getState }) => {
        const state = getState();
        const persistToken = state.auth.accessToken;
        if (persistToken === null) {
            return rejectWithValue();
        }

        try {
            setAuthHeader(persistToken);
            const { data } = await axios.get('/users/current');
            return data;
        } catch (err) {
            return rejectWithValue(err.response.status);
        }
    }
);

export const hendleRefreshToken = createAsyncThunk(
    'auth/refreshtoken',
    async (_, { rejectWithValue, getState }) => {
        const state = getState();
        const persistToken = state.auth.accessToken;
        if (persistToken === null) {
            return rejectWithValue();
        }
        try {
            const { data } = await axios.get('/users/current', {
                refreshToken: persistToken,
            });
            return data;
        } catch (err) {
            return rejectWithValue(err.response.statusText);
        }
    }
);

export const updateUser = createAsyncThunk(
    'auth/updateUser',
    async (userData, thunkAPI) => {
        try {
            const { data } = await axios.patch('/auth', userData);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue({
                message: error.response.data.message,
                status: error.response.status,
            });
        }
    }
);
