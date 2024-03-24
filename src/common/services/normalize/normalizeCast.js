export const normalizeCast = data => {
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
