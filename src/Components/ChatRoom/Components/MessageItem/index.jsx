import {Container} from "./styles";

const MessageItem = ({message}) => {
    return <Container>
        <b>{message.content}</b>
        <sub>
            {message.authorUserName}
        </sub>
    </Container>
}
export default MessageItem;