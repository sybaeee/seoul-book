import styled from "@emotion/styled";
import Link from "next/link";
export const Wrap = styled.div`
  height: 100vh;
  background-image: url(/seoul1.jpg);
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AuthCard = styled.div`
  margin: 50px 24px;
  background-color: #ffffffC0;
  backdrop-filter: blur(6px);
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 6px 30px;
  border-radius: 20px;

  @media screen and (min-width: 600px){
    max-width: 600px;
  }

  & > *{
    flex: 1 1 auto;
  }
`;

export const CardHeader = styled.div` 
  padding: 32px 24px 0px;
  display: flex;
  flex-direction: column;
`
export const HeaderTitle = styled.h1`
  font-size: 20px;
  font-weight: 700;
`;

export const HeaderDetail = styled.p`
  font-weight: 400;
  color:rgb(108, 115,127);
`;

export const PageLink = styled(Link)`
  color: rgb(99, 102, 241);
  text-decoration: none;
  align-self: center;
`;

export const AuthForm = styled.form`
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;