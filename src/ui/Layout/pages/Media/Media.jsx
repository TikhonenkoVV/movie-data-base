import { Suspense } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { SearchForm } from '../globalLayouts/Search/SearchForm/SearchForm';
import { Container } from 'ui/Layout/globalComponents/layouts/Container/Container';

const Media = () => {
    let page = 1;
    const navigate = useNavigate();

    const onSubmit = query => {
        navigate(`search?query=${query}&page=${page}`);
    };

    const location = useLocation();
    const fullPath = location.pathname.split('/');
    const currPath = fullPath[fullPath.length - 1];

    return (
        <>
            {currPath !== 'cast-and-crew' && currPath !== 'reviews' && (
                <section className="padding-top">
                    <Container>
                        <SearchForm onSubmit={onSubmit} />
                    </Container>
                </section>
            )}
            <Suspense>
                <Outlet />
            </Suspense>
        </>
    );
};

export default Media;
