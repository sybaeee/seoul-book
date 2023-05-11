
import { useState } from "react";
import SideNav from "./sideNav";
import TopNav from "./topNav";
import styled from "@emotion/styled";

const drawerWidth = 260;

const DashLayout = ({children, ...props})=>{
  const [open, setOpen] = useState(false);
  const handleClose = ()=>{
    setOpen(false);
  }
  const handleOpen = ()=>{
    setOpen(true);
  }

  const handleMenu = ()=>{
    setOpen(!open);
  }
  return(
    <Root>
      <TopNav open={open} handleMenu={handleMenu}/>

        <SideNav drawerWidth={drawerWidth} open={open} handleClose={handleClose} />
        <div style={{flexGrow:1}}>
        <div style={{height:'80px', flex:'0 0 auto'}}/>
        <Main open={open}>
          {children}
        </Main>
        </div>

    </Root>
  );
}
const Root = styled.div`

  display: flex;
`;
const Main = styled.main`
  margin-left: 20px;
  transition: 225ms cubic-bezier(0, 0, 0.2, 1);
  padding: 20px;
  background-color: rgb(238, 242, 246);
  margin-right:20px;
  border-radius: 12px 12px 0px 0px;
  flex-grow: 1;
  
  @media screen and (min-width: 600px){
    margin-left: ${({open})=>open || `-${drawerWidth-20}px`};
  }
`;

export default DashLayout;