import { Wrap, AuthCard, CardHeader, HeaderTitle, HeaderDetail, PageLink, AuthForm } from "@/styles/auth.styles";
import { TextField, Button } from "@mui/material";

const Login = ()=>{

  return(
    <Wrap>
      <AuthCard>
        <CardHeader>
          <HeaderTitle>Log In</HeaderTitle>
          <HeaderDetail>
            Don't have an account? &nbsp; 
            <PageLink href="/">Register</PageLink>
          </HeaderDetail>
        </CardHeader>
        <AuthForm>
          <TextField label="Email Address"/>
          <TextField label="Password"/>
          <Button variant="contained">Log In</Button>
          <PageLink href="/">Forget password?</PageLink>
        </AuthForm>
      </AuthCard>
    </Wrap>
  );
}

export default Login;