export const setColor = percent => {
    if (percent < 11) return 'red';
    if (percent > 10 && percent < 21) return '#ff3000';
    if (percent > 20 && percent < 31) return '#ff6000';
    if (percent > 30 && percent < 41) return '#ff9000';
    if (percent > 40 && percent < 51) return 'yellow';
    if (percent > 50 && percent < 61) return '#90ff00';
    if (percent > 60 && percent < 71) return '#60ff00';
    if (percent > 70 && percent < 81) return '#30ff00';
    if (percent > 80 && percent < 91) return 'green';
    if (percent > 90) return 'green';
    return 'gray';
};
