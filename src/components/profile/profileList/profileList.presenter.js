import GenderSelector from "@/components/common/GenderSelector"
import ReligionCategory from "@/components/common/ReligionCategory"
import ImgMediaCard from "@/components/common/card"
import { ImgWrpper } from "@/styles/common/Card.style"
import { ProfileListWrap, ProfileSelectWrap } from "@/styles/profile/profileList.style"
const ProfileListUI = () => {

  return (
    <ProfileListWrap>
      <ProfileSelectWrap>
        <ReligionCategory />
        <GenderSelector />
      </ProfileSelectWrap>
      <ImgWrpper>
        <ImgMediaCard />
        <ImgMediaCard />
        <ImgMediaCard />
        <ImgMediaCard />
        <ImgMediaCard />
        <ImgMediaCard />
      </ImgWrpper>
    </ProfileListWrap>
  )
}

export default ProfileListUI 