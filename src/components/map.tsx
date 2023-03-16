import Map, { Marker } from "react-map-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import maplibregl from "maplibre-gl";
import { useEffect, useState } from "react";

export default function MapLib() {
  const [geoData] = useState({ lat: 47.915006, lng: 106.9096304 });

  return (
    <Map
      mapLib={maplibregl}
      initialViewState={{
        longitude: geoData.lng,
        latitude: geoData.lat,
        zoom: 14,
      }}
      style={{ width: "100%", height: "100vh" }}
      mapStyle="https://api.maptiler.com/maps/streets-v2/style.json?key=OntcH0MLn0RqaAlHWrmv"
    >
      <Marker color="red" longitude={geoData.lng} latitude={geoData.lat} />
    </Map>
  );
}
