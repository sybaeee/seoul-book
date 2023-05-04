import styled from '@emotion/styled'


export const MainTextWrap = styled.div`
display: flex;
flex-direction:column;
z-index: 1;
`

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

  
`
export const GuideLineWrap = styled.div`
  width: 100%;
  display: flex;

`

export const GuidLineContents = styled.div`
box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
border-radius: 8px;
width: 405px;
`
export const PhotoSlideWrapper = styled.div`
display: flex;
flex-direction: row;
gap: 10px;
margin-top: 50px;
overflow: hidden;
transition: 3s ease;
`
export const PhotoSlide = styled.div`

flex-shrink: 0;
width: 326px;
height: 478px;
background: url(namsanView.png);
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
border-radius: 34px;
:hover{
    animation-name: identifier;
    animation-duration: 3s;
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

export const SliderButtonWrapper = styled.div`

display: flex;
margin-top: 30px;
gap: 3px;
`
export const SliderButton = styled.button`
padding: 10px;

`
export const KoreaVideo = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;

`