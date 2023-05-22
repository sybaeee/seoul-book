import { AuthCard, AuthForm, CardHeader, HeaderDetail, HeaderTitle, PageLink, Wrap } from "@/styles/auth.styles";
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from "@mui/material";
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
          
          <FormControl>
            <FormLabel>Languages</FormLabel>
            <FormGroup row>
              <FormControlLabel control={<Checkbox />} label="Chinese" />
              <FormControlLabel control={<Checkbox />} label="English" />
              <FormControlLabel control={<Checkbox />} label="Japanese" />
              <FormControlLabel control={<Checkbox />} label="Korean" />
            </FormGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup row>
              <FormControlLabel value='female' label="Female" control={<Radio/>}/>
              <FormControlLabel value='male' label="Male" control={<Radio/>}/>
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Are you local provider? or visitor?</FormLabel>
            <RadioGroup row>
              <FormControlLabel value='provider' label="Provider" control={<Radio/>}/>
              <FormControlLabel value='visitor' label="Visitor" control={<Radio/>}/>
            </RadioGroup>
          </FormControl>
          <Button variant="contained">Register</Button>
        </AuthForm>
      </AuthCard>
    </Wrap>
  );
}

export default Register;
