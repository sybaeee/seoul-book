import { useRef, useState } from "react";
import ChatPageUI from "./chatPage.presenter";
import { ChatUserMsg } from "@/styles/chat/chat.styles";

const ChatPage = () => {
    const [userMsg, setUserMsg] = useState([]);
    let inputText = useRef(null);

    const chatEnterDown = (e) => {
        console.log(e.key);
        if(e.key === 'Enter'){
            console.log(inputText);
            let tmp = JSON.parse(JSON.stringify(userMsg));
            tmp.map(()=>{
                <ChatUserMsg>{inputText.current.value}</ChatUserMsg>
            });
            console.log(tmp);
            inputText.current.value = '';
        }
    }
    return (
        <ChatPageUI
            inputText={inputText}
            userMsg={userMsg}
            chatEnterDown={chatEnterDown}            
         />
    );

}

export default ChatPage;