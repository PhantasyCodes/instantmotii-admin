import React, { useMemo } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const Map = () => {
  const containerStyle = {
    width: "100%",
    height: "100%",
  };
  const center = useMemo(() => ({ lat: 43.6532, lng: -79.3832 }), []);

  return (
    <GoogleMap zoom={10} center={center} mapTypeId="roadmap" mapContainerStyle={containerStyle}>
      <Marker position={center} />
    </GoogleMap>
  );
};

const MapPage = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: ""
  });

  console.log(loadError);

  if (loadError) return <div>"Error loading maps"</div>;

  if (!isLoaded) return <div>"Loading..."</div>;

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <Map />
    </div>
  );
};

export default MapPage;
