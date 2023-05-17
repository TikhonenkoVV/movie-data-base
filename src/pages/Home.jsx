import {
    Container,
    HomeTitle,
    TrendsBtn,
    TrendsBtnWrapper,
    TrendsTogler,
} from 'components/App.styled';
import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { gethMovies } from 'services/api';
import { ToastContainer, toast } from 'react-toastify';

const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [trands, setTrends] = useState('day');
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        gethMovies('day')
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
    }, []);

    useEffect(() => {
        setIsLoading(true);
        gethMovies(trands)
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
    }, [trands]);

    const onBtnWeekClick = () => {
        setTrends('week');
    };

    const onBtnDayClick = () => {
        setTrends('day');
    };

    return (
        <Container>
            {isLoading && <Loader />}
            <TrendsTogler>
                <HomeTitle>Trending</HomeTitle>
                <TrendsBtnWrapper>
                    <TrendsBtn
                        datatype="day"
                        className={trands === 'day' ? 'active' : ''}
                        type="button"
                        onClick={onBtnDayClick}
                    >
                        today
                    </TrendsBtn>
                    <TrendsBtn
                        className={trands === 'week' ? 'active' : ''}
                        type="button"
                        onClick={onBtnWeekClick}
                    >
                        this week
                    </TrendsBtn>
                </TrendsBtnWrapper>
            </TrendsTogler>
            <MovieList movies={movies} />
            {error && <ToastContainer />}
        </Container>
    );
};

export default Home;
