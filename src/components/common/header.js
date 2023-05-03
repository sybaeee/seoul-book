import { HeaderWrap, HearderLIstWrap, HearderList, LoginButton, LoginWrap, LogoWrap, MembershipButton } from "@/styles/common/header.styles";
import { useState } from "react";


const Header = () =>{

  const [isLogin, setIsLogin] = useState(false)
  const LoginSuccess = () =>{
    setIsLogin(!isLogin)
  }

  return(
  <HeaderWrap>
    <LogoWrap>
      <span>SeoulBook</span>
    </LogoWrap>
    <HearderLIstWrap>
      <HearderList>
        <li>홈</li>
        <li>오늘의 추천</li>
        <li>실시간 예약</li>
        <li>커뮤니티</li>
      </HearderList>
      {
      isLogin == false ?
      <LoginWrap>
      <LoginButton onClick={LoginSuccess}>로그인</LoginButton>
      <MembershipButton>회원가입</MembershipButton>
      </LoginWrap> :
       <LoginWrap>
      <LoginButton>마이페이지</LoginButton>
      <MembershipButton onClick={LoginSuccess}>로그아웃</MembershipButton>
      </LoginWrap>
      }
    </HearderLIstWrap>
    </HeaderWrap>
  )
}

export default Header;