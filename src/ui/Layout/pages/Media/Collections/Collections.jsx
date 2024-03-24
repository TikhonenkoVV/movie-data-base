import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Collections = () => {
    return (
        <Suspense>
            <Outlet />
        </Suspense>
    );
};
