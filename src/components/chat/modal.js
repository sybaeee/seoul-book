import { ChatMain, ChatWrap, OverLay } from "@/styles/chat/chat.styles";
import ChatHeaderPage from "./chatHeader/chatHeader.container";
import ChatList from "./chatList/chatList.container";
import ChatPage from "./chatPage/chatPage.container";

const Modal = ({onClose}) => {
    const handleClose = () => {
        onClose?.();
    }

    return(
        <OverLay>
            <ChatMain>
                <ChatHeaderPage handleClose={handleClose} />
                <ChatWrap>
                    <ChatList />
                    <ChatPage />
                </ChatWrap>
            </ChatMain>
        </OverLay>
    );

}

export default Modal;