import noPoster from '../images/no-poster.jpg';
import noPoster66 from '../images/no-poster_66.jpg';
import { calcAge, formatDate } from './dateOperations';

const nA = 'N/a';

export const normalizeMoviesData = (data, mediaTypes) => {
    const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w300/';
    return data.map(
        ({
            id,
            vote_average,
            name,
            title,
            media_type,
            original_title,
            original_name,
            poster_path,
            release_date,
            first_air_date,
        }) => {
            let release;
            if (release_date) {
                release = formatDate(release_date);
            } else if (first_air_date) {
                release = formatDate(first_air_date);
            } else release = nA;
            const movie_title = name
                ? name
                : title
                ? title
                : original_name
                ? original_name
                : original_title;
            const poster = poster_path
                ? IMAGES_BASE_URL + poster_path
                : noPoster;
            return {
                id,
                movie_title,
                media_type: media_type ? media_type : mediaTypes,
                poster,
                release,
                vote_average:
                    vote_average > 0 ? Math.round(vote_average * 10) : 'NR',
            };
        }
    );
};

export const normalizeMovieData = (data, mediaTypes) => {
    const {
        id,
        media_type,
        name,
        original_name,
        title,
        original_title,
        overview,
        genres,
        release_date,
        first_air_date,
        vote_average,
        created_by,
        poster_path,
        backdrop_path,
    } = data;
    const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w300/';
    let newReleaseDate;
    let newAirDate;
    if (release_date) {
        newReleaseDate = formatDate(release_date);
    } else newReleaseDate = false;
    if (first_air_date) {
        newAirDate = formatDate(first_air_date);
    } else newAirDate = false;
    const rating = vote_average > 0 ? Math.round(vote_average * 10) : 'NR';
    const personName = name
        ? name
        : original_name
        ? original_name
        : title
        ? title
        : original_title;
    const poster = poster_path ? IMAGES_BASE_URL + poster_path : noPoster;
    const backdrop = backdrop_path ? IMAGES_BASE_URL + backdrop_path : noPoster;
    const creators = [];
    created_by?.map(el =>
        creators.push({ credit_id: el.credit_id, name: el.name })
    );
    return {
        id,
        vote_average: rating,
        name: personName,
        release: {
            release_date: newReleaseDate,
            title: 'Release date: ',
        },
        first_air: {
            first_air_date: newAirDate,
            title: 'First air date: ',
        },
        overview:
            overview !== ''
                ? overview
                : 'Sorry, but there is no overview for this movie.',
        genres:
            genres.length > 0
                ? genres
                : [{ id: '', name: 'No information available' }],
        poster_path: poster,
        backdrop_path: backdrop,
        media_type: media_type ? media_type : mediaTypes,
        created_by: creators.length > 0 ? creators : null,
    };
};

export const normalizeCast = data => {
    const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w200/';
    const SMALL_IMAGES_BASE_URL =
        'https://image.tmdb.org/t/p/w66_and_h66_face/';
    const res = data.map(
        ({
            id,
            roles,
            credit_id,
            character,
            name,
            original_name,
            profile_path,
        }) => {
            const castId = credit_id ? credit_id : roles[0]?.credit_id;
            const role = character
                ? `(${character})`
                : character === ''
                ? `(${nA})`
                : `(${roles[0]?.character})`;
            const personName = name ?? original_name;
            const poster = profile_path
                ? IMAGES_BASE_URL + profile_path
                : noPoster;
            const smallPoster = profile_path
                ? SMALL_IMAGES_BASE_URL + profile_path
                : noPoster66;
            return {
                id,
                castId,
                poster,
                smallPoster,
                personName,
                role,
            };
        }
    );
    return res;
};

export const normalizePersonsData = data => {
    const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w300/';
    return data.map(({ id, name, profile_path }) => {
        const poster = profile_path ? IMAGES_BASE_URL + profile_path : noPoster;
        return {
            id,
            person_name: name,
            poster,
        };
    });
};

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
    const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w300/';
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
        personName: name,
        gender,
        birthday,
        deathday,
        age: calculateAge,
        place_of_birth,
        profile_path: profile_path ? IMAGES_BASE_URL + profile_path : noPoster,
    };
};

