import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
const TotalProductOverviewItem = ()=>{
  return(
    <div style={{position:'relative',borderRadius:'20px' ,overflow:'hidden'}}>

      <Wrap>
        <Stack alignItems={'center'} gap={3} flexDirection={"row"}>
          <IconBox>
            <InventoryOutlinedIcon/>
          </IconBox>
          <Stack flexDirection={"column"}>
            <CardData>2</CardData>
            <CardTitle>Total Schedules</CardTitle>
          </Stack>
        </Stack>
      </Wrap>
    </div>
  );
}

const Wrap = styled.div`
  background-color: rgb(30, 136, 229);
  color: rgb(238, 242, 246);
  height : 100%;
  padding: 18px;

  &::after{
    content: "";
    position: absolute;
    width: 210px;
    height: 210px;
    background: linear-gradient(140.9deg, rgb(144, 202, 249) -14.02%, rgba(144, 202, 249, 0) 77.58%);
    border-radius: 50%;
    top: -160px;
    right: -130px;
  }

  &::before{

    content: "";
    position: absolute;
    width: 210px;
    height: 210px;
    background: linear-gradient(210.04deg, rgb(144, 202, 249) -50.94%, rgba(144, 202, 249, 0) 83.49%);
    border-radius: 50%;
    top: -30px;
    right: -180px;
  }

`;
const IconBox = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
    background: rgb(21, 101, 192);
`;

const CardData = styled.p`
margin: 14px 0 8px 0;
  font-size: 20px;
`;
const CardTitle = styled.p`
  font-size: 13px
`;

export default TotalProductOverviewItem;