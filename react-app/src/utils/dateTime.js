export const convertFromAPIStringToDate = (str) => {
    return new Date(str.substring(0, str.length - 1));
};

export const shortDateOptions = {
    weekday: "short",
    month: "short",
    day: "numeric",
};

export const convertAPIDateToString = (str) => {
    const dateTime = convertFromAPIStringToDate(str);
    return `${dateTime.toLocaleDateString(
        "en-gb",
        shortDateOptions
    )} ${dateTime.toLocaleTimeString("en-gb", {
        hour: "2-digit",
        minute: "2-digit",
    })}`;
};
