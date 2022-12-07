export const getAuthData = () => getData('access_data');

export const saveAuthData = (data) => saveData('access_data', data);
export const saveData = (key: string, value: string): void => {
    var json = JSON.stringify(value)
    window.localStorage.setItem(key, json);
};


export const hasStorage = (): boolean => {
    let supportsStorage = false;
    if (typeof window.Storage !== 'undefined') {
        try {
            window.localStorage.setItem('localstorage', '1');
            window.localStorage.removeItem('localstorage');
            window.sessionStorage.setItem('sessionstorage', '1');
            window.sessionStorage.removeItem('sessionstorage');
            supportsStorage = true;
        } catch (error) {
            supportsStorage = false;
        }
    }
    return supportsStorage;
};
export const getData = (key) => {
    let data;
    if (window.localStorage) {
        try {
            const lData = window.localStorage.getItem(key) ?? '';
            data = JSON.parse(lData);
            return data;
        } catch (e) {
            /* Ignore */
        }
    }
    return null;

}