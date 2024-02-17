import { Container } from 'components/Container/Container';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { Suspense } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Media = () => {
    let page = 1;
    const navigate = useNavigate();

    const onSubmit = query => {
        navigate(`search?query=${query}&page=${page}`);
    };

    return (
        <>
            <section>
                <Container>
                    <SearchForm onSubmit={onSubmit} />
                </Container>
            </section>
            <Suspense>
                <Outlet />
            </Suspense>
        </>
    );
};

export default Media;
