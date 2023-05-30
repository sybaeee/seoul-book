import { configureStore, createSlice } from '@reduxjs/toolkit'

let reduxData = [

  {
    "category": "영상",
    "content": "오늘 종로에서 같이 맥주한잔 하실분 구합니다 갬성있는 모임 원하시는분",
    "date": "2023-04-16",
    "nickname": "string",
    "en_dt": "2023-04-16",
    "person_num": 0,
    "place": "서울 구로구",
  }
  ,
  {
    "category": "영상",
    "content": "오늘 종로에서 같이 맥주한잔 하실분 구합니다 갬성있는 모임 원하시는분",
    "date": "2023-04-16",
    "nickname": "string",
    "en_dt": "2023-04-16",
    "person_num": 0,
    "place": "서울 구로구",
  }
  ,
  {
    "category": "영상",
    "content": "오늘 종로에서 같이 맥주한잔 하실분 구합니다 갬성있는 모임 원하시는분",
    "date": "2023-04-16",
    "nickname": "string",
    "en_dt": "2023-04-16",
    "person_num": 0,
    "place": "서울 구로구",
  }
  ,
  {
    "category": "영상",
    "content": "오늘 종로에서 같이 맥주한잔 하실분 구합니다 갬성있는 모임 원하시는분",
    "date": "2023-04-16",
    "nickname": "string",
    "en_dt": "2023-04-16",
    "person_num": 0,
    "place": "서울 구로구",
  }
  ,
  {
    "category": "영상",
    "content": "오늘 종로에서 같이 맥주한잔 하실분 구합니다 갬성있는 모임 원하시는분",
    "date": "2023-04-16",
    "nickname": "string",
    "en_dt": "2023-04-16",
    "person_num": 0,
    "place": "서울 구로구",
  }
  ,
  {
    "category": "영상",
    "content": "오늘 종로에서 같이 맥주한잔 하실분 구합니다 갬성있는 모임 원하시는분",
    "date": "2023-04-16",
    "nickname": "string",
    "en_dt": "2023-04-16",
    "person_num": 0,
    "place": "서울 구로구",
  }
  ,
  {
    "category": "영상",
    "content": "오늘 종로에서 같이 맥주한잔 하실분 구합니다 갬성있는 모임 원하시는분",
    "date": "2023-04-16",
    "nickname": "string",
    "en_dt": "2023-04-16",
    "person_num": 0,
    "place": "서울 구로구",
  }
  ,
  {
    "category": "영상",
    "content": "오늘 종로에서 같이 맥주한잔 하실분 구합니다 갬성있는 모임 원하시는분",
    "date": "2023-04-16",
    "nickname": "string",
    "en_dt": "2023-04-16",
    "person_num": 0,
    "place": "서울 구로구",
  }
  ,
  {
    "category": "영상",
    "content": "오늘 종로에서 같이 맥주한잔 하실분 구합니다 갬성있는 모임 원하시는분",
    "date": "2023-04-16",
    "nickname": "string",
    "en_dt": "2023-04-16",
    "person_num": 0,
    "place": "서울 구로구",
  }
]


let card = createSlice({
  name: 'card',
  initialState: reduxData
})

const store = configureStore({
  reducer: {
    card: card.reducer
  }
})

export default store;