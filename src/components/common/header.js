import {
  HeaderWrap,
  HearderLIstWrap,
  HearderList,
  LoginButton,
  LoginWrap,
  LogoWrap,
  MembershipButton,
} from "@/styles/common/header.styles";
import { useRouter } from "next/router";
import { useState } from "react";

const Header = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const LoginSuccess = () => {
    setIsLogin(!isLogin);
  };

  return (
    <HeaderWrap>
      <LogoWrap>
        <span>SeoulBook</span>
      </LogoWrap>
      <HearderLIstWrap>
        <HearderList>
          <li
            onClick={() => {
              router.push("/");
            }}
          >
            홈
          </li>
          <li>오늘의 추천</li>
          <li
            onClick={() => {
              router.push("/profile");
            }}
          >
            실시간 예약
          </li>
          <li>커뮤니티</li>
          <li
            onClick={() => {
              router.push("/chat");
            }}
          >
            채팅
          </li>
        </HearderList>
        {isLogin == false ? (
          <LoginWrap>
            <LoginButton onClick={LoginSuccess}>로그인</LoginButton>
            <MembershipButton>회원가입</MembershipButton>
          </LoginWrap>
        ) : (
          <LoginWrap>
            <LoginButton
              onClick={() => {
                router.push("/dashboard");
              }}
            >
              마이페이지
            </LoginButton>
            <MembershipButton onClick={LoginSuccess}>로그아웃</MembershipButton>
          </LoginWrap>
        )}
      </HearderLIstWrap>
    </HeaderWrap>
  );
};

export default Header;
