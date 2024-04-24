import { formatDate } from '../dateOperations';

export const normalizeMoviesData = (data, language, mediaTypes) => {
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
                release = formatDate(release_date, language);
            } else if (first_air_date) {
                release = formatDate(first_air_date, language);
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

                release: mediaTypes !== 'collections' ? release : null,
                vote_average:
                    vote_average > 0
                        ? Math.round(vote_average * 10)
                        : mediaTypes === 'collections'
                        ? null
                        : 'NR',
                poster_path,
            };
        }
    );
};
