import { ChatMain, ChatWrap } from "@/styles/chat/chat.styles";
import ChatList from "../../components/chat/chatList/chatList.container"
import ChatHeaderPage from "@/components/chat/chatHeader/chatHeader.container";
import ChatPage from "@/components/chat/chatPage/chatPage.container";

const ChatListPage = () => {
    return(
        <ChatMain>
            <ChatHeaderPage />
            <ChatWrap>
                <ChatList />
                <ChatPage />
            </ChatWrap>
        </ChatMain>
    );
}

export default ChatListPage;