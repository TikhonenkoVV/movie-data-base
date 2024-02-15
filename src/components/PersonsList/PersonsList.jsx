import { Grid, GridItem } from 'components/App.styled';
import { Link } from 'react-router-dom';
import { normalizePersonsData } from 'services/normalize';
import { CardInfo, ImgWrapper, PersonTitle } from './PersonsList.styled';

export const PersonsList = ({ persons }) => {
    const data = normalizePersonsData(persons);
    return (
        <Grid>
            {data.map(({ id, person_name, poster }) => (
                <GridItem key={id}>
                    <Link to={`/person/${id}`}>
                        <ImgWrapper>
                            <img src={poster} alt={person_name} />
                        </ImgWrapper>
                        <CardInfo>
                            <PersonTitle>{person_name}</PersonTitle>
                        </CardInfo>
                    </Link>
                </GridItem>
            ))}
        </Grid>
    );
};
