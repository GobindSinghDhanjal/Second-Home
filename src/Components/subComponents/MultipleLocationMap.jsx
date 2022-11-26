import React from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { useState } from "react";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

function MultipleLocationMap(props) {

  return !(props.center[0])?(<div>Loading</div>):(
    <MapContainer
    center={props.center[0]}
      zoom={props.zoom}
      scrollWheelZoom={true}
    >
      <TileLayer
        // url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
        url={"https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=IMBxDRtRVWm5cCGy2jmp"}
      />
      {props.center.map((center,i)=>{
        return (<Marker key={i} position={center}></Marker>)
      })}
      
    </MapContainer>
  );
}

export default MultipleLocationMap;
