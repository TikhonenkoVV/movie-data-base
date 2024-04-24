import { calcAge, formatDate } from '../dateOperations';

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

    let calculateAge = calcAge(birthday, new Date());
    if (deathday) {
        calculateAge = calcAge(birthday, deathday);
    }

    let isDeathDay;
    let isBirthDay;
    if (deathday) {
        isDeathDay = formatDate(deathday, language);
    } else isDeathDay = null;

    if (birthday) {
        isBirthDay = formatDate(birthday, language);
    } else isBirthDay = null;

    return {
        id,
        biography: biographyArr,
        known_for_department,
        name,
        gender,
        birthday: isBirthDay,
        deathday: isDeathDay,
        age: calculateAge,
        place_of_birth,
        profile_path,
    };
};
