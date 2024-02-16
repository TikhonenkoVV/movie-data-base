import { Loader } from 'components/Loader/Loader';
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
        <Container>
            {isLoading && <Loader />}
            <TrendsToggler
                trands={trands}
                onBtnDayClick={onBtnDayClick}
                onBtnWeekClick={onBtnWeekClick}
                hendleSelectChange={hendleSelectChange}
            />
            <MediaList media={movies} />
            {error && <ToastContainer />}
        </Container>
    );
};

export default Home;
