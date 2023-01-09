

export const emailValidator = (email: string): boolean => {
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return !re.test(String(email).toLowerCase());
};