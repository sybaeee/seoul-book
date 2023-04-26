import { HeaderWrap, HearderLIstWrap, HearderList, LoginButton, LoginWrap, LogoWrap, MembershipButton } from "@/styles/common/header.style";


const Header = () =>{
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
      <LoginWrap>
      <LoginButton>로그인</LoginButton>
      <MembershipButton>회원가입</MembershipButton>
      </LoginWrap>
    </HearderLIstWrap>
    </HeaderWrap>
  )
}

export default Header;