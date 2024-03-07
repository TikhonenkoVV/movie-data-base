import { calcAge } from 'services/dateOperations';

export const normalizePersonData = data => {
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

    return {
        id,
        biography: biographyArr,
        known_for_department,
        name,
        gender,
        birthday,
        deathday,
        age: calculateAge,
        place_of_birth,
        profile_path,
    };
};
