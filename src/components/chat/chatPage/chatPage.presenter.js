import { useState } from "react";
import { ChatDateTime, ChatHeader, ChatHeaderTitle, ChatHostMsg, ChatListWrap, ChatMsgWrap, ChatTextInput, ChatUserMsg, ChatWrap } from "@/styles/chat/chat.styles";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';


const ChatPageUI = ({
    inputText
}) => {
    const [msgList, setMsgList] = useState([]);

    const handleUserMsg = (e) => {
        if (e.key === "Enter" && e.target.value) {
            setMsgList([...msgList, e.target.value]);
            e.target.value = "";
        }
    };

    return (
        <ChatWrap>
            <ChatListWrap>
                <ChatHeader>
                    <ArrowBackOutlinedIcon fontSize="medium" />
                    <ChatHeaderTitle>Aaron Yang</ChatHeaderTitle>
                    <CloseOutlinedIcon fontSize="medium" />
                </ChatHeader>
                <ChatMsgWrap>
                    <ChatHostMsg>
                        호스트 채팅 영역입니다. test test test test test test test test test test test test test test test test 
                        test test test test test test test test test test test test test test test test
                        test test test test test test test test test test test test test test test test
                    </ChatHostMsg>
                    <p></p>
                    <ChatUserMsg>
                        게스트 채팅 영역입니다. test test test test test test test test test test test test test test test test 
                    </ChatUserMsg>
                    <p></p>
                    {msgList.map((msg, idx) => (
                        <ChatUserMsg key={idx}>{msg}</ChatUserMsg>
                    ))}
                </ChatMsgWrap>
            </ChatListWrap>       
            <ChatTextInput ref={inputText} onKeyDown={handleUserMsg}></ChatTextInput>
        </ChatWrap>
    );
}

export default ChatPageUI;
