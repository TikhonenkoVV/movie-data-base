import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    device: '',
};

export const deviceSlice = createSlice({
    name: 'device',
    initialState,
    reducers: {
        setDevice: (state, { payload }) => {
            state.device = payload;
        },
    },
});

export const { setDevice } = deviceSlice.actions;

export const deviceReducer = deviceSlice.reducer;
