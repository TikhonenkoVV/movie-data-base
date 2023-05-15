import {
    DetailListStyled,
    DetailsItem,
    DetailsLink,
    TrailerBtn,
} from './DetailList.styled';

export const DetailList = ({ onTogle }) => {
    return (
        <DetailListStyled>
            <DetailsItem>
                <DetailsLink to={'cast'}>Cast</DetailsLink>
            </DetailsItem>
            <DetailsItem>
                <DetailsLink to={'review'}>Review</DetailsLink>
            </DetailsItem>
            <DetailsItem>
                <TrailerBtn onClick={onTogle}>Trailer</TrailerBtn>
            </DetailsItem>
        </DetailListStyled>
    );
};
