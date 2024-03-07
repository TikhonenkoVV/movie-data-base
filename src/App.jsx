import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { lazy, useEffect, useState } from 'react';
import { Global, ThemeProvider } from '@emotion/react';
import { GlobalStyles, darkTheme, lightTheme, theme } from 'styles';
import { storageLoad, storageSave } from './services/storage';

const Home = lazy(() => import('./pages/Home'));
const Media = lazy(() => import('./pages/Media'));
const PersonDetails = lazy(() => import('./pages/PersonDetails'));
const MovieDetails = lazy(() =>
    import('./components/MovieDetails/MovieDetails').then(module => {
        return { ...module, default: module.MovieDetails };
    })
);

const Search = lazy(() =>
    import('./components/Search/Search').then(module => {
        return { ...module, default: module.Search };
    })
);

const MediaDetails = lazy(() =>
    import('./components/MediaDetails/MediaDetails').then(module => {
        return { ...module, default: module.MediaDetails };
    })
);

const FullCast = lazy(() =>
    import('./components/FullCast/FullCast').then(module => {
        return { ...module, default: module.FullCast };
    })
);

const Review = lazy(() =>
    import('./components/Rewiew/Review').then(module => {
        return { ...module, default: module.Review };
    })
);

const dark = {
    ...theme,
    ...darkTheme,
};

const light = {
    ...theme,
    ...lightTheme,
};

export const App = () => {
    const [currentTheme, setCurrentTheme] = useState(dark);

    const [currentColor, setCurrentColor] = useState(
        storageLoad('movieDBTheme') ? storageLoad('movieDBTheme') : 'dark'
    );

    const onChangeTheme = colors => {
        setCurrentColor(colors);
    };

    useEffect(() => {
        if (currentColor === 'dark') {
            setCurrentTheme(dark);
            storageSave('movieDBTheme', 'dark');
        }
        if (currentColor === 'light') {
            setCurrentTheme(light);
            storageSave('movieDBTheme', 'light');
        }
    }, [currentColor]);

    return (
        <ThemeProvider theme={currentTheme}>
            <Global styles={GlobalStyles} />
            <Routes>
                <Route
                    path="/"
                    element={<Layout onChangeTheme={onChangeTheme} />}
                >
                    <Route index element={<Home />} />
                    <Route path="movies" element={<Media />}>
                        <Route path="search" element={<Search />} />
                        <Route path=":mediaId" element={<MovieDetails />} />
                        <Route
                            path=":mediaId/details"
                            element={<MediaDetails />}
                        >
                            <Route
                                path="cast-and-crew"
                                element={<FullCast />}
                            />
                            <Route path="reviews" element={<Review />} />
                        </Route>
                    </Route>
                    <Route path="tv-shows" element={<Media />}>
                        <Route path="search" element={<Search />} />
                        <Route path=":mediaId" element={<MovieDetails />} />
                        <Route
                            path=":mediaId/details"
                            element={<MediaDetails />}
                        >
                            <Route
                                path="cast-and-crew"
                                element={<FullCast />}
                            />
                            <Route path="reviews" element={<Review />} />
                        </Route>
                    </Route>
                    <Route path="person" element={<Media />}>
                        <Route path="search" element={<Search />} />
                        <Route path=":personId" element={<PersonDetails />} />
                    </Route>
                </Route>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </ThemeProvider>
    );
};
