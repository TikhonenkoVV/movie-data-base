import { Container } from 'components/App.styled';
import { Loader } from 'components/Loader/Loader';
import { Page404 } from 'components/Page404/Page404';
import { Pagination } from 'components/Pagination/Pagination';
import { PersonsList } from 'components/PersonsList/PersonsList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { getPersonsByName } from 'services/api';

const Person = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [first, setFirst] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();
    const [total, setTotal] = useState(0);
    const [persons, setPersons] = useState([]);
    const [error, setError] = useState(null);
    let page = 1;

    const onSubmit = query => {
        setSearchParams({ query, page });
    };

    useEffect(() => {
        const query = searchParams.get('query');
        const page = searchParams.get('page');
        if (!query) return;
        setIsLoading(true);
        getPersonsByName(query, page)
            .then(data => {
                setPersons(data.results);
                setTotal(data.total_pages);
            })
            .catch(err => {
                setError(err.message);
                toast(err.message);
            })
            .finally(() => {
                setIsLoading(false);
                setFirst(false);
            });
    }, [searchParams]);

    return (
        <section>
            <Container>
                {isLoading && <Loader />}
                <SearchForm
                    style={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginBottom: '24px',
                    }}
                    onSubmit={onSubmit}
                />
                {total > 0 && <Pagination totalPages={total} />}
                {persons && <PersonsList persons={persons} />}
                {!first && persons.length < 1 && <Page404 />}
                {error && <ToastContainer />}
            </Container>
        </section>
    );
};

export default Person;
