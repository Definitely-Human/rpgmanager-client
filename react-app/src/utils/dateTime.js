export const convertFromAPIStringToDate = (str) => {
    return new Date(str.substring(0, str.length - 1));
};

export const shortDateOptions = {
    weekday: "short",
    month: "short",
    day: "numeric",
};
