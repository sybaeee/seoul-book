import { Box, Drawer, useMediaQuery } from "@mui/material";
import SideNavItem from "./sideNavItem";

const SideNav = ({open, ...props})=>{
  const isMobile = useMediaQuery('(max-width:600px)');
  console.log(isMobile)
  return(
    <>
    
    {!isMobile ? 
    <Drawer 
      anchor="left" 
      variant="persistent" 
      open={open}
      sx={{
        display:{xs:'none', sm:'block'},
        width:props.drawerWidth,
        flexShrink:0,
        '& .MuiDrawer-paper': {
          border:'none',
          width: props.drawerWidth,
          boxSizing: 'border-box',
        }
      }}
      >
      <div style={{height:'80px', flex:'0 0 auto'}}/>
      <SideNavItem/>
    </Drawer>
    :
    <Drawer 
      anchor="left" 
      open={open}
      onClose={props.handleClose}
      sx={{
        display:{xs:'block', sm:'none'},
        width:props.drawerWidth,
        '& .MuiDrawer-paper': {
          width: props.drawerWidth,
          boxSizing: 'border-box',
        }
      }}
      >
      <div style={{height:'80px', flex:'0 0 auto'}}/>
      <SideNavItem/>
    </Drawer>
    }
    </>
  );
}


export default SideNav;