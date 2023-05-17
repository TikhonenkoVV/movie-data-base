import { Loader } from 'components/Loader/Loader';
import {
    Expander,
    ReviewAutor,
    RevieText,
    RevievItem,
    ReviewGradient,
    ReviewList,
    ReviewTitle,
    ReviewWrapper,
} from './Review.styled';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { gethMovieDetails } from 'services/api';
import { ToastContainer, toast } from 'react-toastify';

export const Review = () => {
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState([]);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        if (!movieId) return;
        setIsLoading(true);
        gethMovieDetails(movieId, '/reviews')
            .then(data => {
                setReviews(data.results);
            })
            .catch(err => {
                setError(err.message);
                toast(err.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [movieId]);

    return (
        <>
            {isLoading && <Loader />}
            {reviews.length > 0 && (
                <>
                    <ReviewTitle>Reviews</ReviewTitle>
                    <ReviewList>
                        {reviews?.map(({ id, author, content }) => (
                            <RevievItem key={id}>
                                <ReviewAutor>Author: {author}</ReviewAutor>
                                <ReviewWrapper>
                                    <RevieText>{content}</RevieText>
                                    <ReviewGradient />
                                </ReviewWrapper>
                                <Expander type="button">Full review</Expander>
                            </RevievItem>
                        ))}
                    </ReviewList>
                </>
            )}
            {reviews.length < 1 && (
                <ReviewTitle>Sorry, this movie has no reviews.</ReviewTitle>
            )}
            {error && <ToastContainer />}
        </>
    );
};
