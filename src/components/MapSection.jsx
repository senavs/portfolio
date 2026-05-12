import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useLang } from '../context/LangContext'
import './MapSection.css'

L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

const BRASILIA = [-15.7801, -47.9292]

export default function MapSection() {
  const { t } = useLang()
  return (
    <div className="map-block">
      <h2 className="section-title">{t.about.mapTitle}<span>.</span></h2>
      <div className="map-card">
        <MapContainer center={BRASILIA} zoom={10} scrollWheelZoom={false} className="map-container">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={BRASILIA}>
            <Popup>Brasília, Brazil 📍</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  )
}
