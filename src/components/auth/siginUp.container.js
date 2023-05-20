import styled from "@emotion/styled";

export const SignUp = ()=>{
  return(

    <Wrap>
      <SignUpForm>
        ddd
        ddd
      </SignUpForm>
    </Wrap>
  );
}

export default SignUp;

const Wrap = styled.div`
  background-image: url(/seoul1.jpg);
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignUpForm = styled.form`
  margin: 0 auto;
  background-color: #ffffff80;
  backdrop-filter: blur(6px);
  width: 100%;
  height: 300px;

  @media screen and (min-width: 600px){
    max-width: 600px;
  }
`;
