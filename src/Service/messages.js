import api from "../Util/api";


export const send = async (messageDto) => {
    const result = await api.post('Messages/send', messageDto);
    return result.status === 201;
}

export const sendCommand = async (commandDto) => {
    let command = commandDto.command.replace("/", "");
    command = command.split("=");
    commandDto.command = command[0];
    commandDto.parameter = command[1];
    const result = await api.post('Messages/sendCommand', commandDto);
    return result.status === 200;
}

export const getMessages = async (roomId) => {
    const result = await api.get(`messages/last50?roomId=${roomId}`);
    return result.status === 200 ? result.data : [];
}