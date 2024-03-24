import { Suspense } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const Media = () => {
    const { pathname } = useLocation();
    const isRootRoute = pathname.split('/').length === 2;
    return (
        <>
            {isRootRoute && <Navigate to={'popular'} />}
            <Suspense>
                <Outlet />
            </Suspense>
        </>
    );
};

export default Media;
