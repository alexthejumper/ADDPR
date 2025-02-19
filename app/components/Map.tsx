"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { icon } from "leaflet"

const ICON = icon({
    iconUrl: "/images/marker.png",
    iconSize: [32, 32],
})

const Map = () => {
    return (
        <div className="map-container zindex-1" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "500px" }}>
            <MapContainer
                center={[-20.1840188, 57.4629735]}
                zoom={13}
                style={{ height: "100%", width: "100%" }}  // Ensure map fills the container
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker icon={ICON} position={[-20.1840188, 57.4629735]}>
                    <Popup>Our Church Location</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Map;
