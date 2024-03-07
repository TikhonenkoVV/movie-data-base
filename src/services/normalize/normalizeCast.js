export const normalizeCast = data => {
    // const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w200/';
    // const SMALL_IMAGES_BASE_URL =
    //     'https://image.tmdb.org/t/p/w66_and_h66_face/';
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
            const castId = roles ? roles[0].credit_id : credit_id;
            let role;
            if (roles) role = roles[0].character;
            else if (character) role = character;
            if (!role || role === '') role = 'N/a';
            const personName = name ?? original_name;
            return {
                id,
                castId,
                profile_path,
                personName,
                role,
            };
        }
    );
    return res;
};
