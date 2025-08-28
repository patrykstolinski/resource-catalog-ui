export const formatDate = (value, 
                           locale = "de-DE", 
                           options = {}
                        ) => {
    if (!value) return "N/A";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "N/A";

    const finalOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
        ...options,
    };
    return date.toLocaleDateString(locale, finalOptions);
};


