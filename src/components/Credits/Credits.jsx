import { CreditsItem } from 'components/CreditsItem/CreditsItem';
import { CreditsList, Title } from './Credits.styled';
import { normalizeActing } from 'services/normalize/normalizeActing';
import { normalizePersonInCrew } from 'services/normalize/normalizePersonInCrew';

export const Credits = ({ acting, crew }) => {
    const personActing = normalizeActing(acting);
    const personInCrew = normalizePersonInCrew(crew);

    return (
        <>
            {personActing?.length > 0 && (
                <>
                    <Title>Acting</Title>
                    <CreditsList>
                        <CreditsItem credits={personActing} />
                    </CreditsList>
                </>
            )}
            {personInCrew?.length > 0 && (
                <>
                    <Title>Crew</Title>
                    {personInCrew?.map((el, i) => (
                        <CreditsList key={i}>
                            <li>
                                <Title>{Object.keys(el)[0]}</Title>
                                <ul>
                                    <CreditsItem
                                        credits={el[Object.keys(el)]}
                                    />
                                </ul>
                            </li>
                        </CreditsList>
                    ))}
                </>
            )}
        </>
    );
};
