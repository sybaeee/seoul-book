import styled from "@emotion/styled";


export const ProfileDetailWrapper = styled.div`
width: 1250px;
display: flex;
border: 1px solid black;
margin:  0 auto;
flex-direction: column;

`
export const ProfileDetailTitleWrap = styled.div`
display: flex;
align-items: center;
width: 100%;
background-color: #f5f5dc;
box-shadow: -7px 21px 21px rgba(0, 0, 0, 0.1);
height: 367px;
justify-content: center;
background-image: url('/public/seoul1.jpg');
`

export const ProfileDetailTitle = styled.span`
font-weight: 700;
font-size: 48px;

`


export const ProfileDetailMainWrapper = styled.div`
display: flex;
`


export const ProfileContentsWrap = styled.div`
width: 741px;
background: #FFFFFF;
border: 1px solid #D6BD65;
box-shadow: 0px 4px 29px rgba(0, 0, 0, 0.07);
border-radius: 9px;
margin: 71px 65px 34px;
  &:hover {
    transform: translateY(-20px);
    transition: all 0.3s linear;
  }
`

export const ProfileInfoWrap = styled.div`
width: 361px ;
background: #FFFFFF;
border: 1.5px solid rgba(243, 216, 121, 0.01);
border-radius: 9px;
margin-top: 69px;
margin-right:25px;
`