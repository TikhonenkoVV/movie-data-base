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

export const MovieInfo = ({ movie, onClose, directing }) => {
    const {
        vote_average,
        name,
        overview,
        genres,
        poster_path,
        release,
        first_air,
        backdrop_path,
        created_by,
    } = movie;
    const { isModalOpen } = useModal();
    const creators = [];
    const directors = [];
    created_by?.map(el => creators.push(el.name));
    directing?.map(el => directors.push(el.personName));

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
                {created_by && (
                    <>
                        <h2>Creators</h2>
                        <p>{creators.join(', ')}</p>
                    </>
                )}
                {directing && (
                    <>
                        <h2>Director</h2>
                        <p>{directors.join(', ')}</p>
                    </>
                )}
            </MovieInfoWrapper>
            {isModalOpen && <Modal onClose={onClose} />}
        </MovieWrapper>
    );
};
