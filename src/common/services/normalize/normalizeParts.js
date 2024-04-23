import { formatDate } from '../dateOperations';

export const normalizeParts = (parts, language) => {
    const res = parts.map(
        ({
            id,
            title,
            original_title,
            poster_path,
            release_date,
            vote_average,
        }) => {
            let newReleaseDate;
            if (release_date)
                newReleaseDate = formatDate(release_date, language);
            return {
                id,
                title: title ? title : original_title,
                poster_path,
                release_date: newReleaseDate || 'N/a',
                vote_average: Math.round(vote_average * 10) || 'NR',
            };
        }
    );
    return res;
};
