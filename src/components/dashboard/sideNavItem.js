import styled from "@emotion/styled";
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import BeachAccessOutlinedIcon from '@mui/icons-material/BeachAccessOutlined';
import { Divider } from "@mui/material";

const SideNavItem = ()=>{
  return (<SideNavWrap>
    <SideNavBox>
      <SideNavTitle>Dashboard</SideNavTitle>
      <SideNavBtn current>
        <DashboardOutlinedIcon/>
        <SideNavDetail>Overview</SideNavDetail>
      </SideNavBtn>
    </SideNavBox>
    <Divider/>
    <SideNavBox>
      <SideNavTitle>My Seoul</SideNavTitle>
      <SideNavBtn>
        <BeachAccessOutlinedIcon/>
        <SideNavDetail>My Place</SideNavDetail>
      </SideNavBtn>
    </SideNavBox>
    <Divider/>
    <SideNavBox>
      <SideNavTitle>Customer</SideNavTitle>
      <SideNavBtn>
        <ChatOutlinedIcon/>
        <SideNavDetail>Customer Chat</SideNavDetail>
      </SideNavBtn>
      <SideNavBtn>
        <RateReviewOutlinedIcon/>
        <SideNavDetail>Customer Review</SideNavDetail>
      </SideNavBtn>
      <SideNavBtn>
        <CalendarMonthOutlinedIcon/>
        <SideNavDetail>Customer Book</SideNavDetail>
      </SideNavBtn>
    </SideNavBox>
  </SideNavWrap>)
} 

const SideNavWrap = styled.div`
  padding-left: 16px;
  padding-right: 16px;
`;

const SideNavBox = styled.div`
  padding: 0px 0px 8px;
`

const SideNavTitle = styled.span`
  margin: 10px 0px 0.35em;
  line-height: 1.66;
  display: block;
  color: rgb(18, 25, 38);
  font-size: 15px;
  font-weight: 500;
  padding: 6px;
  text-transform: capitalize;
`;
const SideNavDetail = styled.h5`
  font-weight: 500;
  line-height: 1.334;
  color: inherit;
  font-size: 14px;
  `;
const SideNavBtn = styled.div`
  cursor: pointer;
  outline: 0px;
  border: 0px;
  margin: 0px 0px 4px;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  padding: 10px 16px 10px 24px;
  border-radius: 12px;
  column-gap: 15px;

  ${({current})=>current && {
    backgroundColor: `rgb(237, 231, 246)`,
    color: `rgb(94, 53, 177)`
  }}

  &:hover{
    background-color: rgb(237, 231, 246);
    color: rgb(94, 53, 177);
  }
  
`;
export default SideNavItem;