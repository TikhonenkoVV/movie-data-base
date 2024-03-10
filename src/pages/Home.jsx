import { Loader } from 'components/Loader';
import { MediaList } from 'components/MediaList/MediaList';
import { useEffect, useState } from 'react';
import { getMovies } from 'services/api';
import { ToastContainer, toast } from 'react-toastify';
import { Container } from 'components/Container/Container';
import { TrendsToggler } from 'components/TrendsTogler/TrendsTogler';

const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [trands, setTrends] = useState('day');
    const [mediaTypes, setMediaTypes] = useState('all');
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        getMovies(mediaTypes, trands)
            .then(data => {
                setMovies(data.results);
            })
            .catch(err => {
                setError(err.message);
                toast(err.message);
            })

            .finally(() => {
                setIsLoading(false);
            });
    }, [mediaTypes, trands]);

    const onBtnWeekClick = () => {
        setTrends('week');
    };

    const onBtnDayClick = () => {
        setTrends('day');
    };

    const hendleSelectChange = mediaType => {
        setMediaTypes(mediaType);
    };

    return (
        <>
            {isLoading && <Loader />}
            <section style={{ paddingTop: '24px' }}>
                <Container>
                    <TrendsToggler
                        trands={trands}
                        onBtnDayClick={onBtnDayClick}
                        onBtnWeekClick={onBtnWeekClick}
                        hendleSelectChange={hendleSelectChange}
                    />
                </Container>
            </section>
            <section>
                <Container>
                    <MediaList media={movies} />
                </Container>
            </section>
            {error && <ToastContainer />}
        </>
    );
};

export default Home;
