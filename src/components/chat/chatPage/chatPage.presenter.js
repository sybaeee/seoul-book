import { ChatDateTime, ChatHeader, ChatHeaderTitle, ChatHostMsg, ChatListWrap, ChatMsgWrap, ChatTextInput, ChatUserMsg, ChatWrap } from "@/styles/chat/chat.styles";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';


const ChatPageUI = ({
    inputText,
    userMsg,
    chatEnterDown
}) => {
    return(
        <ChatWrap>
            <ChatListWrap>
                <ChatHeader>
                    <ArrowBackOutlinedIcon fontSize="medium" />
                    <ChatHeaderTitle>Aaron Yang</ChatHeaderTitle>
                    <CloseOutlinedIcon fontSize="medium" />
                </ChatHeader>
                <ChatMsgWrap>
                    <ChatHostMsg>호스트 채팅 영역 입니다. test test test test test test test test test test test test test test test test 
                    test test test test test test test test test test test test test test test test
                    test test test test test test test test test test test test test test test test
                    </ChatHostMsg>
                    
                    <p></p>
                    <ChatUserMsg>게스트 채팅 영역 입니다. test test test test test test test test test test test test test test test test </ChatUserMsg>
                    <p></p>
                    {userMsg}

                </ChatMsgWrap>
            </ChatListWrap>       
            <ChatTextInput ref={inputText} onKeyDown={(e)=>chatEnterDown(e)}></ChatTextInput>
        </ChatWrap>
    );
}

export default ChatPageUI;