import api from "../Util/api";
import {HttpStatusCode} from "axios";


export const getRooms = async () => {
    const result = await api.get('Room/list');
    return result.status == 200 ? result.data : [];
}

export const createRoom = async (roomName) => {
    const result = await api.post('Room/', {name: roomName});
    return result.status == 200;
}