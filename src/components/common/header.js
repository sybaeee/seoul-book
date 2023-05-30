import { accessTokenState, headerSelector, headerState } from "@/redux/login.store";
import { HeaderWrap, HearderLIstWrap, HearderList, LoginButton, LoginWrap, LogoWrap, MembershipButton } from "@/styles/common/header.styles";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";


const Header = (props) => {
  const router = useRouter()
  const header = useRecoilValue(headerSelector);
  const setHeader = useSetRecoilState(headerState);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  useEffect(()=>{
		if(localStorage.getItem("accessToken")){
      setAccessToken(localStorage.getItem("accessToken")||"");
      setHeader({
        isLoggedIn: true,
        authToken: localStorage.getItem("accessToken"),
      });
    }
  },[])

  const goLoginPage = () => {
    router.push('/auth/login')
  }

  const onGoProfilePage = () => {
    router.push('/profile')
  }
  const onGoReviewPage = () => {
    router.push('/detail')
  }

  const onLogout =()=>{
    setHeader({
      isLoggedIn: false,
      authToken: null,
    });
    setAccessToken(null);
    localStorage.removeItem('accessToken');
  }

  return (
    <HeaderWrap>
      <LogoWrap>
        <span>SeoulBook</span>
      </LogoWrap>
      <HearderLIstWrap>
        <HearderList>
          <li onClick={() => router.push('/')}>홈</li>
          <li onClick={onGoProfilePage}>현지인투어</li>
          <li onClick={onGoReviewPage}>리뷰</li>
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

export default Header;