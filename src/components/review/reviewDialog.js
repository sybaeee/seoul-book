import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Rating, Stack, TextField, useMediaQuery, useTheme } from "@mui/material";

const ReviewDialog = ({
  open, 
  handleClose,
  fullscreen,
  star,
  handleChange
})=>{

  return(
    <Dialog open={open} onClose={handleClose} fullScreen={fullscreen} fullWidth="md">
        <DialogTitle>Seoul NS Tower</DialogTitle>
        <DialogContent dividers>
          <Stack
          divider={<Divider variant="middle" light/>}
          spacing={2}>
            <Stack alignItems={"center"} spacing={1}>
              <Avatar>dd</Avatar>
              <Rating value={star} precision={0.5} onChange={handleChange}/>
            </Stack>
            
            <TextField
              label="write your review"
              multiline
              minRows={10}/>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
  );
}

export default ReviewDialog;