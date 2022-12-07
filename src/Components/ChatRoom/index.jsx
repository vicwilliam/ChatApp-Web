import React, {useEffect, useState} from "react";
import MessageList from "./Components/MessageList";
import {getMessages, send, sendCommand} from "../../Service/messages";
import {useSignalREffect} from "../../index";

const ChatRoom = ({roomId}) => {

    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState("");

    const readMessages = async (roomId) => {
        const result = await getMessages(roomId);
        setMessages(result);
    };
    useSignalREffect("newMessage", (params) => {
        if (roomId === params.roomId)
            readMessages(roomId);
    })

    async function handleKeyDown(e) {
        if (e.key === "Enter" && roomId) {
            if (inputMessage.includes("/"))
                await sendCommand({command: inputMessage, roomId: roomId});
            else await send({content: inputMessage, roomId: roomId})
            setInputMessage("");
        }
    }

    useEffect(() => {
        if (roomId) readMessages(roomId);
    }, [roomId])

    return roomId && <>
        <div style={{
            flexGrow: 10,
            flexFlow: "column",
            display: "flex",
            margin: "10px",
            height: "100vh",
        }}>
            <MessageList messageList={messages}/>
            <input style={{margin: "8px"}}
                   placeholder={"New message"}
                   value={inputMessage}
                   onChange={e => setInputMessage(e.target.value)}
                   onKeyDown={handleKeyDown}/>
        </div>
    </>
}

export default ChatRoom;