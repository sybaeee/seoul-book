import Layout from "@/components/common/layout"
import { MapPageContentsWrapper, MapPagePartWrapper, MapPageWrapper } from "@/styles/mapSelect.style"
import { useState } from "react"

const MapSelect = () => {

  const [modal, setModal] = useState(false);


  return (
    <>
      <MapPageWrapper>
        <MapPagePartWrapper>
          <MapPageContentsWrapper>강서구</MapPageContentsWrapper>
          <MapPageContentsWrapper>마포구</MapPageContentsWrapper>
          <MapPageContentsWrapper>서대문구</MapPageContentsWrapper>
          <MapPageContentsWrapper>은평구</MapPageContentsWrapper>
        </MapPagePartWrapper>
        <MapPagePartWrapper>
          <MapPageContentsWrapper>종로구</MapPageContentsWrapper>
          <MapPageContentsWrapper>중구</MapPageContentsWrapper>
          <MapPageContentsWrapper>용산구</MapPageContentsWrapper>
        </MapPagePartWrapper>
        <MapPagePartWrapper>
          <MapPageContentsWrapper>강북구</MapPageContentsWrapper>
          <MapPageContentsWrapper>성북구</MapPageContentsWrapper>
          <MapPageContentsWrapper>동대문구</MapPageContentsWrapper>
          <MapPageContentsWrapper>성동구</MapPageContentsWrapper>
          <MapPageContentsWrapper>광진구</MapPageContentsWrapper>
          <MapPageContentsWrapper>도봉구</MapPageContentsWrapper>
          <MapPageContentsWrapper>노원구</MapPageContentsWrapper>
          <MapPageContentsWrapper>중랑구</MapPageContentsWrapper>
        </MapPagePartWrapper>
        <MapPagePartWrapper>
          <MapPageContentsWrapper>양천구</MapPageContentsWrapper>
          <MapPageContentsWrapper>영등포구</MapPageContentsWrapper>
        </MapPagePartWrapper>
        <MapPagePartWrapper>
          <MapPageContentsWrapper>강동구</MapPageContentsWrapper>
          <MapPageContentsWrapper>송파구</MapPageContentsWrapper>
          <MapPageContentsWrapper>강남구</MapPageContentsWrapper>
          <MapPageContentsWrapper>서초구</MapPageContentsWrapper>
        </MapPagePartWrapper>
        <MapPagePartWrapper>
          <MapPageContentsWrapper>관악구</MapPageContentsWrapper>
          <MapPageContentsWrapper>동작구</MapPageContentsWrapper>
          <MapPageContentsWrapper>금천구</MapPageContentsWrapper>
          <MapPageContentsWrapper>구로구</MapPageContentsWrapper>
        </MapPagePartWrapper>
      </MapPageWrapper>
    </>
  )

}

export default MapSelect