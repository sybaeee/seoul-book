import styled from "@emotion/styled";
import photowrapper from "/public/seoul1.jpg"
export const ImgWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 50px auto;
  gap: 10px;
  justify-content: center;
`;

export const Photowrap = styled.div`
background-image: url('/public/seoul1.jpg');

`


export const WapperCard = styled.div`
   &:hover {
    transform: translateY(-20px);
    transition: all 0.3s linear;
  }
`



export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 50px auto;
  gap: 10px;
`;