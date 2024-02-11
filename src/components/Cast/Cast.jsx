import { Link, useLocation, useParams } from 'react-router-dom';
import { CastElement, CastGrid, CastPhoto, CastTitle } from './Cast.styled';
import { useEffect, useState } from 'react';
import { getDetails } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import { normalizeCast } from 'services/normalize';

export const Cast = () => {
    const { mediaTypes, mediaId } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState([]);
    const [cast, setCast] = useState(null);
    // const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w500/';
    // const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w66_and_h66_face/';
    const location = useLocation();

    useEffect(() => {
        if (!mediaId) return;
        setIsLoading(true);
        getDetails(
            mediaTypes,
            mediaId,
            mediaTypes === 'movie' ? '/credits' : '/aggregate_credits'
        )
            .then(data => {
                setCast(normalizeCast(data.cast));
            })
            .catch(err => {
                setError(err.message);
                toast(err.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [mediaTypes, mediaId]);

    return (
        <>
            {isLoading && <Loader />}
            {cast?.length > 0 && (
                <>
                    <CastTitle>Cast</CastTitle>
                    <CastGrid>
                        {cast?.map(
                            ({ id, castId, poster, personName, role }) => (
                                <CastElement key={castId}>
                                    <Link
                                        style={{ width: '100%' }}
                                        to={`/person/${id}`}
                                        state={{ from: location }}
                                    >
                                        <CastPhoto
                                            src={poster}
                                            alt={personName}
                                        />
                                        <p>
                                            <b>{personName}</b>
                                        </p>
                                        <p>{role}</p>
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
