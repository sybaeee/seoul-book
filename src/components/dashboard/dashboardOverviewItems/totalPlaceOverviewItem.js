import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

const TotalPlaceOverviewItem = ()=>{
  return(
    <div style={{position:'relative',borderRadius:'20px' ,overflow:'hidden'}}>

      <Wrap>
        <Stack alignItems={'center'} gap={3} flexDirection={"row"}>
          <IconBox>
            <PlaceOutlinedIcon/>
          </IconBox>
          <Stack flexDirection={"column"}>
            <CardData>1</CardData>
            <CardTitle>My Places</CardTitle>
          </Stack>
        </Stack>
      </Wrap>
    </div>
  );
}

const Wrap = styled.div`
  background-color: white;
  color: rgb(238, 242, 246);
  height : 100%;
  padding: 18px;

  &::after{
    content: "";
    position: absolute;
    width: 210px;
    height: 210px;
    background: linear-gradient(210.04deg, rgb(255, 193, 7) -50.94%, rgba(144, 202, 249, 0) 83.49%);
    border-radius: 50%;
    top: -30px;
    right: -180px;
  }

  &::before{
    content: "";
    position: absolute;
    width: 210px;
    height: 210px;
    background: linear-gradient(140.9deg, rgb(255, 193, 7) -14.02%, rgba(144, 202, 249, 0) 70.5%);
    border-radius: 50%;
    top: -160px;
    right: -130px;
  }

`;
const IconBox = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;    
  background: rgb(255, 248, 225);
  color: rgb(255, 193, 7);
`;

const CardData = styled.p`
margin: 14px 0 8px 0;
  font-size: 20px;
  color: rgb(18, 25, 38);
`;
const CardTitle = styled.p`
  font-size: 14px;
  color: rgb(105, 117, 134);
`;

export default TotalPlaceOverviewItem;