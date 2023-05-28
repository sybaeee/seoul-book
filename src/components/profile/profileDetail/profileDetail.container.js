import ProfileDetailUI from "./profileDetail.presenter"

const data =
{
  "category": "영상",
  "content": "string",
  "date": "2023-04-16",
  "email": "string",
  "en_dt": "2023-04-16",
  "person_num": 0,
  "place": "서울 구로구",
  "preferential": "string",
  "qualifications_needed": "경력 1~10년",
  "recruitment": "string",
  "gender": "남자",
  "st_dt": "2023-04-16",
  "title": "성실한 사람으로 남고 싶습니다",
  "language": "영어",
  "personality": "밝고 쾌활한 성격을 가지고 있습니다 여러분들이랑 즐거운 시간을 보내고 싶습니다"
}


const ProfileDetail = () => {


  return (
    <>
      <ProfileDetailUI data={data} />
    </>
  )
}

export default ProfileDetail