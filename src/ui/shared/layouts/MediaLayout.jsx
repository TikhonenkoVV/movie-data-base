import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const MediaLayout = () => {
    return (
        <Suspense>
            <Outlet />
        </Suspense>
    );
};
