import { ChatContent, ChatContentHostName, ChatContentPrImg, ChatContentTextWrap, ChatContentWrap, ChatHeader, ChatHeaderLogo, ChatHeaderTitle, ChatLastMessage, ChatListWrap } from "@/styles/chat/chat.styles";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';


const ChatListUI = () =>{
    return(
        <ChatListWrap>
            <ChatHeader>
                <ChatHeaderTitle>Chat List</ChatHeaderTitle>
                <CloseOutlinedIcon fontSize="large" />
            </ChatHeader>
            <ChatContentWrap>
                <ChatContent>
                    <ChatContentPrImg />
                    <ChatContentTextWrap>
                        <ChatContentHostName>Aaron Yang</ChatContentHostName>
                        <ChatLastMessage>채팅 마지막 메세지 입니다.</ChatLastMessage>
                    </ChatContentTextWrap>
                    <DeleteForeverOutlinedIcon fontSize="large" />
                </ChatContent>
                <ChatContent>
                    <ChatContentPrImg />
                    <ChatContentTextWrap>
                        <ChatContentHostName>Alex Park</ChatContentHostName>
                        <ChatLastMessage>채팅 마지막 메세지 입니다.</ChatLastMessage>
                    </ChatContentTextWrap>
                    <DeleteForeverOutlinedIcon fontSize="large" />
                </ChatContent>
            </ChatContentWrap>

        </ChatListWrap>
    );


}

export default ChatListUI;