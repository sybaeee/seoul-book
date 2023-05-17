import styled from '@emotion/styled'

export const MapPageWrapper = styled.div`
width: 1250px;
border: 1px solid black;
border-radius: 10px;
margin: 0 auto;
display: flex;
gap: 10px;
justify-content: center;

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