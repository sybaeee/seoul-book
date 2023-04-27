import styled from '@emotion/styled'

export const MainWrap = styled.div`
width: 1250px;
max-width: 1250px;
 min-width: 700px;
 margin: 0 auto;
 display: flex;
 flex-direction: column;
`
export const TextWrapper = styled.div`
margin-top: 190px;
font-family: 'Bodoni Moda';
font-style: normal;
font-weight: 400;
font-size: 64px;
span:nth-of-type(1){
  color: rgba(254, 90, 90, 1);
}
span:nth-of-type(2){
  color: rgba(0, 0, 0, 1);
}
span:nth-of-type(3){
  color: rgba(224, 180, 67, 1);
}
`
export const SubTextWrap = styled.div`
font-weight: 400;
font-size: 24px;
`

export const VisitButtonWrap = styled.div`
display: flex;
justify-content: center;
`
export const VisitButton = styled.button`
white-space: nowrap;
margin-top:112px;
width: 153px;
cursor: pointer;
background: #71A894;
border-radius: 8px;
border-style: none;
color: #fff;
font-family: 'Antic';
font-style: normal;
font-weight: 400;
font-size: 18px;
padding: 20px 20px;
`

export const AnimationTest= styled.div`
  text-align: center;
  :hover{
    animation-name: identifier;
    animation-duration: 1s;
  }
  @keyframes identifier {
   0%{
    transform: translateX(0px);
   }
   50%{
    transform: translateX(-100px);

   }
   75%{
    transform: translateX(100px);

   }
   100%{
    transform: translateX(0px);
   } 
  }
  
`