import MessageItem from "../MessageItem";

const MessageList = ({messageList}) => {

    return <div style={{
        flexDirection: "reverse", overflow: "scroll",
    }}>
        {messageList?.length > 0 ? messageList?.map((message) => <MessageItem content={message.content}/>) :
            <b>No messages</b>}
    < /div>
}
export default MessageList;