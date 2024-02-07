import noPoster from '../images/no-poster.jpg';
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
        }) => {
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
                vote_average:
                    vote_average > 0 ? Math.round(vote_average * 10) : 'NR',
            };
        }
    );
};

export const normalizeMovieData = (data, mediaTypes) => {
    const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w300/';
    let newReleaseDate;
    let newAirDate;
    if (data.release_date) {
        newReleaseDate = formatDate(data.release_date);
    } else newReleaseDate = false;
    if (data.first_air_date) {
        newAirDate = formatDate(data.first_air_date);
    } else newAirDate = false;
    return {
        id: data.id,
        vote_average:
            data.vote_average > 0 ? Math.round(data.vote_average * 10) : 'NR',
        name:
            data.name ??
            data.original_name ??
            data.title ??
            data.original_title,
        release: {
            release_date: newReleaseDate,
            title: 'Release date: ',
        },
        first_air: {
            first_air_date: newAirDate,
            title: 'First air date: ',
        },
        overview:
            data.overview !== ''
                ? data.overview
                : 'Sorry, but there is no overview for this movie.',
        genres:
            data.genres.length > 0
                ? data.genres
                : [{ id: '', name: 'No information available' }],
        poster_path: data.poster_path
            ? IMAGES_BASE_URL + data.poster_path
            : noPoster,
        backdrop_path: data.backdrop_path
            ? IMAGES_BASE_URL + data.backdrop_path
            : noPoster,
        media_type: data.media_type ?? mediaTypes,
    };
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

    // console.log(calculateAge());
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
            };
        }
    );
    const result = res.sort((a, b) => b.sortDate - a.sortDate);

    return result;
};

export const normalizeCrew = crew => {
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
