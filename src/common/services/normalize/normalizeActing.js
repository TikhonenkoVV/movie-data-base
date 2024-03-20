export const normalizeActing = data => {
    const nA = 'N/a';
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
                poster_path,
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
