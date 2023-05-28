import { HeaderWrap, HearderLIstWrap, HearderList, LoginButton, LoginWrap, LogoWrap, MembershipButton } from "@/styles/common/header.styles";
import { useRouter } from "next/router";
import { useState } from "react";


const Header = () => {
  const router = useRouter()
  const [isLoginPage, setIsLoginPage] = useState(false)



  const goLoginPage = () => {
    router.push('/auth/login')
    setIsLoginPage(true)
  }

  const onGoProfilePage = () => {
    router.push('/profile')
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
        {isLoginPage ? (
          <LoginWrap>
            <LoginButton onClick={() => router.push('/dashboard')}>마이페이지</LoginButton>
            <MembershipButton onClick={() => setIsLoginPage(false)}>로그아웃</MembershipButton>
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