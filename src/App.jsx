import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './ui/Layout/Layout';
import { lazy, useEffect, useState } from 'react';
import { Global, ThemeProvider } from '@emotion/react';
import { GlobalStyles, darkTheme, lightTheme, theme } from 'styles';
import { storageLoad, storageSave } from 'common/services/storage';
import { useDispatch } from 'react-redux';
import { setDevice } from 'common/store/device/deviceSlice';
import { getDeviceType } from 'common/services/geDeviceType';

const Home = lazy(() => import('./ui/Layout/pages/Home/Home'));
const Media = lazy(() => import('./ui/Layout/pages/Media/Media'));
const PersonDetails = lazy(() =>
    import('./ui/Layout/pages/PersonDetails/PersonDetails')
);
const MediaDetails = lazy(() =>
    import('./ui/Layout/pages/Media/MediaDetails/MediaDetails').then(module => {
        return { ...module, default: module.MediaDetails };
    })
);

const Search = lazy(() =>
    import('./ui/Layout/pages/globalLayouts/Search/Search').then(module => {
        return { ...module, default: module.Search };
    })
);

const MediaLayout = lazy(() =>
    import('./ui/Layout/pages/Media/MediaLayout/MediaLayout').then(module => {
        return { ...module, default: module.MediaLayout };
    })
);

const FullCast = lazy(() =>
    import('./ui/Layout/pages/Media/MediaLayout/FullCast/FullCast').then(
        module => {
            return { ...module, default: module.FullCast };
        }
    )
);

const Review = lazy(() =>
    import('./ui/Layout/pages/Media/MediaLayout/Rewiew/Review').then(module => {
        return { ...module, default: module.Review };
    })
);

const Collections = lazy(() =>
    import('./ui/Layout/pages/Media/Collections/Collections').then(module => {
        return { ...module, default: module.Collections };
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
    const dispatch = useDispatch();

    const [currentTheme, setCurrentTheme] = useState(dark);

    const [currentColor, setCurrentColor] = useState(
        storageLoad('movieDBTheme') ? storageLoad('movieDBTheme') : 'dark'
    );

    const onChangeTheme = colors => {
        setCurrentColor(colors);
    };

    useEffect(() => {
        dispatch(setDevice(getDeviceType()));
    }, [dispatch]);

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
                        <Route path=":mediaId" element={<MediaDetails />} />
                        <Route
                            path=":mediaId/details"
                            element={<MediaLayout />}
                        >
                            <Route
                                path="cast-and-crew"
                                element={<FullCast />}
                            />
                            <Route path="reviews" element={<Review />} />
                        </Route>
                        <Route
                            path="collections/:collectionId"
                            element={<Collections />}
                        />
                    </Route>
                    <Route path="tv-shows" element={<Media />}>
                        <Route path="search" element={<Search />} />
                        <Route path=":mediaId" element={<MediaDetails />} />
                        <Route
                            path=":mediaId/details"
                            element={<MediaLayout />}
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
