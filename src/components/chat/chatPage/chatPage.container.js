import { useRef, useState } from "react";
import ChatPageUI from "./chatPage.presenter";

const ChatPage = () => {
    const [msgList, setMsgList] = useState([]);

    let inputText = useRef(null);

    const chatEnterDown = (e) => {
        console.log(e.key);
        if (e.key === "Enter" && e.target.value) {
            setMsgList([...msgList, e.target.value]);
            e.target.value = "";
        }
    };

    return (
        <ChatPageUI
            inputText={inputText}
            chatEnterDown={chatEnterDown}      
            msgList={msgList}     
         />
    );
}

export default ChatPage;
