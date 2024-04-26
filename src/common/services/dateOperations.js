export const formatDate = (date, language) => {
    const options = {
        year: 'numeric',
        month: language === 'en-US' ? 'short' : 'numeric',
        day: '2-digit',
    };
    const newDate = new Date(date);
    return newDate.toLocaleDateString(language, options);
};

export const calcAge = (startDate, endDate) => {
    return Math.trunc(
        Math.abs(Date.parse(endDate) - Date.parse(startDate)) /
            (24 * 3600 * 365.25 * 1000)
    );
};
