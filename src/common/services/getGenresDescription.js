import { genres } from 'data/genres';

export const getGenresDescription = iDs => {
    let res = [];
    iDs.map(el => {
        return res.push(genres[`id_${el}`]['en-US']);
    });
    return res;
};
