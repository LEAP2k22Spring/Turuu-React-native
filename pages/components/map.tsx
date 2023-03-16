"use client";
import { useState } from "react";
import "leaflet/dist/leaflet.css";
import "maplibre-gl/dist/maplibre-gl.css";
import Map, { NavigationControl, Marker } from "react-map-gl";
import maplibregl from "maplibre-gl";

export default function MapLib() {
  const [geoData] = useState({ lat: 37.33069543, lng: -122.02933632 });
  return (
    <Map
      mapLib={maplibregl}
      initialViewState={{
        longitude: geoData.lng,
        latitude: geoData.lat,
        zoom: 14,
      }}
      style={{ width: "80%", height: "100vh" }}
      mapStyle="https://api.maptiler.com/maps/streets-v2/style.json?key=OntcH0MLn0RqaAlHWrmv"
    ></Map>
  );
}
