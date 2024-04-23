import { genres } from 'data/genres';

export const getGenresDescription = (iDs, language) => {
    let res = [];
    iDs.map(el => {
        return res.push(genres[`id_${el}`][language]);
    });
    return res;
};
