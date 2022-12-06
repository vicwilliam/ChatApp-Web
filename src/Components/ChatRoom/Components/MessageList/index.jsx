import MessageItem from "../MessageItem";

const MessageList = ({messages}) => {

    return <div style={{
        flexDirection: "reverse", alignItems: "stretch"
    }}>
        {messages?.map((message) => <MessageItem content={message.content}/>) ?? <></>}
    < /div>
}
export default MessageList;