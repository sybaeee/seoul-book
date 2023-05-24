
import { LanguageElementWrap, LanguageWrap, ProfileContentsElementsWrapper, ProfileIntroduceWrap, TitleContentsElements, TitleContentsText } from "@/styles/profile/ProfileContentsElements.style"
import { useState } from "react"

const ProfileContentsElements = () => {

  const [langugeBox, setLanguageBox] = useState([0, 0, 0, 0]);


  return (
    <ProfileContentsElementsWrapper>
      <ProfileIntroduceWrap>
        <TitleContentsElements>
          자기소개
        </TitleContentsElements>
        <TitleContentsText>
          인터엑스는 제조 AI 및 자율공장 전문 기업으로 누구나 쉽게 제조 빅데이터를 분석하고 쉽게 현장에 적용할 수 있도록 인공지능(AI) 기반 제조 빅데이터 분석 서비스 플랫폼을 제공하고 있습니다.

          기존의 빅데이터 분석 서비스가 단순히 데이터를 나열하고 시각화 하는것에 그쳤다면 인터엑스의 제조 빅데이터 분석 서비스는 빅데이터 분석과 IoT(사물 인터넷)의 결합으로 개선된 프로세스를 현장에 자동 적용하여 스마트팩토리를 고도화 시키는 것이 인터엑스의 목표입니다.

          우리는 제조 AI와 빅데이터가 가지는 무궁무진한 가능성을 제조기업 모두가 누리며 함께 성장하고 성공스토리를 만들 수 있도록 노력하고 있습니다.
        </TitleContentsText>
      </ProfileIntroduceWrap>
      <ProfileIntroduceWrap>
        <TitleContentsElements>
          사용가능한언어
        </TitleContentsElements>
        <LanguageWrap>
          {
            langugeBox.map((a, i) => {
              return (
                <LanguageElementWrap>영어</LanguageElementWrap>
              )
            })
          }
        </LanguageWrap>
      </ProfileIntroduceWrap>
      <ProfileIntroduceWrap>
        <TitleContentsElements>
          성별
        </TitleContentsElements>
        <span>
          남
        </span>
      </ProfileIntroduceWrap>
      <ProfileIntroduceWrap>
        <TitleContentsElements>
          연령대
        </TitleContentsElements>
        <span>
          20대
        </span>
      </ProfileIntroduceWrap>
      <ProfileIntroduceWrap>
        <TitleContentsElements>
          활동지역 & 시간
        </TitleContentsElements>
        <span>
          종로구
        </span>
      </ProfileIntroduceWrap>
      <ProfileIntroduceWrap>
        <TitleContentsElements>
          성격
        </TitleContentsElements>
        <span>
          밝고 쾌활한 성격을 가지고 있습니다 여러분들이랑 즐거운 시간을 보내고 싶습니다
        </span>
      </ProfileIntroduceWrap>
    </ProfileContentsElementsWrapper>
  )

}

export default ProfileContentsElements