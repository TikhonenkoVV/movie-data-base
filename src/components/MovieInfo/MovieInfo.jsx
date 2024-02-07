import {
    MovieInfoTitle,
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
    name,
    overview,
    genres,
    poster_path,
    release,
    first_air,
    backdrop_path,
    onClose,
}) => {
    const { isModalOpen } = useModal();

    return (
        <MovieWrapper bgr={backdrop_path}>
            <PosterWrapper bgr={backdrop_path}>
                <Poster src={poster_path} alt={name} />
            </PosterWrapper>
            <MovieInfoWrapper>
                <MovieInfoTitle>{name}</MovieInfoTitle>
                {release.release_date && (
                    <p>
                        {release.title}
                        {release.release_date}
                    </p>
                )}
                {first_air.first_air_date && (
                    <p>
                        {first_air.title}
                        {first_air.first_air_date}
                    </p>
                )}
                <ScoreBox>
                    <ScoreBar rating={vote_average} />
                    <h3>User Score</h3>
                </ScoreBox>
                <h2>Owerview</h2>
                <p>{overview}</p>
                <h2>Genres</h2>
                <p>{genres?.map(({ name }) => name).join(', ')}</p>
            </MovieInfoWrapper>
            {isModalOpen && <Modal onClose={onClose} />}
        </MovieWrapper>
    );
};
