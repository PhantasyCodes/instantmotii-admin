import React, { useMemo, useRef, useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import "./MapPage.css";
import Logo from "../components/Logo";
import MarkerSvg from "../assets/marker.svg";

const Map = () => {
  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const mapOptions = {
    draggableCursor: "default",
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
  }

  const initialCenter = useMemo(() => ({ lat: 43.6532, lng: -79.3832 }), []);
  const [center, setCenter] = useState({ lat: 43.6532, lng: -79.3832 });
  const mapRef = useRef();

  const handleAddMarker = (e) => {
    const newCenter = { lat: e.latLng.lat(), lng: e.latLng.lng() };
    setCenter(newCenter);
    mapRef.current.panTo(newCenter);
  };

  return (
    <GoogleMap
      zoom={10}
      center={initialCenter}
      mapTypeId="roadmap"
      mapContainerStyle={containerStyle}
      onClick={handleAddMarker}
      options={mapOptions}
      onLoad={(map) => {
        mapRef.current = map;
      }}
    >
      <Marker position={center} icon={MarkerSvg} />
    </GoogleMap>
  );
};

const MapPage = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDsxyZN5IT9vphJMyw0M9VGkxDE3liV0W8",
  });

  console.log(loadError);

  if (loadError) return <div>"Error loading maps"</div>;

  if (!isLoaded) return <div>"Loading..."</div>;

  return (
    <div style={{height: "100vh", width: "100vw"}}>
      <div className="logo">
        <Logo />
        <h1 className="title">InstantMotii</h1>
      </div>
      <Map />
    </div>
  );
};

export default MapPage;
