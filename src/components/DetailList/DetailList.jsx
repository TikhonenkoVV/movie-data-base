import {
    DetailListStyled,
    DetailsItem,
    DetailsLink,
    TrailerBtn,
} from './DetailList.styled';

export const DetailList = ({ trailer, onTogle, mediaTypes }) => {
    return (
        <DetailListStyled>
            <DetailsItem>
                <DetailsLink to={'cast'} state={{ mediaTypes }}>
                    Cast
                </DetailsLink>
            </DetailsItem>
            <DetailsItem>
                <DetailsLink to={'review'} state={{ mediaTypes }}>
                    Review
                </DetailsLink>
            </DetailsItem>
            {trailer && (
                <DetailsItem>
                    <TrailerBtn onClick={onTogle}>Trailer</TrailerBtn>
                </DetailsItem>
            )}
        </DetailListStyled>
    );
};
