export const normalizePersonInCrew = crew => {
    const nA = 'N/a';
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
