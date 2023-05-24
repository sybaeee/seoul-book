import { AuthCard, AuthForm, CardHeader, HeaderDetail, HeaderTitle, PageLink, Wrap } from "@/styles/auth.styles";
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";

import { useFormik } from 'formik';
import * as yup from 'yup';

const checkDuplicateEmail = async (email) => {
  console.log('gggg')
  try {
    const response = await axios.get(`/api/check-email?email=${email}`);
    console.log(response)
    return response.data.exist;
  } catch (error) {
    console.error('Error checking duplicate email:', error);
    // Handle error scenario (e.g., display error message)
    return false;
  }
};

const validationSchema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required')
    .test('duplicate-email', 'Email already exists', async function (value) {
      return !(await checkDuplicateEmail(value));
    }),
  password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
  verifyPassword: yup
    .string()
    .required('Please enter your password again')
    .oneOf([yup.ref('password')], 'Passwords must match'),
  languages: yup.array().min(1, 'At least one language must be selected'),
  gender: yup.number().required('Gender is required'),
  userType: yup.number().required('User type is required'),
  username: yup.string().required('User Name is rquired')
});

const Register = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      verifyPassword: '',
      languages: [],
      gender: '',
      userType: '',
      username: '',
    },
    validationSchema,
    onSubmit: (values) => {
      axios.post('/api/users', values)
        .then(res => {
          // console.log(res);
          router.replace('/auth/login');
        }).catch(err => {
          console.log(err);
        });
    },
  });

  return (
    <Wrap>
      <AuthCard>
        <CardHeader>
          <HeaderTitle>Register</HeaderTitle>
          <HeaderDetail>
            Already have an account? &nbsp;
            <PageLink href="/auth/login">Log In</PageLink>
          </HeaderDetail>
        </CardHeader>
        <AuthForm onSubmit={formik.handleSubmit}>
          <TextField
            label="User Name"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
          <TextField
            label="Email Address"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <div style={{ display: "flex", flexDirection: 'column', rowGap: '10px' }}>
            <TextField
              label="Password"
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <TextField
              label="Verify Password"
              type="password"
              name="verifyPassword"
              value={formik.values.verifyPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.verifyPassword && Boolean(formik.errors.verifyPassword)}
              helperText={formik.touched.verifyPassword && formik.errors.verifyPassword}
            />
          </div>

          <FormControl
            error={formik.touched.languages && Boolean(formik.errors.languages)}
          >
            <FormLabel>Languages</FormLabel>
            <FormGroup row>
              <FormControlLabel control={<Checkbox name="languages"
                value="1"
                checked={formik.values.languages.includes('1')}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} />} label="Chinese" />
              <FormControlLabel control={<Checkbox
                name="languages"
                value="2"
                checked={formik.values.languages.includes('2')}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} />} label="English" />
              <FormControlLabel control={<Checkbox
                name="languages"
                value="3"
                checked={formik.values.languages.includes('3')}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} />} label="Japanese" />
              <FormControlLabel control={<Checkbox
                name="languages"
                value="4"
                checked={formik.values.languages.includes('4')}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} />} label="Korean" />
              <FormControlLabel control={<Checkbox name="languages"
                value="5"
                checked={formik.values.languages.includes('5')}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} />} label="Others" />
            </FormGroup>

            {formik.touched.languages && formik.errors.languages && <FormLabel error sx={{ fontSize: '0.75em', ml: '14px' }}>{formik.errors.languages}</FormLabel>}
          </FormControl>
          <FormControl
            error={formik.touched.gender && Boolean(formik.errors.gender)}>
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              row
              name="gender"
              value={formik.values.gender}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <FormControlLabel value='0' label="Female" control={<Radio />} />
              <FormControlLabel value='1' label="Male" control={<Radio />} />
            </RadioGroup>
            {formik.touched.gender && formik.errors.gender && <FormLabel error sx={{ fontSize: '0.75em', ml: '14px' }}>{formik.errors.gender}</FormLabel>}
          </FormControl>
          <FormControl
            error={formik.touched.userType && Boolean(formik.errors.userType)}>
            <FormLabel>Are you local provider? or visitor?</FormLabel>
            <RadioGroup
              row
              name="userType"
              value={formik.values.userType}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <FormControlLabel value='1' label="Provider" control={<Radio />} />
              <FormControlLabel value='2' label="Visitor" control={<Radio />} />
            </RadioGroup>
            {formik.touched.userType && formik.errors.userType && <FormLabel error sx={{ fontSize: '0.75em', ml: '14px' }}>{formik.errors.userType}</FormLabel>}

          </FormControl>
          <Button type="submit" variant="contained">Register</Button>
        </AuthForm>
      </AuthCard>
    </Wrap>
  );
}

export default Register;
