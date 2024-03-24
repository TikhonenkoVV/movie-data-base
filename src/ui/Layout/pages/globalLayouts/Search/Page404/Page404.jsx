import { InfoTextStyled, Page404Styled, TitleStyled } from './Page404.styled';
import page_404 from '../../../../../images/no-found.png';

export const Page404 = () => {
    return (
        <Page404Styled>
            <TitleStyled>Ooops!</TitleStyled>
            <img width={300} src={page_404} alt="page-404" />
            <InfoTextStyled>Page no found</InfoTextStyled>
        </Page404Styled>
    );
};
