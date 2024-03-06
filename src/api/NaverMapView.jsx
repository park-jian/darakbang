import { Container as MapDiv, NaverMap, Marker } from "react-naver-maps";

export default function EmailLogin({ mapLat, mapLng }) {
  return (
    <>
      <MapDiv
        id="react-naver-map"
        style={{
          margin: "0 auto",
          width: "900px",
          height: "400px",
        }}
      >
        <NaverMap id="react-naver-maps" center={{ lat: mapLat, lng: mapLng }}>
          <Marker position={{ lat: mapLat, lng: mapLng }} />
        </NaverMap>
      </MapDiv>
    </>
  );
}
