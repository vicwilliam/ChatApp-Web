import React, {useEffect, useState} from "react";
import MessageList from "./Components/MessageList";
import {getMessages} from "../../Service/messages";

const ChatRoom = ({roomId}) => {
    const [message, setMessage] = useState("");

    const readMessages = async (roomId) => {
        const result = await getMessages(roomId);
        setMessage(result);
    };

    function handleKeyDown(e) {
        if (e.key === "Enter")
            console.log(message);
    }

    useEffect(() => {
        if (roomId) readMessages(roomId);
    }, [roomId])

    return <>
        <div style={{
            flexGrow: 10,
            flexFlow: "column-reverse",
            display: "flex",
            margin: "10px",
            borderWidth: "10px",
            border: "solid",
        }}>
            <input style={{margin: "8px"}}
                   onChange={e => setMessage(e.target.value)}
                   onKeyDown={handleKeyDown}/>
            <MessageList messageList={message}/>
        </div>
    </>
}

export default ChatRoom;