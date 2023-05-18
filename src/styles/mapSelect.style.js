import styled from '@emotion/styled'

export const MapPageWrapper = styled.div`
width: 1250px;
border: 1px solid black;
border-radius: 10px;
margin: 0 auto;
display: flex;
gap: 10px;
justify-content: center;
background-image: url(./mapImage.jpg);
color: white;

`
export const MapPagePartWrapper = styled.div`
display: flex;
gap: 30px;
flex-direction: column;

`

export const MapPageContentsWrapper = styled.div`
border: 1px solid black;
display: flex;
flex-shrink: 0;
width: 100%;
padding: 20px;
border-radius: 40px 100px;
:hover{
  background-color: yellow;
}
`
export const PhotoSlideModal = styled.div`
justify-content: center;
display: flex;
background-color: #ffff;
flex-shrink: 0;
width: 326px;
height: 478px;
text-align: center;
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
    transform: translateX(50px);

   }
   75%{
    transform: translateX(-50px);

   }
   100%{
    transform: translateX(0px);
   } 
  }
  `

export const PhotoModalContentsWrap = styled.div`
color: black;
`

export const PhotoModalContents = styled.span`
  color: black;
  
  `
