
import profile from "../../../public/chat/pr_img.png";
import { AsideProfileUI, DetailAsidebarwrap, DetailButton, DetailCircleWrap, DetailRegistAside, FlexCenter, FlexGap3px, UserNameDetail } from "@/styles/common/Asidebar.style";

const ProfileAsideBarUI = () => {

  return (
    <>
      <DetailRegistAside>
        <DetailCircleWrap>
          <AsideProfileUI></AsideProfileUI>
        </DetailCircleWrap>
        <UserNameDetail>홍길동</UserNameDetail>
        <DetailAsidebarwrap>
          <FlexGap3px>
            <span>
              email:
            </span>
            <span>asd1234@naver.com</span>
          </FlexGap3px>
          <FlexGap3px>
            <span>
              Phone:
            </span>
            <span>010-0000-0000</span>
          </FlexGap3px>
          <FlexGap3px>
            <span>
              location:
            </span>
            <span>서울특별시</span>
          </FlexGap3px>
          <FlexGap3px>
            <span>
              website:
            </span>
            <span>www.naver.com</span>
          </FlexGap3px>
        </DetailAsidebarwrap>
        <FlexCenter>
          <DetailButton>채팅하기</DetailButton>
        </FlexCenter>
      </DetailRegistAside>
    </>
  )

}

export default ProfileAsideBarUI;