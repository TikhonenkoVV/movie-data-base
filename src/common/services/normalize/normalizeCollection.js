import { getGenresDescription } from '../getGenresDescription';

export const normalizeCollection = (collection, language) => {
    let rating = [];
    let genres = [];
    let genre_ids = [];
    collection.parts.map(({ vote_average, genre_ids }) => {
        if (vote_average) rating.push(vote_average);
        genres.push(...genre_ids);
        return '';
    });
    genres.map(el => {
        const isInclude = genre_ids.includes(el);
        if (!isInclude) genre_ids.push(el);
        return '';
    });
    genres = [];
    genre_ids = getGenresDescription(genre_ids, language);
    let ratingValue = 0;
    rating.map(el => {
        return (ratingValue += el);
    });
    const vote_average = Math.round((ratingValue / rating.length) * 10);
    const res = {
        name: collection.name,
        overview: collection.overview,
        poster_path: collection.poster_path,
        backdrop_path: collection.backdrop_path,
        vote_average,
        genre_ids,
    };
    return res;
};
