import { CreditsList, Title } from './Credits.styled';
import { normalizeActing } from 'common/services/normalize/normalizeActing';
import { normalizePersonInCrew } from 'common/services/normalize/normalizePersonInCrew';
import { CreditsItem } from './CreditsItem/CreditsItem';

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
