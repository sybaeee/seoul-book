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
background-image: url('/namsanView.png');

`


export const WapperCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); // 카드의 최소 너비는 250px이고, 카드가 없는 공간을 균등하게 채우도록 자동 조정합니다.
  grid-gap: 1rem; // 카드 사이의 간격입니다.
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