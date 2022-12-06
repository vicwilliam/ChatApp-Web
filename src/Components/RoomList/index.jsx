import {StyledRoom, StyledListItem} from "./styles";
import {useClickable} from "@chakra-ui/clickable";
import React, {useEffect, useState} from "react";
import {getRooms} from "../../Service/room";
import room from "../../Pages/Room";

export const Clickable = (props) => {
    const {name} = props;
    const clickable = useClickable(props);
    return <StyledListItem {...clickable}>
        {name}
    </StyledListItem>
}
export default function Index({rooms, onRoomClick}) {
    const [listRooms, setListRooms] = useState([])
    const getData = async () => {
        const rooms = await getRooms();
        setListRooms(rooms);
    };
    useEffect(() => {
        getData();
    }, []);

    return <StyledRoom>
        {listRooms?.map((room) => {
            return <Clickable
                onClick={() => onRoomClick(room)}
                name={room.name}
                key={room.id}
            />
        }) ?? <></>}

    </StyledRoom>;
}