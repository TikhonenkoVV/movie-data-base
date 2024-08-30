import { getPopular } from 'common/services/api';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectLang } from 'common/store/selector';
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
    StyledLink,
} from './PopularPersons.styled';
import { Container } from 'ui/shared/layouts/Container/Container';
import { SectionTitle } from 'ui/shared/components/SectionTitle/SectionTitle';
import { useTranslate } from 'hooks/useTranslate';

const PopularPersons = () => {
    const language = useSelector(selectLang);
    const { t } = useTranslate();

    const [persons, setPersons] = useState();
    const [error, setError] = useState();
    useEffect(() => {
        getPopular('person', language, 1)
            .then(data => setPersons(normalizePopularPersons(data.results)))
            .catch(err => setError(err.message));
    }, [language]);

    return (
        <section>
            <Container>
                <SectionTitle>{`${t('popular')} ${t(
                    'persons_a'
                )}`}</SectionTitle>
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
                                            <ItemTitle>
                                                {t('department')}:
                                            </ItemTitle>
                                            <Description>
                                                {known_for_department}
                                            </Description>
                                        </InfoItem>
                                        {known_for.length > 0 && (
                                            <InfoItem>
                                                <ItemTitle>
                                                    {t('knownFor')}:
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
            {error && <p>{error}</p>}
        </section>
    );
};

export default PopularPersons;
