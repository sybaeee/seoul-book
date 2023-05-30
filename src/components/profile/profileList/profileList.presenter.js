import DropDownText from "@/components/common/DropdownText"
import ImgMediaCard from "@/components/common/card"
import { ImgWrapper } from "@/styles/common/Card.style"
import { ProfileListWrap, ProfileSelectWrap, ProfileTitleWrap } from "@/styles/profile/profileList.style"
import { useState } from "react"

const ProfileListUI = ({ dataList }) => {

  return (
    <ProfileListWrap>
      <ProfileTitleWrap>Seoul Meet</ProfileTitleWrap>
      <ProfileSelectWrap>
        <DropDownText />
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