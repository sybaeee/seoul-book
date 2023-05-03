import ReviewDialog from "@/components/review/reviewDialog";
import { Avatar, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Rating, Stack, TextField, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";

const ReviewPage = ()=>{
  const [open , setOpen] = useState(false);
  const [star, setStar] = useState(0.0);
  const theme = useTheme();
  const fullscreen = useMediaQuery(theme.breakpoints.down('md'));
  
  const handleChange = (event, newValue)=>{
    setStar(newValue)
  }
  const handleClose = ()=>{
    setOpen(false);
  }

  const handleOpen = ()=>{
    setOpen(true);
  }

  return(
    <>
      <button onClick={handleOpen}>리뷰 작성하기</button>
      <ReviewDialog 
      fullscreen={fullscreen}
      handleChange={handleChange}
      handleClose={handleClose}
      open={open}
      star={star}/>
    </>
  );
}

export default ReviewPage;