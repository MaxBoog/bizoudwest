import dynamic from 'next/dynamic'
import Container from 'components/Container'
// import React from 'react'

export default function LeafletMap({ latitude, longitude, winkelnaam, winkeladres }) {
    const MapWithNoSSR = dynamic(() => import("./Map"), {
        ssr: false
    })

    return (
        <Container>
            <div id="map">
                <MapWithNoSSR winkeladres={winkeladres} winkelnaam={winkelnaam} lat={latitude} long={longitude}/>
            </div>
        </Container>
    )
}