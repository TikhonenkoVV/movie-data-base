import {
    Aside,
    AsideTitle,
    Description,
    InfoWrapper,
    MinorTitle,
    PersonPhoto,
    PersonTitle,
    PersonWrapper,
    PersonalInfoItem,
    PersonalInfoList,
    ProfileWrapper,
} from './PersonInfo.styled';
import noPoster from '../../../assets/images/no-poster.jpg';
import { PROFILE_H632 } from 'common/constants';
import { Credits } from './Credits/Credits';
import { useTranslate } from 'hooks/useTranslate';
import { useSelector } from 'react-redux';
import { selectLang } from 'common/store/selector';
import { numberForm } from 'common/services/dateOperations';

export const PersonInfo = ({ person, acting, crew, total }) => {
    const {
        biography,
        known_for_department,
        name,
        gender,
        birthday,
        deathday,
        age,
        place_of_birth,
        profile_path,
    } = person;

    const { t } = useTranslate();
    const language = useSelector(selectLang);

    return (
        <PersonWrapper>
            <Aside>
                <PersonPhoto
                    src={profile_path ? PROFILE_H632 + profile_path : noPoster}
                    alt={name}
                    width={300}
                    height={450}
                />
                <div>
                    <AsideTitle>{t('personalInfo')}</AsideTitle>
                    <PersonalInfoList>
                        <PersonalInfoItem>
                            <MinorTitle>{t('department')}</MinorTitle>
                            <Description>
                                {t(known_for_department?.toLowerCase())}
                            </Description>
                        </PersonalInfoItem>
                        <PersonalInfoItem>
                            <MinorTitle>{t('knownCredits')}</MinorTitle>
                            <p>{total}</p>
                        </PersonalInfoItem>
                        {gender !== 0 && (
                            <PersonalInfoItem>
                                <MinorTitle>{t('gender')}</MinorTitle>
                                <Description>
                                    {gender === 2 ? t('male') : t('female')}
                                </Description>
                            </PersonalInfoItem>
                        )}
                        {birthday && (
                            <PersonalInfoItem>
                                <MinorTitle>{t('birthday')}</MinorTitle>
                                {language === 'en-US' && (
                                    <p>
                                        {birthday}{' '}
                                        {!deathday &&
                                            `(${age} ${t('yearsOld')})`}
                                    </p>
                                )}
                                {language === 'uk-UA' && (
                                    <p>
                                        {birthday}{' '}
                                        {!deathday &&
                                            `(${age} ${numberForm(age)})`}
                                    </p>
                                )}
                            </PersonalInfoItem>
                        )}
                        {deathday && (
                            <PersonalInfoItem>
                                <MinorTitle>{t('dayOfDeath')}</MinorTitle>
                                {language === 'en-US' && (
                                    <p>
                                        {deathday} {`(${age} ${t('yearsOld')})`}
                                    </p>
                                )}
                                {language === 'uk-UA' && (
                                    <p>
                                        {deathday}{' '}
                                        {`(${age} ${numberForm(age)})`}
                                    </p>
                                )}
                            </PersonalInfoItem>
                        )}
                        {place_of_birth && (
                            <PersonalInfoItem>
                                <MinorTitle>{t('placeOfBirth')}</MinorTitle>
                                <p>{place_of_birth}</p>
                            </PersonalInfoItem>
                        )}
                    </PersonalInfoList>
                </div>
            </Aside>
            <InfoWrapper>
                <ProfileWrapper>
                    <PersonTitle>{name}</PersonTitle>
                    <MinorTitle>{t('biography')}</MinorTitle>
                    {biography?.map((el, i) => (
                        <p key={i} style={{ marginBottom: '12px' }}>
                            {el}
                        </p>
                    ))}
                    {biography?.length === 0 && (
                        <p>{t('noBiography', [name, 'test'])}</p>
                    )}
                </ProfileWrapper>
                <Credits acting={acting} crew={crew} />
            </InfoWrapper>
        </PersonWrapper>
    );
};
