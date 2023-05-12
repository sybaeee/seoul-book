import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import ReviewTile from "./reviewCard";

const ReviewOverview = ()=>{
  return(
    <Wrap>
      <Stack direction={'column'}>
        <Title>Recent Reviews</Title>
        <ReviewTile authorName={'john'} rating={3} text={'great trabel guide'} />
        <ReviewTile authorName={'john'} rating={3} text={'great trabel guide'} />
        <ReviewTile authorName={'john'} rating={3} text={'great trabel guide'} />
        <ReviewTile authorName={'john'} rating={3} text={'great trabel guide'} />
        <ReviewTile authorName={'john'} rating={3} text={'great trabel guide'} />
        <ReviewTile authorName={'john'} rating={3} text={'great trabel guide'} />
      </Stack>
        <ViewMore>View More</ViewMore>
    </Wrap>
  );
}
const ViewMore= styled.p`
  margin-top: 10px;
  text-align: center;
  font-size: 12px;
`;

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
export default ReviewOverview;