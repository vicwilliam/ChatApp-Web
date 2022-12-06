import {StyledRoom, StyledListItem} from "./styles";
import {useClickable} from "@chakra-ui/clickable";
import React, {useEffect, useState} from "react";
import {createRoom, getRooms} from "../../Service/room";
import room from "../../Pages/Room";
import {useSignalREffect} from "../../index";
import {send, sendCommand} from "../../Service/messages";

export const Clickable = (props) => {
    const {name} = props;
    const clickable = useClickable(props);
    return <StyledListItem {...clickable}>
        {name}
    </StyledListItem>
}
export default function Index({rooms, onRoomClick}) {
    const [listRooms, setListRooms] = useState([])
    const [inputRoomName, setInputRoomName] = useState("");
    const getData = async () => {
        const rooms = await getRooms();
        setListRooms(rooms);
    };

    useSignalREffect("newRoom", async (params) => {
        await getData();
    });

    async function handleKeyDown(e) {
        if (e.key === "Enter" && inputRoomName) {
            await createRoom(inputRoomName);
            setInputRoomName("");
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return <StyledRoom>
        <>
            <b>Rooms</b>
            {listRooms?.map((room) => {
                return <Clickable
                    onClick={() => onRoomClick(room)}
                    name={room.name}
                    key={room.id}
                />
            }) ?? <></>}
            <input style={{margin: "8px"}}
                   placeholder={"New room name"}
                   value={inputRoomName}
                   onChange={e => setInputRoomName(e.target.value)}
                   onKeyDown={handleKeyDown}/>
        </>
    </StyledRoom>;
}