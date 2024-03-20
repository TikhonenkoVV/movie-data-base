import { formatDate } from '../dateOperations';

export const normalizeMovieData = (data, mediaTypes) => {
    const {
        id,
        belongs_to_collection,
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
    const creators = [];
    created_by?.map(el =>
        creators.push({ credit_id: el.credit_id, name: el.name })
    );
    return {
        id,
        belongs_to_collection: belongs_to_collection
            ? belongs_to_collection.id
            : null,
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
        poster_path,
        backdrop_path,
        created_by: creators.length > 0 ? creators : null,
    };
};
