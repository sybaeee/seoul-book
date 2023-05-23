import ProfileAsideBarUI from "@/components/common/AsiderBar"
import ProfileContentsElements from "@/components/common/DetailElements"
import { ProfileContentsWrap, ProfileDetailMainWrapper, ProfileDetailTitle, ProfileDetailTitleWrap, ProfileDetailWrapper, ProfileInfoWrap } from "@/styles/profile/profileDetail.style"


const ProfileDetailUI = () => {

  return (
    <ProfileDetailWrapper>
      <ProfileDetailTitleWrap>
        <ProfileDetailTitle>제목</ProfileDetailTitle>
      </ProfileDetailTitleWrap>
      <ProfileDetailMainWrapper>
        <ProfileContentsWrap>
          <ProfileContentsElements />
        </ProfileContentsWrap>
        <ProfileInfoWrap>
          <ProfileAsideBarUI />
        </ProfileInfoWrap>
      </ProfileDetailMainWrapper>
    </ProfileDetailWrapper>
  )

}

export default ProfileDetailUI