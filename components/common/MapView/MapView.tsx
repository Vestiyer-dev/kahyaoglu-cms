import React from 'react'
import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api'


export default function MapView() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    })
    const center = React.useMemo(() => ({
        lat: 37.0350745,
        lng: 27.4322819
    }), [])

    if (!isLoaded) return <div>Yükleniyor...</div>




    return (



        <GoogleMap zoom={15} center={center} mapContainerStyle={{ "width": "100%", "height": "100%" }} >

            <MarkerF position={center} label="Kahyaoglu Peyzaj" title="Kahyaoglu Peyzaj">

            </MarkerF>
        </GoogleMap>


    )
}



