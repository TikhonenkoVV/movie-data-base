import { getPopular } from 'common/services/api';
import { useEffect, useState } from 'react';
import noPoster from '../../assets/images/no-poster.jpg';
import { PROFILE_W185 } from 'common/constants';
import { normalizePopularPersons } from 'common/services/normalize/normalizePopularPersons';
import {
    Description,
    InfoItem,
    Item,
    ItemTitle,
    List,
    PersonName,
    PersonPhoto,
    SectionTitle,
    StyledLink,
} from './PopularPersons.styled';
import { Container } from 'ui/shared/layouts/Container/Container';

const PopularPersons = () => {
    const [persons, setPersons] = useState();
    const [error, setError] = useState();
    useEffect(() => {
        getPopular('person', 1)
            .then(data => setPersons(normalizePopularPersons(data.results)))
            .catch(err => setError(err.message));
    }, []);

    return (
        <section className="padding-top">
            {error && <p>{error}</p>}
            <Container>
                <SectionTitle>Top 20 Popular Persons</SectionTitle>
                <List>
                    {persons?.map(
                        ({
                            id,
                            name,
                            known_for_department,
                            known_for,
                            profile_path,
                        }) => (
                            <Item key={id}>
                                <StyledLink to={`/persons/${id}`}>
                                    <PersonPhoto
                                        width={80}
                                        src={
                                            profile_path
                                                ? PROFILE_W185 + profile_path
                                                : noPoster
                                        }
                                        alt={name}
                                    />
                                    <div>
                                        <PersonName>{name}</PersonName>
                                        <InfoItem>
                                            <ItemTitle>Department:</ItemTitle>
                                            <Description>
                                                {known_for_department}
                                            </Description>
                                        </InfoItem>
                                        {known_for.length > 0 && (
                                            <InfoItem>
                                                <ItemTitle>
                                                    Known for:
                                                </ItemTitle>
                                                {known_for.map((el, i) => (
                                                    <Description key={i}>
                                                        {el}
                                                    </Description>
                                                ))}
                                            </InfoItem>
                                        )}
                                    </div>
                                </StyledLink>
                            </Item>
                        )
                    )}
                </List>
            </Container>
        </section>
    );
};

export default PopularPersons;
