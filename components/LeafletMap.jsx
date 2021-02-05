import dynamic from 'next/dynamic'
import Container from 'components/Container'
import React from 'react'

export default function LeafletMap({ latitude, longitude }) {
    const MapWithNoSSR = dynamic(() => import("./Map"), {
        ssr: false
    })

    return (
        <Container>
            <div id="map">
                <MapWithNoSSR lat={latitude} long={longitude}/>
            </div>
        </Container>
    )
}