import { CreditsItem } from 'components/CreditsItem/CreditsItem';
import { normalizeActing, normalizeCrew } from 'services/normalize';
import { ActingList, Title } from './Acting.styled';

export const Acting = ({ acting, crew }) => {
    const personActing = normalizeActing(acting);
    const personInCrew = normalizeCrew(crew);

    return (
        <>
            <Title>Acting</Title>
            <ActingList>
                <CreditsItem credits={personActing} />
            </ActingList>
            {personInCrew && personInCrew?.length > 0 && (
                <>
                    <Title>Crew</Title>
                    {personInCrew?.map((el, i) => (
                        <ActingList key={i}>
                            <li>
                                <Title>{Object.keys(el)}</Title>
                                <ul>
                                    <CreditsItem
                                        credits={el[Object.keys(el)]}
                                    />
                                </ul>
                            </li>
                        </ActingList>
                    ))}
                </>
            )}
        </>
    );
};
