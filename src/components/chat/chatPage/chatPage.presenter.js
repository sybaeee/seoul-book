import { ChatHeader, ChatHeaderTitle, ChatHostMsg, ChatListWrap, ChatMsgList, ChatMsgWrap, ChatTextInput, ChatUserMsg, ChatViewWrap, ChatWrap } from "@/styles/chat/chat.styles";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';


const ChatPageUI = ({
    inputText,
    chatEnterDown,
    msgList
}) => {

    return (
        <ChatViewWrap>
            <ChatMsgWrap>
                <ChatMsgList>
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
                </ChatMsgList>
            </ChatMsgWrap>       
            <ChatTextInput ref={inputText} onKeyDown={chatEnterDown}></ChatTextInput>
        </ChatViewWrap>
    );
}

export default ChatPageUI;
