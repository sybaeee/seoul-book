import styled from "@emotion/styled";

export const ChatMain = styled.div`
    max-width: 800px;
    max-height: 600px;
    margin: 0 auto;
    border: solid 1px #e9e9e9;

`

export const ChatWrap = styled.div`
    display: flex;
`



export const ChatHeader = styled.div`
    box-sizing: border-box;
    padding: 0 20px;
    width: 100%;
    height: 40px;
    display: flex;
    border: 1px solid #4C4C4C;
    align-items: center;
    justify-content: space-between;
    
    `

export const ChatHeaderTitle = styled.div`
    font-weight: 400;
    font-size: 16px;
    
`

export const ChatListWrap = styled.div `
    width: 200px;
    height: 560px;
    display: flex;
    flex-direction: column;
    border: solid 1px #4c4c4c;
    border-top: 0px;
    
`

export const ChatContentWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ChatContent = styled.div`
    box-sizing: border-box;
    width: 95%;
    height: 60px;
    margin: 10px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    
    background: #FFFFFF;
    border: 1px solid #e9e9e9;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.4);
    border-radius: 5px;
`

export const ChatContentPrImg = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50px;
    background-image: url('/chat/pr_img.png');
    background-size: cover;
`
export const ChatContentTextWrap = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
`
export const ChatContentHostName = styled.div`
    font-size: 8px;
    
`

export const ChatViewWrap = styled.div`
    max-width: 600px;
    height: 560px;
    margin: 0 auto;
    border: solid 1px #4c4c4c;
    border-left: 0px;
    border-top: 0px;
`

export const ChatMsgWrap = styled.div`
    
`

export const ChatMsgList = styled.div`
    width: 100%;
    height: 440px;
    display: flex;
    flex-direction: column;
    margin-bottom: 18px;
    overflow-y: auto;
    
`

export const ChatHostMsg = styled.div`
    word-break: break-all;
    padding: 5px 10px;
    margin: 10px 10px 0 0;
    max-width: 60%;
    align-self: flex-end;
    white-space: pre-wrap;

    background: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    border: 1px solid #E9E9E9;

    font-size: 12px;
    line-height: 26px;
    color: #414042;

`

export const ChatUserMsg = styled.div`
    word-break: break-all;
    padding: 5px 10px;
    margin: 10px 0 0 10px;
    max-width: 60%;
    white-space: pre-wrap;
    flex-grow: 0;
    flex-basis: auto;

    background: #1B3E73;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
    border-radius: 10px;

    font-size: 12px;
    line-height: 26px;
    color: #fff;
`
export const ChatTextInput = styled.textarea`
    box-sizing: border-box;
    width: 100%;
    margin: 0 auto;
    height: 18%;
    padding: 10px;

    background: #FFFFFF;
    border: 1px solid #4C4C4C;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    font-size: 14px;
    line-height: 26px;
    color: #414042;

    &:focus{
        outline: none;
    }
`
