import styled from "@emotion/styled";

export const ChatListWrap = styled.div `
    width: 1120px;
    height: 700px;
    display: flex;
    flex-direction: column;
    
`

export const ChatHeader = styled.div`
    padding-left: 64px;
    padding-right: 20px;
    width: 100%;
    height: 60px;
    display: flex;
    border: 1px solid black;
    align-items: center;
    justify-content: space-between;
    
`
export const ChatHeaderLogo = styled.div`

`

export const ChatHeaderTitle = styled.div`
    font-weight: 700;
    font-size: 26px;

`


export const ChatContentWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ChatContent = styled.div`
    width: 992px;
    height: 110px;
    margin: 20px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    background: #FFFFFF;
    border: 1px solid #4C4C4C;
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.4);
    border-radius: 5px;
`

export const ChatContentPrImg = styled.div`
    width: 90px;
    height: 90px;
    border-radius: 50px;
    background-image: url('/chat/pr_img.png');
    background-size: cover;
`
export const ChatContentTextWrap = styled.div`
    width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
`
export const ChatContentHostName = styled.div`
    font-size: 26px;

`
export const ChatLastMsg = styled.div`
    margin-top: 8px;
    font-size: 16px;

`

export const ChatMsgWrap = styled.div`
    width: 100%
`

export const ChatUserMsg = styled.div`
    display: inline-block;
    word-break: break-all;
    padding: 5px 10px;
    margin: 10px 0 0 0;
    max-width: 60%;
    float: right;

    background: #1B3E73;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
    border-radius: 10px;

    font-size: 18px;
    line-height: 26px;
    color: #ffffff;

`

export const ChatHostMsg = styled.div`
    display: inline-block;
    word-break: break-all;
    padding: 5px 10px;
    margin: 10px 0 0 0;
    border: 1px solid #E9E9E9;
    max-width: 60%;
    float: left;
    

    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
    border-radius: 10px;

    font-size: 18px;
    line-height: 26px;
    color: #414042;
`
export const ChatTextInput = styled.textarea`
    box-sizing: border-box;
    width: 98.5%;
    height: 100px;
    margin: 10px;
    padding: 10px;
    position: fixed;
    bottom: 0;
    left: 0;

    background: #FFFFFF;
    border: 1px solid #4C4C4C;
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.4);
    border-radius: 5px;
    font-size: 18px;
    line-height: 26px;
    color: #414042;

    &:focus{
        outline: none;
    }
`
