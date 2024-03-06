import React from "react";
import NaverMapView from "../api/NaverMapView.jsx";

export default function Map() {
  let mapLat = "37.3595704";
  let mapLng = "127.105399";
  return (
    <div>
      <NaverMapView mapLat={mapLat} mapLng={mapLng}></NaverMapView>
    </div>
  );
}
