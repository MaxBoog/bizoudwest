import { MapContainer, Tooltip, Polygon, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility"



export default function BuurtMap() {
    
    const ECHS = [
        [52.365272, 4.873052], // rechtsboven
        [52.365483, 4.873592], // linksboven
        [52.362925, 4.875242], // rechtsonder
        [52.362770, 4.874837], // linksonder

    ]
    const OVERTOOM = [
        [52.362770, 4.874837], // linksboven
        [52.363786, 4.878490], // rechtsboven
        [52.363609, 4.878635], // rechtsonder
        [52.362646, 4.875133], // linksonder

    ]
    const SHK = [
        [52.363819, 4.878561], // rechtsboven
        [52.363963, 4.878937], // linksboven
        [52.362073, 4.881714], // rechtsonder
        [52.361850, 4.881258], // linksonder

    ]
    const color = "#e7335d"
    const weight = 1;

  return (
      
      
        <MapContainer
            center={[52.363543, 4.878098]}
            zoom={16}
            scrollWheelZoom={false}
            style={{ height: "500px", width: "100%", zIndex:1}}
        >
            <Polygon positions={ECHS} pathOptions={{color: color, weight: weight}}>
                <Tooltip>Eerste Constantijn Huygenstraat</Tooltip>
            </Polygon>
            <Polygon positions={OVERTOOM} pathOptions={{color: color, weight: weight}}>
                <Tooltip>Overtoom</Tooltip>
            </Polygon>
            <Polygon positions={SHK} pathOptions={{color: color, weight: weight}}>
                <Tooltip>Stadhouderskade</Tooltip>
            </Polygon>
            <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZGVsYmVsbG93ZWJkZXNpZ24iLCJhIjoiY2tpeW04cXp6MWVwMDJ4bXdpa2JzMHJxZiJ9.tVxY5Kycy5gsXGYQehsx9g`}
                attribution='Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>'
            />
            
        </MapContainer>
     
  )
}