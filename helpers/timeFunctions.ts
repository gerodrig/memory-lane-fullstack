export const minutesToRead = (words: string): number => {
    const wordsPerMinute = 200;
    const wordsArray = words.split(' ');
    const minutes = wordsArray.length / wordsPerMinute;
    return Math.ceil(minutes);
};

export const dateFormatter = (date: Date): string => {
    const formatter = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

    return formatter.format(date);
};