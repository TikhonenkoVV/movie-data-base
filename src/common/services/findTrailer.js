export const findTrailer = data => {
    const YOUTUBE_PATH = 'https://www.youtube.com/embed/';
    let res;
    let isTrailer = false;
    data.map(trailer => {
        if (!isTrailer) res = YOUTUBE_PATH + trailer.key;
        if (trailer.type === 'Trailer' && !isTrailer) {
            res = YOUTUBE_PATH + trailer.key;
            isTrailer = true;
        }
        return res;
    });
    return res;
};
