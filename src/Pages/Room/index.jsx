import RoomList from "../../Components/RoomList";
import React, {useCallback, useEffect, useState} from "react";
import ChatRoom from "../../Components/ChatRoom";
import {useSignalREffect} from "../../index";

const RoomPage = () => {
    const [room, setRoom] = useState(null);
    const roomClick = useCallback((room) => {
        setRoom(room.id)
    }, [room]);

    useEffect(() => {

    }, [room]);

    return <div style={{
        display: 'flex', flexDirection: "row", alignItems: "stretch", minHeight: "100vh"
    }}>
        <RoomList
            rooms={[{roomId: 'asdf', name: 'asdf'}, {roomId: 'asdf', name: 'asdfs'}]}
            onRoomClick={roomClick}/>

        {room ? <ChatRoom roomId={room}/>:<h1>No room selected</h1>}
    </div>;
};
export default RoomPage