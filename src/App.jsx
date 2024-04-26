import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';
import axios from 'axios';

import { GlobalLayout } from 'ui/shared/layouts/GlobalLayout/GlobalLayout';
import { MediaLayout } from 'ui/shared/layouts/MediaLayout';

import { setDevice } from 'common/store/device/deviceSlice';
import { getDeviceType } from 'common/services/geDeviceType';
import { DetailsLayout } from 'ui/shared/layouts/DetailsLayout/DetailsLayout';
import { CollectionLayout } from 'ui/shared/layouts/CollectionLayout';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const brouserLanguage = navigator.language;
console.log(brouserLanguage);

const Home = lazy(() => import('./ui/pages/Home/Home'));

const PopularMedia = lazy(() =>
    import('./ui/pages/PopularMedia').then(module => {
        return { ...module, default: module.PopularMedia };
    })
);

const MediaDetails = lazy(() => import('./ui/pages/MediaDetails/MediaDetails'));

const FullCast = lazy(() => import('./ui/pages/FullCast/FullCast'));

const Review = lazy(() => import('./ui/pages/Rewiew/Review'));

const PersonDetails = lazy(() =>
    import('./ui/pages/PersonDetails/PersonDetails')
);

const PopularPersons = lazy(() =>
    import('./ui/pages/PopularPersons/PopularPersons')
);

const Search = lazy(() => import('./ui/pages/Search/Search'));

const CollectionDetails = lazy(() =>
    import('./ui/pages/CollectionDetails/CollectionDetails')
);

const Page404 = lazy(() => import('./ui/pages/Page404/Page404'));

export const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setDevice(getDeviceType()));
    }, [dispatch]);

    return (
        <Routes>
            <Route path="/" element={<GlobalLayout />}>
                <Route index element={<Home />} />
                <Route path="movies" element={<MediaLayout />}>
                    <Route index element={<PopularMedia />} />
                    <Route path="search" element={<Search />} />
                    <Route path=":mediaId" element={<MediaDetails />} />
                    <Route path=":mediaId/details" element={<DetailsLayout />}>
                        <Route path="cast-and-crew" element={<FullCast />} />
                        <Route path="reviews" element={<Review />} />
                    </Route>
                    <Route path="collections" element={<CollectionLayout />}>
                        <Route
                            path=":collectionId"
                            element={<CollectionDetails />}
                        />
                        <Route path="search" element={<Search />} />
                    </Route>
                </Route>
                <Route path="tv-shows" element={<MediaLayout />}>
                    <Route index element={<PopularMedia />} />
                    <Route path="search" element={<Search />} />
                    <Route path=":mediaId" element={<MediaDetails />} />
                    <Route path=":mediaId/details" element={<DetailsLayout />}>
                        <Route path="cast-and-crew" element={<FullCast />} />
                        <Route path="reviews" element={<Review />} />
                    </Route>
                </Route>
                <Route path="persons" element={<MediaLayout />}>
                    <Route index element={<PopularPersons />} />
                    <Route path="search" element={<Search />} />
                    <Route path=":personId" element={<PersonDetails />} />
                </Route>
                <Route path="*" element={<Page404 />} />
            </Route>
            <Route path="*" element={<Page404 />} />
        </Routes>
    );
};
