import { Loader } from 'components/Loader';
import { ReviewTitle, StyledSection } from './Review.styled';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDetails } from 'services/api';
import { ReviewItem } from 'components/ReviewItem/ReviewItem';
import { Container } from 'components/Container/Container';
import { Page404 } from 'components/Page404/Page404';

export const Review = () => {
    const { mediaId } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        if (!mediaId) return;
        const type = mediaId.split('-')[0];
        const id = mediaId.split('-')[1];
        setIsLoading(true);
        getDetails(type, id, '/reviews')
            .then(data => {
                setReviews(data.results);
            })
            .catch(err => {
                setError(err.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [mediaId]);

    return (
        <StyledSection>
            <Container>
                {isLoading && <Loader />}
                {reviews?.length > 0 && (
                    <>
                        <ReviewTitle>Reviews</ReviewTitle>
                        <ul>
                            {reviews?.map(review => (
                                <ReviewItem
                                    key={review.id}
                                    author={review.author}
                                    content={review.content}
                                />
                            ))}
                        </ul>
                    </>
                )}
                {reviews?.length < 1 && (
                    <ReviewTitle>Sorry, this movie has no reviews.</ReviewTitle>
                )}
                {error && <Page404 />}
            </Container>
        </StyledSection>
    );
};
