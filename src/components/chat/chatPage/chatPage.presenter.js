import { ChatDateTime, ChatHeader, ChatHeaderTitle, ChatHostMsg, ChatListWrap, ChatMsgWrap, ChatTextInput, ChatUserMsg } from "@/styles/chat/chat.styles";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';


const ChatPageUI = () => {
    return(
        <ChatListWrap>
            <ChatHeader>
                <ArrowBackOutlinedIcon fontSize="large" />
                <ChatHeaderTitle>Aaron Yang</ChatHeaderTitle>
                <CloseOutlinedIcon fontSize="large" />
            </ChatHeader>
            <ChatMsgWrap>
                <ChatHostMsg>test test test test test test test test test test test test test test test test 
                test test test test test test test test test test test test test test test test
                test test test test test test test test test test test test test test test test
                </ChatHostMsg>
                
                <p></p>
                <ChatUserMsg>test test test test test test test test test test test test test test test test </ChatUserMsg>
                <p></p>

                <ChatTextInput></ChatTextInput>


            </ChatMsgWrap>
        


        </ChatListWrap>
    );
}

export default ChatPageUI;