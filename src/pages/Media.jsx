import { Container } from 'components/Container/Container';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { Suspense } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

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
            {currPath !== 'cast-and-crew' && (
                <section>
                    <Container>
                        <SearchForm onSubmit={onSubmit} />
                    </Container>
                </section>
            )}{' '}
            <Suspense>
                <Outlet />
            </Suspense>
        </>
    );
};

export default Media;
