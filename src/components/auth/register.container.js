import { AuthCard, AuthForm, CardHeader, HeaderDetail, HeaderTitle, PageLink, Wrap } from "@/styles/auth.styles";
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";


const Register = ()=>{
  

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return(

    <Wrap>
      <AuthCard>
        <CardHeader>
          <HeaderTitle>Register</HeaderTitle>
          <HeaderDetail>
            Already have an account? &nbsp; 
            <PageLink href="/auth/login">Log In</PageLink>
          </HeaderDetail>
        </CardHeader>
        <AuthForm>
          <TextField label="User Name"/>
          <TextField label="Email Address"/>
          <div style={{display:"flex", flexDirection:'column', rowGap:'5px'}}>
            <TextField label="Password"/>
            <TextField label="Verify Password"/>
          </div>
          
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Chinese" />
            <FormControlLabel control={<Checkbox />} label="English" />
            <FormControlLabel control={<Checkbox />} label="Japanese" />
            <FormControlLabel control={<Checkbox />} label="Korean" />
          </FormGroup>
          <Button variant="contained">Register</Button>
        </AuthForm>
      </AuthCard>
    </Wrap>
  );
}

export default Register;
