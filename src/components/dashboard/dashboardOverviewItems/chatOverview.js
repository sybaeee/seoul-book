import styled from "@emotion/styled";
import { Divider, Stack } from "@mui/material";
import KakaoChatPreviewCard from "./chatCard";




const ChatOverview = ()=>{

  return(
    <Wrap>
      <Stack direction={'column'}>
        <Title>Recent Chats</Title>
        <Divider/>
        <KakaoChatPreviewCard name={'hoofo'} time={'10:00'} message={'dfwwfeweffwefweweffwewgwgewfgwgwgewfscdgerwwfdgvbgtrdfwefwefew'}/>
        <KakaoChatPreviewCard name={'hoofo'} time={'10:00'} message={'dfwwfeweffwefweweffwewgwgewfgwgwgewfscdgerwwfdgvbgtrdfwefwefew'}/>
        <KakaoChatPreviewCard name={'hoofo'} time={'10:00'} message={'dfwwfeweffwefweweffwewgwgewfgwgwgewfscdgerwwfdgvbgtrdfwefwefew'}/>
        <KakaoChatPreviewCard name={'hoofo'} time={'10:00'} message={'dfwwfeweffwefweweffwewgwgewfgwgwgewfscdgerwwfdgvbgtrdfwefwefew'}/>
        <KakaoChatPreviewCard name={'hoofo'} time={'10:00'} message={'dfwwfeweffwefweweffwewgwgewfgwgwgewfscdgerwwfdgvbgtrdfwefwefew'}/>
      </Stack>
      <ViewMore>View More</ViewMore>
    </Wrap>
  );
}

export default ChatOverview;

const Wrap = styled.div`
  border-radius:20px; 
  overflow:hidden;
  padding: 24px;
  background-color: white;
`;

const Title = styled.h4`
  font-size: 15px;
  margin-bottom: 20px;
`;

const ViewMore= styled.p`
  margin-top: 10px;
  text-align: center;
  font-size: 12px;
`;