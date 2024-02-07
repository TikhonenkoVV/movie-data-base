import { Link, useLocation, useParams } from 'react-router-dom';
import { CastElement, CastGrid, CastPhoto, CastTitle } from './Cast.styled';
import { useEffect, useState } from 'react';
import { getDetails } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import noPoster from '../../images/no-poster.jpg';
import { ToastContainer, toast } from 'react-toastify';

export const Cast = () => {
    const { mediaTypes, movieId } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState([]);
    const [cast, setCast] = useState(null);
    // const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w500/';
    // const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w66_and_h66_face/';
    const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w200/';
    const location = useLocation();

    useEffect(() => {
        if (!movieId) return;
        setIsLoading(true);
        getDetails(
            mediaTypes,
            movieId,
            mediaTypes === 'movie' ? '/credits' : '/aggregate_credits'
        )
            .then(data => {
                setCast([...data.cast]);
            })
            .catch(err => {
                setError(err.message);
                toast(err.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [mediaTypes, movieId]);

    return (
        <>
            {isLoading && <Loader />}
            {cast?.length > 0 && (
                <>
                    <CastTitle>Cast</CastTitle>
                    <CastGrid>
                        {cast?.map(
                            ({
                                credit_id,
                                id,
                                profile_path,
                                name,
                                character,
                                roles,
                            }) => (
                                <CastElement key={credit_id}>
                                    <Link
                                        to={`/person/${id}`}
                                        state={{ from: location }}
                                    >
                                        <CastPhoto
                                            src={
                                                profile_path
                                                    ? IMAGES_BASE_URL +
                                                      profile_path
                                                    : noPoster
                                            }
                                            alt="_"
                                        />
                                        <p>
                                            <b>{name}</b>
                                        </p>
                                        <p>
                                            {roles
                                                ? roles[0].character
                                                : character}
                                        </p>
                                    </Link>
                                </CastElement>
                            )
                        )}
                    </CastGrid>
                </>
            )}
            {cast?.length < 1 && (
                <CastTitle>Sorry, no cast information available.</CastTitle>
            )}
            {error && <ToastContainer />}
        </>
    );
};
