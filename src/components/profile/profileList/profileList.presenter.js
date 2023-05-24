import GenderSelector from "@/components/common/GenderSelector"
import ReligionCategory from "@/components/common/ReligionCategory"
import ImgMediaCard from "@/components/common/card"
import { ImgWrapper } from "@/styles/common/Card.style"
import { ProfileListWrap, ProfileSelectWrap } from "@/styles/profile/profileList.style"
import { useState } from "react"

const ProfileListUI = ({ dataList }) => {

  return (
    <ProfileListWrap>
      <ProfileSelectWrap>
        <ReligionCategory />
        <GenderSelector />
      </ProfileSelectWrap>
      <ImgWrapper>
        {
          dataList.map((v, i) => {

            return (<ImgMediaCard data={v} key={i} />)
          })
        }
      </ImgWrapper>
    </ProfileListWrap>
  )
}

export default ProfileListUI 