import { Avatar, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Rating, Stack, TextField, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";

const ReviewPage = ()=>{
  const theme = useTheme();
  const [open , setOpen] = useState(false);
  const [star, setStar] = useState(0.0);
  const fullscreen = useMediaQuery(theme.breakpoints.down('md'));
  


  const handleOpen = ()=>{
    setOpen(true);
  }

  const handleClose = ()=>{
    setOpen(false);
  }
  return(
    <>
      <button onClick={handleOpen}>리뷰 작성하기</button>
      <Dialog open={open} onClose={handleClose} fullScreen={fullscreen} fullWidth="md">
        <DialogTitle>Seoul NS Tower</DialogTitle>
        <DialogContent dividers>
          <Stack
          divider={<Divider variant="middle" light/>}
          spacing={2}>
            <Stack alignItems={"center"} spacing={1}>
              <Avatar>dd</Avatar>
              <Rating value={star} precision={0.5} onChange={(event, newValue)=>{setStar(newValue)}}/>
            </Stack>
            
            <TextField
              label="write your review"
              multiline
              minRows={10}
              fullWidth/>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button>Cancel</Button>
          <Button>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ReviewPage;