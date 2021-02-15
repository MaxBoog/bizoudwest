import Container from 'components/Container'
import dynamic from 'next/dynamic'
export default function LeafletMap() {
    const MapWithNoSSR = dynamic(() => import("./NoSSRBuurtMap"), {
        ssr: false
    })

    return (
        <Container>
            <div id="map">
                <MapWithNoSSR/>
            </div>
        </Container>
    )
}