export const normalizeActing = data => {
    const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w200/';
    let futureDate = new Date();
    futureDate = new Date(futureDate.getTime() + 1000 * 60 * 60 * 24 * 730);
    const res = data.map(
        ({
            id,
            credit_id,
            poster_path,
            title,
            original_title,
            name,
            original_name,
            character,
            release_date,
            vote_average,
            first_air_date,
            media_type,
        }) => {
            const poster = poster_path
                ? IMAGES_BASE_URL + poster_path
                : noPoster;
            const movieTitle = title
                ? title
                : name
                ? name
                : original_title
                ? original_title
                : original_name;
            const personCharacter = character ? character : nA;
            let releaseDate = release_date
                ? release_date
                : first_air_date
                ? first_air_date
                : nA;
            const sortDate = () => {
                if (releaseDate !== nA) {
                    return new Date(releaseDate).getTime();
                } else return new Date(futureDate).getTime();
            };
            if (releaseDate !== nA) {
                releaseDate = new Date(releaseDate).getFullYear();
            } else {
                releaseDate = nA;
            }
            return {
                id,
                credit_id,
                poster,
                movieTitle,
                personCharacter,
                releaseDate,
                sortDate: sortDate(),
                media_type,
                vote_average:
                    vote_average > 0
                        ? `${Math.round(vote_average * 10)}%`
                        : 'NR',
            };
        }
    );
    const result = res.sort((a, b) => b.sortDate - a.sortDate);

    return result;
};

export const normalizePersonInCrew = crew => {
    const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w200/';
    const res = crew?.map(
        ({
            id,
            credit_id,
            title,
            original_title,
            name,
            original_name,
            poster_path,
            job,
            release_date,
            first_air_date,
            vote_average,
            media_type,
        }) => {
            let futureDate = new Date();
            futureDate = new Date(
                futureDate.getTime() + 1000 * 60 * 60 * 24 * 730
            );

            const movieTitle = title
                ? title
                : name
                ? name
                : original_title
                ? original_title
                : original_name;

            const poster = poster_path
                ? IMAGES_BASE_URL + poster_path
                : noPoster;

            let releaseDate = release_date
                ? release_date
                : first_air_date
                ? first_air_date
                : nA;

            const sortDate = () => {
                if (releaseDate !== nA) {
                    return new Date(releaseDate).getTime();
                } else return new Date(futureDate).getTime();
            };
            if (releaseDate !== nA) {
                releaseDate = new Date(releaseDate).getFullYear();
            } else {
                releaseDate = nA;
            }

            return {
                id,
                credit_id,
                poster,
                movieTitle,
                job,
                releaseDate,
                sortDate: sortDate(),
                media_type,
                vote_average:
                    vote_average > 0
                        ? `${Math.round(vote_average * 10)}%`
                        : 'NR',
            };
        }
    );

    const sortedResByDate = res?.sort((a, b) => b.sortDate - a.sortDate);

    const list = [];
    sortedResByDate?.map(el => {
        if (!list.includes(el.job)) {
            return list.push(el.job);
        } else return null;
    });

    const result = list.map(res => {
        let result = [];
        sortedResByDate.map(el => {
            if (el.job === res) {
                return result.push(el);
            } else return null;
        });
        return { [res]: result };
    });

    return result;
};

export const normalizeCrew = crew => {
    const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w66_and_h66_face/';
    const director = [];
    const normalList = crew.map(
        ({
            id,
            credit_id,
            department,
            job,
            jobs,
            name,
            original_name,
            profile_path,
        }) => {
            const personId = credit_id ? credit_id : jobs[0].credit_id;
            const personName = name ? name : original_name;
            const poster = profile_path
                ? IMAGES_BASE_URL + profile_path
                : noPoster66;
            const person_job = job ? job : jobs[0].job;
            if (
                department.toLowerCase() === 'directing' &&
                person_job.toLowerCase() === 'director'
            )
                director.push({
                    id,
                    credit_id: personId,
                    personName,
                    poster,
                    job: person_job,
                });
            return {
                id,
                credit_id: personId,
                department,
                job: person_job,
                personName,
                poster,
            };
        }
    );
    const controlList = [];
    normalList.map(el => {
        if (!controlList.includes(el.department.toLowerCase())) {
            return controlList.push(el.department.toLowerCase());
        } else return null;
    });

    const list = [];
    controlList.map(department => {
        const arr = [];
        normalList.map(el => {
            if (el.department.toLowerCase() === department) {
                const person = arr.find(element => element.id === el.id);
                if (person) {
                    return (person.job = `${person.job}, ${el.job}`);
                } else return arr.push(el);
            } else return null;
        });
        return list.push({ [department]: [...arr] });
    });

    return { crew: list, director: director };
};
