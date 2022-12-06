import RoomList from "../../Components/RoomList";
import React, {useCallback, useEffect, useState} from "react";
import ChatRoom from "../../Components/ChatRoom";

const RoomPage = () => {
    const [room,setRoom] = useState();
    const roomClick = useCallback((room) => {
        setRoom(room.id)
    }, [room]);

    useEffect(() => {
        console.log(room)
    }, [room]);

    return <div style={{
        display: 'flex', flexDirection: "row", alignItems: "stretch", minHeight: "100vh"
    }}>
        <RoomList
            rooms={[{roomId: 'asdf', name: 'asdf'}, {roomId: 'asdf', name: 'asdfs'}]}
            onRoomClick={roomClick}/>
        <ChatRoom roomId={room}/>
    </div>;
};
export default RoomPage