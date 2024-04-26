import { calcAge, formatDate } from '../dateOperations';
import { setNumberForm } from '../setNumberForm';

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
            isBirthDay = `${formatDate(
                birthday,
                language
            )} (${calculateAge} ${setNumberForm(calculateAge, language)})`;
        } else isBirthDay = formatDate(birthday, language);
    } else isBirthDay = null;

    if (deathday) {
        isDeathDay = `${formatDate(
            deathday,
            language
        )} (${calculateAge} ${setNumberForm(calculateAge, language)})`;
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
