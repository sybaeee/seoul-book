import styled from "@emotion/styled";
import { Avatar, Divider, Typography } from "@mui/material";

const ChatPreviewCard = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  overflow: hidden;
  
`;

const Name = styled(Typography)`
  font-weight: bold;
`;

const Time = styled(Typography)`
  color: gray;
  font-size: 12px;
  margin-top: 2px;
`;

const Message = styled(Typography)`
  margin-top: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ChatPreviewDivider = styled(Divider)`
  margin: 8px 0;
`;

const KakaoAvatar = styled(Avatar)`
  background-color: #ffe812;
  margin-right: 16px;
`;

const KakaoChatPreviewCard = ({ name, time, message, avatar }) => {
  return (
    <>
      <ChatPreviewCard>
        <KakaoAvatar>{avatar}</KakaoAvatar>
        <Content>
          <Name variant="subtitle1">{name}</Name>
          <Time variant="subtitle2">{time}</Time>
          <Message variant="body2">{message}</Message>
        </Content>
      </ChatPreviewCard>
      <ChatPreviewDivider />
    </>
  );
};

export default KakaoChatPreviewCard;