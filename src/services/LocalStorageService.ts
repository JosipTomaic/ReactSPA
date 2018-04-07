export const saveToLocalStorage = (key: string, data: string) => {
    localStorage.setItem(key, data);
}

export const getFromLocalStorage = (key: string) => {
    return localStorage.getItem(key);
}