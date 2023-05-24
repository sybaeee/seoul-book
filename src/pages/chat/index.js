import { ChatMain, ChatWrap } from "@/styles/chat/chat.styles";
import ChatList from "../../components/chat/chatList/chatList.container"
import ChatHeaderPage from "@/components/chat/chatHeader/chatHeader.container";
import ChatPage from "@/components/chat/chatPage/chatPage.container";
import { useState } from "react";
import Modal from "@/components/chat/modal";

const ChatListPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const onClickButton = () => {
        setIsOpen(true);
    }

    return(
        <>        
            <button onClick={onClickButton}>채팅창 오픈</button>
            {isOpen && (<Modal
                open={isOpen}
                onClose={()=>{
                    setIsOpen(false);
                }}
            />)}
        </>
    );
}

export default ChatListPage;