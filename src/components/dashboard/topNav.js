import styled from "@emotion/styled";
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import { Avatar, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
const TopNav = ({open, handleMenu, ...props})=>{
  const [anchorEl, setAnchorEl] = useState(null);
  const menuOpen = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    if(anchorEl) return handleClose();
    setAnchorEl(event.currentTarget);
  };

  return(
    <HeaderWrap style={{zIndex:9999}}>
      <NavWrap>
        <LogoBox>
          <p>로고</p>
          <MenuBtn onClick={handleMenu}>
            <MenuIcon/>
          </MenuBtn>
        </LogoBox>
        <SettingWrap current={menuOpen} onClick={handleClick}>
          <Avatar sx={{width:30,height:30}}/>
          <SettingsIcon/>
        </SettingWrap>
      </NavWrap>
      <Menu
        sx={{zIndex:9999, transform:'translateY(10px)'}}
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My accoudfsaasdffafsdafsdnt</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </HeaderWrap>
  )
}

const HeaderWrap = styled.header`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  width: 100%;
  backdrop-filter: blur(6px);
  background-color: #ffffff80;
`;
const NavWrap = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  min-height: 48px;
  justify-content: space-between;

  @media screen and (min-width:680px){
    padding-left: 24px;
    padding-right: 24px;
  }
`;

const LogoBox = styled.div`
  width: 228px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 8px;
  cursor: pointer;
  transition: 200ms;
  font-size: 1.2em;
  background-color: rgb(237, 231, 246);
  color: rgb(94, 53, 177);
  &:hover {
    background: rgb(94, 53, 177);
    color: rgb(237, 231, 246);
  }
`;

export const SettingWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(238, 242, 246);
  color: rgb(33, 150, 243);
  height: 48px;
  border-radius: 27px;
  transition: 200ms;
  background-color: rgb(238, 242, 246);
  padding: 8px;
  column-gap: 12px;
  font-size:0.875rem;
  cursor: pointer;

  ${({current})=>current && {
     backgroundColor: `rgb(33, 150, 243)`,
    color: `rgb(238, 242, 246)`
  }}
  &:hover{
    background-color: rgb(33, 150, 243);
    color: rgb(238, 242, 246);
  }
`;

export default TopNav;