import React from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

function LocationMap(props) {
    console.log(props);
  return (
    <MapContainer center={props.center} zoom={props.zoom || 10} scrollWheelZoom={true}>
      <TileLayer
        attribution={
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }
        url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
      />
      <Marker position={props.center}></Marker>
    </MapContainer>
  );
}

export default LocationMap;
