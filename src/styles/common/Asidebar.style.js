import styled from "@emotion/styled";


export const DetailRegistAside = styled.aside`
  position: sticky;
  width: 361px;
  height: auto;
  float: right;
  z-index: 9;
  background: #ffffff;
  border: 1.5px solid rgba(243, 216, 121, 0.7);
  box-shadow: 0px 4px 27px rgba(0, 0, 0, 0.1);
  border-radius: 9px;
  display: flex;
  flex-direction: column;
  justify-content: center;
    &:hover {
    transform: translateY(-20px);
    transition: all 0.3s linear;
  }
`;
export const DetailCircleWrap = styled.div`
  border-radius: 100%;
  width: 150px;
  margin: 34px 102px;
  border: 3px solid #f4e2ba;
  display: flex;
  justify-content: center;
  img {
    margin: 14px 11px;
  }
`;

export const AsideProfileUI = styled.div`
background-image: url('/ProfileMan.png');
height: 145px;
`

export const DetailAsidebarwrap = styled.div`
  margin: 0 auto;
  gap: 3px;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  
`;

export const UserNameDetail = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
`;

export const FlexGap3px = styled.div`
  display: flex;
  gap: 7px;

`;

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;

`;

export const DetailButton = styled.button`
  background: #00aaff;
  border-radius: 5px;
  border: none;
  padding: 9px 101px;
  margin: 58px 25px 25px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
  &:hover{
    background: #DAF2FF;
    transition: all 0.2s linear;
  }
`;