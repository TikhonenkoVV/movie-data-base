import noPoster from '../../images/no-poster.jpg';
import {
    MovieInfoWrapper,
    MovieWrapper,
    Poster,
    PosterWrapper,
    ScoreBox,
} from './MovieInfo.styled';
import { ScoreBar } from 'components/ScoreBar/ScoreBar';
import { Modal } from 'components/Modal/Modal';
import { useModal } from 'pages/MovieDetails';

export const MovieInfo = ({
    vote_average,
    title,
    overview,
    genres,
    poster_path,
    release_date,
    backdrop_path,
    onClose,
}) => {
    const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w500/';
    const releaseDate = new Date(release_date).getFullYear().toString();
    const rating = Math.round(vote_average * 10);

    const { isModalOpen } = useModal();

    return (
        <>
            <MovieWrapper bgr={backdrop_path}>
                <PosterWrapper bgr={backdrop_path}>
                    <Poster
                        src={
                            poster_path
                                ? IMAGES_BASE_URL + poster_path
                                : noPoster
                        }
                        alt={title}
                    />
                </PosterWrapper>
                <MovieInfoWrapper>
                    <h1 style={{ textAlign: 'center' }}>
                        {title} ({releaseDate})
                    </h1>
                    <ScoreBox>
                        <ScoreBar rating={rating} />
                        <h3>User Score</h3>
                    </ScoreBox>
                    <h2>Owerview</h2>
                    <p>{overview}</p>
                    <h2>Genres</h2>
                    <p>{genres?.map(({ name }) => name).join(', ')}</p>
                </MovieInfoWrapper>
                {isModalOpen && <Modal onClose={onClose} />}
            </MovieWrapper>
        </>
    );
};
