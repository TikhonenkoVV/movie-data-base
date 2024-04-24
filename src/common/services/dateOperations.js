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

export const numberForm = n => {
    const titles = ['рік', 'роки', 'років'];
    return titles[
        n % 10 === 1 && n % 100 !== 11
            ? 0
            : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)
            ? 1
            : 2
    ];
};
