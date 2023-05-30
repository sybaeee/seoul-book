import { accessTokenState, headerState } from "@/redux/login.store";
import { Wrap, AuthCard, CardHeader, HeaderTitle, HeaderDetail, PageLink, AuthForm } from "@/styles/auth.styles";

import { TextField, Button } from "@mui/material";
import axios from "axios";

import { useFormik } from 'formik';
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import * as yup from 'yup';

const validationSchema = yup.object({
  email: yup.string().required('Email is required'),
  pw: yup.string().required('Password is required'),
});

const Login = () => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const [header, setHeader] = useRecoilState(headerState);

  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: '',
      pw: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      axios.post('/api/login', values)
        .then(res => {
          setAccessToken(res.data.token);
          localStorage.setItem("accessToken",res.data.token);
          setHeader({
            isLoggedIn: true,
            authToken: res.data.token,
          });
          router.replace('/');
        }).catch(err => {
          console.log(err);
          alert('wrong email or password!');
        });
    },
  });

  return (
    <Wrap>
      <AuthCard>
        <CardHeader>
          <HeaderTitle>Log In</HeaderTitle>
          <HeaderDetail>
            Don't have an account? &nbsp;
            <PageLink href="/">Register</PageLink>
          </HeaderDetail>
        </CardHeader>
        <AuthForm onSubmit={formik.handleSubmit}>

          <TextField name="email" label="Email Address"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField name="pw" label="Password"
            type="password"
            value={formik.values.pw}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.pw && Boolean(formik.errors.pw)}
            helperText={formik.touched.pw && formik.errors.pw}
          />
          <Button type='submit' variant="contained">Log In</Button>

          <PageLink href="/">Forget password?</PageLink>
        </AuthForm>
      </AuthCard>
    </Wrap>
  );
}

export default Login;