export const getBackgrounds = (data, mediaTypes) => {
    const array = {};
    const res = data.map(({ backdrop_path }, i) => {
        return (array[i] = backdrop_path);
    });
    return res;
};
