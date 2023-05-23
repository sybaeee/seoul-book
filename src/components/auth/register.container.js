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
              <FormControlLabel value='1' control={<Checkbox />} label="Chinese" />
              <FormControlLabel value='2' control={<Checkbox />} label="English" />
              <FormControlLabel value='3' control={<Checkbox />} label="Japanese" />
              <FormControlLabel value='4'control={<Checkbox />} label="Korean" />
              <FormControlLabel value='5'control={<Checkbox />} label="Others" />
            </FormGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup row>
              <FormControlLabel value='0' label="Female" control={<Radio/>}/>
              <FormControlLabel value='1' label="Male" control={<Radio/>}/>
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Are you local provider? or visitor?</FormLabel>
            <RadioGroup row>
              <FormControlLabel value='1' label="Provider" control={<Radio/>}/>
              <FormControlLabel value='2' label="Visitor" control={<Radio/>}/>
            </RadioGroup>
          </FormControl>
          <Button variant="contained">Register</Button>
        </AuthForm>
      </AuthCard>
    </Wrap>
  );
}

export default Register;
