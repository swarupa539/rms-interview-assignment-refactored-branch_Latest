export const setLocalStorage = (key: string, value: any) => localStorage.setItem(key, value);
export const getLocalStorage = (key: string) : any => localStorage.getItem(key);
export const getLocalStorageLength = () => localStorage.length;