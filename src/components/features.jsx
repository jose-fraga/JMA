import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '800px',
  height: '600px',
};

const center = {
  lat: 25.7617, // Centered around Miami
  lng: -80.1918,
};

const locations = [
  {
    name: "Aries Supermarket",
    position: { lat: 25.8576, lng: -80.2784 }
  },
  {
    name: "Bravo Supermarket",
    position: { lat: 25.6131, lng: -80.3677 }
  },
  {
    name: "Bravo Supermarket #2",
    position: { lat: 26.0032, lng: -80.2963 }
  },
  // Add all other locations in the same format
];

const Features = () => {
  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY_HERE">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
      >
        {locations.map((location, index) => (
          <Marker
            key={index}
            position={location.position}
            title={location.name}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Features;
