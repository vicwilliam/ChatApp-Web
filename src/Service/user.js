import api, {errorsToString} from "../Util/api";


export const register = async (userName, password) => {
    try {
        const result = await api.post('user/register', {userName, password});
        return result.data
    } catch (e) {
        throw errorsToString(e.response.data);
    }
}

export const authenticate = async (username, password) => {
    try {
        const result = await api.post('user/authenticate', {username, password});
        return result.data;
    } catch (e) {
        console.log(e);
    }
}