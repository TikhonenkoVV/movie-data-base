import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'modern-normalize';
import { App } from 'App';
import { persistor, store } from 'common/store/store';

import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter basename="/movie-data-base">
                    <App />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
