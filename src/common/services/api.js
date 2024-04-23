import axios from 'axios';

const API_KEY = '49f12b338a85dcd14c7e661f8eadc77e';
// const lang = '&language=uk-UA';
// const lang = '&language=en-US';
// const lang = '&language=ru-RU';

export const getMovies = async (mediaType, trands, language) => {
    const { data } = await axios.get(
        `trending/${mediaType}/${trands}?api_key=${API_KEY}&language=${language}`
    );
    return data;
};

export const getMediaOnRequest = async (mediaTypes, q, page, language) => {
    const isPage = page ? `&page=${page}` : '';
    const { data } = await axios.get(
        `search/${mediaTypes}?api_key=${API_KEY}&language=${language}${isPage}&query=${q}`
    );
    return data;
};

export const getDetails = async (mediaType, id, language, details) => {
    const lang = language ? `&language=${language}` : '';
    const { data } = await axios.get(
        `${mediaType}/${id}${details}?api_key=${API_KEY}${lang}`
    );
    return data;
};

export const getTrailer = async (mediaType, movieId, language) => {
    const { data } = await axios.get(
        `${mediaType}/${movieId}/videos?api_key=${API_KEY}&language=${language}`
    );
    return data;
};

export const getPersonsByName = async (q, page, language) => {
    const { data } = await axios.get(
        `search/person?include_adult=false&api_key=${API_KEY}&language=${language}&page=${page}&query=${q}`
    );
    return data;
};

export const getPersonById = async (personId, language) => {
    const { data } = await axios.get(
        `person/${personId}?api_key=${API_KEY}&language=${language}`
    );
    return data;
};

export const getPopular = async (mediaType, language, page) => {
    const { data } = await axios.get(
        `${mediaType}/popular?api_key=${API_KEY}&language=${language}&page=${page}`
    );
    return data;
};
