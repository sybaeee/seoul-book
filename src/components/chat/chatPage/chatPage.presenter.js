import { ChatHostMsg, ChatMsgList, ChatMsgWrap, ChatTextInput, ChatUserMsg, ChatViewWrap } from "@/styles/chat/chat.styles";
import { useEffect, useRef } from "react";


const ChatPageUI = ({
    inputText,
    chatEnterDown,
    msgList
}) => {
    const chatScroll = useRef();

    useEffect(()=>{
        const scrollDiv = chatScroll.current;
        scrollDiv.scrollTop = scrollDiv.scrollHeight;
    }, [msgList]);

    return (
        <ChatViewWrap>
            <ChatMsgWrap>
                <ChatMsgList ref={chatScroll}>
                    <ChatHostMsg>
                        호스트 채팅 영역입니다.
                    </ChatHostMsg>
                    <p></p>
                    <ChatUserMsg>
                        게스트 채팅 영역입니다.
                    </ChatUserMsg>
                    <p></p>
                    {msgList.map((msg, idx) => (
                        <ChatUserMsg key={idx}>{msg}</ChatUserMsg>
                    ))}
                </ChatMsgList>
            </ChatMsgWrap>       
            <ChatTextInput ref={inputText} onKeyDown={chatEnterDown}></ChatTextInput>
        </ChatViewWrap>
    );
}

export default ChatPageUI;
