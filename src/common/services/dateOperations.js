export const formatDate = date => {
    const options = {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
    };
    const newDate = new Date(date);
    return newDate.toLocaleDateString('en-US', options);
};

export const calcAge = (startDate, endDate) => {
    return Math.trunc(
        Math.abs(Date.parse(endDate) - Date.parse(startDate)) /
            (24 * 3600 * 365.25 * 1000)
    );
};
