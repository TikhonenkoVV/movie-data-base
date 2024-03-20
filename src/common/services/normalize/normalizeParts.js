import { formatDate } from '../dateOperations';

export const normalizeParts = parts => {
    const res = parts.map(
        ({
            id,
            title,
            original_title,
            poster_path,
            release_date,
            vote_average,
        }) => {
            const newReleaseDate = formatDate(release_date);
            return {
                id,
                title: title ? title : original_title,
                poster_path,
                release_date: newReleaseDate,
                vote_average: Math.round(vote_average * 10) || 'NR',
            };
        }
    );
    return res;
};
