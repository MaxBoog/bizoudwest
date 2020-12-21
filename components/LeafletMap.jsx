import dynamic from 'next/dynamic'
import Container from 'components/Container'
import React from 'react'

export default function LeafletMap() {
    const MapWithNoSSR = dynamic(() => import("../components/Map"), {
        ssr: false
    })

    return (
        <Container>
            <div id="map">
                <MapWithNoSSR />
            </div>
        </Container>
    )
}