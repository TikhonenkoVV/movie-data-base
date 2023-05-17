import {
    DetailListStyled,
    DetailsItem,
    DetailsLink,
    TrailerBtn,
} from './DetailList.styled';

export const DetailList = ({ trailer, onTogle }) => {
    return (
        <DetailListStyled>
            <DetailsItem>
                <DetailsLink to={'cast'}>Cast</DetailsLink>
            </DetailsItem>
            <DetailsItem>
                <DetailsLink to={'review'}>Review</DetailsLink>
            </DetailsItem>
            {trailer && (
                <DetailsItem>
                    <TrailerBtn onClick={onTogle}>Trailer</TrailerBtn>
                </DetailsItem>
            )}
        </DetailListStyled>
    );
};
