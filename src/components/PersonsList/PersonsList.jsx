import { Grid, GridItem } from 'components/App.styled';
import { Link, useLocation } from 'react-router-dom';
import { normalizePersonsData } from 'services/normalize';

export const PersonsList = ({ persons }) => {
    const location = useLocation();
    const data = normalizePersonsData(persons);
    return (
        <Grid>
            {data.map(({ id, person_name, poster }) => (
                <GridItem key={id}>
                    <Link to={`/person/${id}`} state={{ from: location }}>
                        <img src={poster} alt={person_name} />
                    </Link>
                </GridItem>
            ))}
        </Grid>
    );
};
