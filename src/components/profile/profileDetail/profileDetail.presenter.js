import ProfileAsideBarUI from "@/components/common/AsiderBar"
import ProfileContentsElements from "@/components/common/DetailElements"
import { ProfileContentsWrap, ProfileDetailMainWrapper, ProfileDetailTitle, ProfileDetailTitleWrap, ProfileDetailWrapper, ProfileInfoWrap } from "@/styles/profile/profileDetail.style"


const ProfileDetailUI = ({ data }) => {
  console.log(data)
  return (
    <ProfileDetailWrapper>
      <ProfileDetailTitleWrap>
        <ProfileDetailTitle>{data.title}</ProfileDetailTitle>
      </ProfileDetailTitleWrap>
      <ProfileDetailMainWrapper>
        <ProfileContentsWrap>
          <ProfileContentsElements data={data} />
        </ProfileContentsWrap>
        <ProfileInfoWrap>
          <ProfileAsideBarUI />
        </ProfileInfoWrap>
      </ProfileDetailMainWrapper>
    </ProfileDetailWrapper>
  )

}

export default ProfileDetailUI