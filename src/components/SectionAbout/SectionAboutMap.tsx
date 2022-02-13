import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { ThemeContext } from "styled-components";
import { useContext } from "react";
import Leaflet from "leaflet";
import mapPackage from "../../images/marker1.png";
import mapPackage1 from "../../images/marker2.png";
import { AboutMapWrapper } from "./SectionAboutMapElements";

const mapPackageIconLight = Leaflet.icon({
  iconUrl: mapPackage,
  iconSize: [70, 70],
  popupAnchor: [0, -30],
});

const mapPackageIconDark = Leaflet.icon({
  iconUrl: mapPackage1,
  iconSize: [70, 70],
  popupAnchor: [0, -30],
});

const SectionAboutMap = () => {
  const theme = useContext(ThemeContext);

  return (
    <AboutMapWrapper>
      <MapContainer center={[-22.8858684999199, -43.115057711814664]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        mapPackageIcon
        {theme.name === "first" ? (
          <Marker
            position={[-22.8858684999199, -43.115057711814664]}
            icon={mapPackageIconLight}
          >
            <Popup>
              Niterói <br /> Rio de Janeiro.
            </Popup>
          </Marker>
        ) : (
          <Marker
            position={[-22.8858684999199, -43.115057711814664]}
            icon={mapPackageIconDark}
          >
            <Popup>
              Niterói <br /> Rio de Janeiro.
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </AboutMapWrapper>
  );
};

export default SectionAboutMap;
