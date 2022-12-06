import api from "../Util/api";
import {HttpStatusCode} from "axios";


export const register = async () => {
    const result = await api.get('user/register');
    return result.status === HttpStatusCode.Created ? result.data : null;
}

export const authenticate = async (roomName) => {
    const result = await api.post('authenticate', {name: roomName});
    return result.status === HttpStatusCode.Ok;
}