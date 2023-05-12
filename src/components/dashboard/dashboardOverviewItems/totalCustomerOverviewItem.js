import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';

const TotalCustomerOverviewItem = ()=>{
  return(
    <div style={{height: '100%',position:'relative',borderRadius:'20px' ,overflow:'hidden'}}>

      <Wrap>
        <Stack flexDirection={"column"}>
          <IconBox>
            <Diversity1OutlinedIcon/>
          </IconBox>
          <CardData>342</CardData>
          <CardTitle>Total Customers</CardTitle>
        </Stack>
      </Wrap>
    </div>
  );
}

const Wrap = styled.div`
  overflow: 'hidden';
  background-color: rgb(30, 136, 229);
  color: rgb(255, 255, 255);
  height : 100%;
  padding: 18px;

  &::after{
    content: "";
    position: absolute;
    width: 210px;
    height: 210px;
    background: rgb(21, 101, 192);
    border-radius: 50%;
    z-index: 1;
    top: -85px;
    right: -95px;
  }

  &::before{

    content: "";
    position: absolute;
    z-index: 1;
    width: 210px;
    height: 210px;
    background: rgb(21, 101, 192);
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
  border-radius: 5px;
    background: rgb(21, 101, 192);
`;

const CardData = styled.p`
margin: 14px 0 8px 0;
  font-size: 34px;
`;
const CardTitle = styled.p`
  font-size: 16px
`;

export default TotalCustomerOverviewItem;