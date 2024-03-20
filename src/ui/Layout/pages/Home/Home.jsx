import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { getMovies } from 'common/services/api';
import { getBackgrounds } from 'common/services/getBackgraunds';
import { Hero } from './Hero/Hero';
import { Container } from 'ui/Layout/globalComponents/layouts/Container/Container';
import { TrendsToggler } from './TrendsTogler/TrendsTogler';
import { MediaList } from './MediaList/MediaList';
import { Loader } from 'ui/Layout/globalComponents/components/Loader';

const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [trands, setTrends] = useState('day');
    const [mediaTypes, setMediaTypes] = useState('all');
    const [movies, setMovies] = useState([]);
    const [backgrounds, setBackgrounds] = useState();
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        getMovies(mediaTypes, trands)
            .then(data => {
                setMovies(data.results);
                setBackgrounds(getBackgrounds(data.results));
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
            <Hero backgrounds={backgrounds} />
            <section className="padding-top">
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
