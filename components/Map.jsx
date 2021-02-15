import { MapContainer, TileLayer,Marker,Popup, Tooltip } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility"


export default function Map({ lat, long, winkelnaam, winkeladres }) {

  return (
      
      
        <MapContainer
            center={[lat, long]}
            zoom={18}
            scrollWheelZoom={false}
            style={{ height: "400px", width: "100%", zIndex:1}}
        >
            <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZGVsYmVsbG93ZWJkZXNpZ24iLCJhIjoiY2tpeW04cXp6MWVwMDJ4bXdpa2JzMHJxZiJ9.tVxY5Kycy5gsXGYQehsx9g`}
                attribution='Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>'
            />
            <Marker position={[lat, long]} draggable={false} animate={true}>
                <Popup>
                    <span className="font-bold text-2xl">{winkelnaam}</span><br/><br/> 
                    {winkeladres}
                </Popup>
            </Marker>
        </MapContainer>
     
  )
}