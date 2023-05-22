// import React, { useEffect } from "react";
// import Helmet from "react-helmet";
// import styles from "./styles.module.css";
// import Script from "react-load-script";
// import Map from "./Map";

// const KAKAO_API_KEY = "{154a9380e0789b6a09f594b74f134802}";

// const FindAddress = () => {

//   const [isKaKaoMapLoaded, setIsKaKaoMapLoaded] = React.useState(false);
//   const [map, setMap] = React.useState(null);
//   const [searchResult, setSearchResult] = React.useState({});

//   const handleScriptLoad = () => {
//     setIsKaKaoMapLoaded(true);
//   };

//   const handleScriptError = () => {
//     console.error("kakao map api error!");
//   };

//   useEffect(() => {
//     if (isKaKaoMapLoaded) {
//       const mapContainer = document.getElementById("map-container");
//       const options = {
//         center: new window.kakao.maps.LatLng(37.506502, 127.053617),
//         level: 8,
//       };

//       const map = new window.kakao.maps.Map(mapContainer, options);
//       setMap(map);

//       const marker = new window.kakao.maps.Marker({
//         // 지도 중심좌표에 마커를 생성합니다.
//         position: map.getCenter(),
//       });

//       // 지도에 마커를 표시합니다.
//       marker.setMap(map);
//     }
//   }, [isKaKaoMapLoaded]);

//   return (
//     <>
//       <Helmet>
//         <script
//           type="text/javascript"
//           src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_API_KEY}&autoload=false`}
//         />
//       </Helmet>

//       <Script url="//dapi.kakao.com/v2/maps/sdk.js" onLoad={handleScriptLoad} onError={handleScriptError} />

//       <div className={styles.container}>
//         <div id="map-container" className={styles.map}></div>
//       </div>
//     </>
//   );
// };

// export default FindAddress;