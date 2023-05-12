import { useRef, useState } from "react";
import ChatPageUI from "./chatPage.presenter";
import { ChatHostMsg, ChatMsgWrap, ChatUserMsg } from "@/styles/chat/chat.styles";

const ChatPage = () => {
    const [userMsg, setUserMsg] = useState([]);
    let inputText = useRef(null);

    let chatMsgList = userMsg.map((v, i) => {
        return (
            <ChatMsgWrap key={i} value={v}>
                <ChatHostMsg>호스트 채팅 영역 입니다. test test test test test test test test test test test test test test test test 
                test test test test test test test test test test test test test test test test
                test test test test test test test test test test test test test test test test
                </ChatHostMsg><br></br>
                <ChatUserMsg>게스트 채팅 영역 입니다. test test test test test test test test test test test test test test test test 

                </ChatUserMsg><br></br>
            </ChatMsgWrap>
        );
    });

    const chatEnterDown = (e) => {
        console.log(e.key);
        if (e.key === "Enter") {
            const value = inputText.current.value;
            const newMsg = [...userMsg, value];
            setUserMsg(newMsg);
            inputText.current.value = "";
        }
    };

    return (
        <ChatPageUI
            inputText={inputText}
            userMsg={userMsg}
            chatEnterDown={chatEnterDown}      
            chatMsgList={chatMsgList}      
         />
    );
}

export default ChatPage;
