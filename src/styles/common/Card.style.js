import styled from "@emotion/styled";

export const ImgWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 50px auto;
  gap: 10px;
  justify-content: center;
`;

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