import { ChatContent, ChatContentHostName, ChatContentPrImg, ChatContentTextWrap, ChatContentWrap, ChatLastMsg, ChatListWrap, ChatWrap } from "@/styles/chat/chat.styles";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';


const ChatListUI = () =>{
    return(
            <ChatListWrap>
                <ChatContentWrap>
                    <ChatContent>
                        <ChatContentPrImg />
                        <ChatContentTextWrap>
                            <ChatContentHostName>Aaron Yang</ChatContentHostName>
                        </ChatContentTextWrap>
                        <DeleteForeverOutlinedIcon fontSize="small" />
                    </ChatContent>
                    <ChatContent>
                        <ChatContentPrImg />
                        <ChatContentTextWrap>
                            <ChatContentHostName>Alex Park</ChatContentHostName>
                        </ChatContentTextWrap>
                        <DeleteForeverOutlinedIcon fontSize="small" />
                    </ChatContent>
                </ChatContentWrap>
            </ChatListWrap>
    );


}

export default ChatListUI;