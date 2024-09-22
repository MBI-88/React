import React from 'react'

// UI component

type GeoType = {
    latitude: number | null,
    longitude: number | null
}

const GeoUI: React.FC<GeoType> = ({ latitude, longitude }) => (
    <div>
        <h1>Geolocalization</h1>
        <h2>Latitude: <strong>{latitude}</strong></h2>
        <h2>Longitude: <strong>{longitude}</strong></h2>
    </div>

)

export default GeoUI