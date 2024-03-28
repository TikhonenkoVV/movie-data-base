import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const CollectionLayout = () => {
    return (
        <Suspense>
            <Outlet />
        </Suspense>
    );
};
