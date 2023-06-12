import '../components/Contact.css'
import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '700px',
    height: '500px',
};

const center = {
    lat: 41.721328406057054,
    lng: 44.74276356828425,
};

const markerPosition = {
    lat: 41.721328406057054,
    lng: 44.74276356828425,
};

function Contact() {
    return (
        <div className='bigDiv'>
            <div style={containerStyle}>
                <LoadScript googleMapsApiKey="AIzaSyAy9ysUYLoa4zg1J1pyAAtH5IV8clI0_zc">
                    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
                        <Marker position={markerPosition} />
                    </GoogleMap>
                </LoadScript>
            </div>
            <div className='nextDiv'>
                <p className='styledContacts'>Address: Kalistrate Kutateladze 17, Tbilisi, Georgia.</p>
                <p className='styledContacts'>Phone Number: +995 588 345 543</p>
                <p className='styledContacts'>Email: restaurant@gmail.com</p>

            </div>


        </div>
    );
}

export default Contact;
