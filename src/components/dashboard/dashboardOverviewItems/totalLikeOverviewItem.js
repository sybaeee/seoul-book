import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
const TotalLikeOverviewItem = ()=>{
  return(
    <div style={{height:'100%', position:'relative',borderRadius:'20px' ,overflow:'hidden'}}>

      <Wrap>
        <Stack flexDirection={"column"}>
          <IconBox>
            <FavoriteBorderOutlinedIcon/>
          </IconBox>
          <CardData>19403</CardData>
          <CardTitle>Total Likes</CardTitle>
        </Stack>
      </Wrap>
    </div>
  );
}

const Wrap = styled.div`
overflow: 'hidden';
  background-color: rgb(94, 53, 177);
  color: rgb(255, 255, 255);
  height : 100%;
  padding: 18px;

  &::after{
    content: "";
    position: absolute;
    width: 210px;
    height: 210px;
    background: rgb(69, 39, 160);
    border-radius: 50%;
    top: -85px;
    right: -95px;
  }

  &::before{

    content: "";
    position: absolute;
    width: 210px;
    height: 210px;
    background: rgb(69, 39, 160);
    border-radius: 50%;
    top: -125px;
    right: -15px;
    opacity: 0.5;
  }

`;
const IconBox = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e9e9e9;
  border-radius: 5px;
  background: rgb(69, 39, 160);
`;

const CardData = styled.p`
margin: 14px 0 8px 0;
  font-size: 34px;
`;
const CardTitle = styled.p`
  font-size: 16px
`;

export default TotalLikeOverviewItem;