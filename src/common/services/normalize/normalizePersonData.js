import { calcAge, formatDate, numberForm } from '../dateOperations';

export const normalizePersonData = (data, language) => {
    const {
        id,
        biography,
        known_for_department,
        name,
        gender,
        birthday,
        deathday,
        place_of_birth,
        profile_path,
    } = data;
    let biographyArr = [];
    if (biography && biography !== '') {
        biographyArr = biography.split('\n\n');
    }

    let calculateAge;
    if (birthday && !deathday) {
        calculateAge = calcAge(birthday, new Date());
    }
    if (deathday) {
        calculateAge = calcAge(birthday, deathday);
    }

    let isBirthDay;
    let isDeathDay;

    if (birthday) {
        if (!deathday) {
            if (language === 'en-US') {
                isBirthDay = `${formatDate(
                    birthday,
                    language
                )} (${calculateAge} years old)`;
            }
            if (language === 'uk-UA') {
                isBirthDay = `${formatDate(
                    birthday,
                    language
                )} (${calculateAge} ${numberForm(calculateAge)})`;
            }
        } else isBirthDay = formatDate(birthday, language);
    } else isBirthDay = null;

    if (deathday) {
        if (language === 'en-US') {
            isDeathDay = `${formatDate(
                deathday,
                language
            )} (${calculateAge} years old)`;
        } else if (language === 'uk-UA') {
            isDeathDay = `${formatDate(
                deathday,
                language
            )} (${calculateAge} ${numberForm(calculateAge)})`;
        }
    } else isDeathDay = null;

    return {
        id,
        biography: biographyArr,
        known_for_department,
        name,
        gender,
        birthday: isBirthDay,
        deathday: isDeathDay,
        place_of_birth,
        profile_path,
    };
};
