import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import LoadingProgress from "./LoadingProgress";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

function LocationMap(props) {

  const center={
    lat:0,
    lng:0
  }


  return !(props.center)? (<LoadingProgress />) :(
    <MapContainer
      center={props.center}
      zoom={props.zoom || 10}
      scrollWheelZoom={true}
    >
      <TileLayer
        // url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
        url={"https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=IMBxDRtRVWm5cCGy2jmp"}
      />
      <Marker position={props.center}></Marker>
    </MapContainer>
  );
}

export default LocationMap;
