import { formatDate } from 'services/dateOperations';

export const normalizeMoviesData = (data, mediaTypes) => {
    // const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w300/';
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
            } else release = 'N/a';
            const movie_title = name
                ? name
                : title
                ? title
                : original_name
                ? original_name
                : original_title;
            return {
                id,
                movie_title,
                media_type: media_type ? media_type : mediaTypes,

                release,
                vote_average:
                    vote_average > 0 ? Math.round(vote_average * 10) : 'NR',
                poster_path,
            };
        }
    );
};
