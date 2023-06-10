import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '300px',
    height: '300px',
    margin: '0 auto',
};

const center = {
    lat: 41.721328406057054, // Replace with the latitude of the desired address
    lng: 44.74276356828425, // Replace with the longitude of the desired address
};

const markerPosition = {
    lat: 41.721328406057054,  // Replace with the latitude of the desired address
    lng: 44.74276356828425, // Replace with the longitude of the desired address
};

function Contact() {
    return (
        <div style={containerStyle}>
            <LoadScript googleMapsApiKey="AIzaSyAy9ysUYLoa4zg1J1pyAAtH5IV8clI0_zc">
                <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
                    <Marker position={markerPosition} />
                </GoogleMap>
            </LoadScript>
        </div>
    );
}

export default Contact;
