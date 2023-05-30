import { accessTokenState, headerSelector, headerState } from "@/redux/login.store";
import { HeaderWrap, HearderLIstWrap, HearderList, LoginButton, LoginWrap, LogoWrap, MembershipButton } from "@/styles/common/header.styles";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";


const Header = (props) => {
  const router = useRouter()
  const header = useRecoilValue(headerSelector);
  const setHeader = useSetRecoilState(headerState);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);


  const goLoginPage = () => {
    router.push('/auth/login')
  }

  const onGoProfilePage = () => {
    router.push('/profile')
  }

  const onLogout =()=>{
    setHeader({
      isLoggedIn: false,
      authToken: null,
    });
    setAccessToken(null);
    localStorage.removeItem('authToken');
  }

  return (
    <HeaderWrap>
      <LogoWrap>
        <span>SeoulBook</span>
      </LogoWrap>
      <HearderLIstWrap>
        <HearderList>
          <li onClick={() => router.push('/')}>홈</li>
          <li>오늘의 추천</li>
          <li onClick={onGoProfilePage}>실시간 예약</li>
          <li>커뮤니티</li>
          <li onClick={() => router.push('/chat')}>채팅</li>
        </HearderList>
        {header.isLoggedIn ? (
          <LoginWrap>
            <LoginButton onClick={() => router.push('/dashboard')}>마이페이지</LoginButton>
            <MembershipButton onClick={onLogout}>로그아웃</MembershipButton>
          </LoginWrap>
        ) : (
          <LoginWrap>
            <LoginButton onClick={goLoginPage}>로그인</LoginButton>
            <MembershipButton onClick={() => router.push('/auth/register')}>회원가입</MembershipButton>
          </LoginWrap>
        )}
      </HearderLIstWrap>
    </HeaderWrap>
  )
}

export default Header