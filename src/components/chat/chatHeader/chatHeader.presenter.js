import { ChatHeader, ChatHeaderTitle } from "@/styles/chat/chat.styles";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';


const ChatHeaderUI = ({handleClose}) => {
    return (
        <ChatHeader>
            <ArrowBackOutlinedIcon fontSize="medium" />
            <ChatHeaderTitle>Chat List</ChatHeaderTitle>
            <CloseOutlinedIcon 
            fontSize="medium" 
            onClick={handleClose}
            style={{ cursor:'pointer'}}
            />
        </ChatHeader>
    );
}

export default ChatHeaderUI;