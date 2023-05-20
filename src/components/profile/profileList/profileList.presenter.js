import ReligionCategory from "@/components/common/ReligionCategory"
import { ProfileListWrap } from "@/styles/profile/profileList.style"
const ProfileListUI = () => {

  return (
    <ProfileListWrap>
      <ReligionCategory />
      <BasicSelect />
    </ProfileListWrap>
  )
}

export default ProfileListUI 