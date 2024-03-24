export const normalizePopularPersons = data => {
    const res = data.map(
        ({
            id,
            known_for_department,
            name,
            original_name,
            profile_path,
            known_for,
        }) => {
            let knownFor = [];
            known_for.map(
                ({
                    name,
                    title,
                    original_title,
                    original_name,
                    first_air_date,
                    release_date,
                }) => {
                    const originalTitle = name
                        ? name
                        : original_name
                        ? original_name
                        : title
                        ? title
                        : original_title
                        ? original_title
                        : 'N/a';
                    const release = release_date || first_air_date || 'N/a';
                    const year = release.split('-')[0];
                    return knownFor.push(`"${originalTitle}" (${year})`);
                }
            );
            return {
                id,
                name: name || original_name || 'N/a',
                known_for_department,
                known_for: knownFor,
                profile_path,
            };
        }
    );
    return res;
};
