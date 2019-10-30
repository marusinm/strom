
import React from 'react';
import { Map as LeafletMap, TileLayer, ScaleControl, ImageOverlay, GeoJSON, LayersControl, Marker, Popup}  from 'react-leaflet';
import L from 'leaflet';
import './Map.css';
import jasnaNdviDiff from '../assets/images/jasna_ndvi.png';
import jasnaSat2015 from '../assets/images/jasna_sat_2015.png';
import jasnaSat2019 from '../assets/images/jasna_sat_2019.png';
import axios from 'axios';
import hash from 'object-hash';

// Center of the map
const lowTatrasCenter = [48.99031771831017, 19.523394741117954]
const lowTatrasPin = [48.997810425417505, 19.5234493073076]

const MyMarker = props => {
  const initMarker = ref => {
    if (ref) {
      ref.leafletElement.openPopup()
    }
  }
  return <Marker ref={initMarker} {...props}/>
}

class MapLowTatras extends React.Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.state = {
        currentPos: null
      };
    }

    handleClick(e){
      console.log("Click lat: " + e.latlng.lat + " long: " + e.latlng.lng);
      // this.setState({ currentPos: e.latlng });
    }

    render() {
        return (
            <div>
            <LeafletMap
                id='Map'
                center={lowTatrasCenter}
                zoom={13.5}
                attributionControl={true}
                zoomControl={true}
                onClick={this.handleClick}
              >

                <TileLayer url='http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'></TileLayer>

                <ScaleControl position='bottomleft' />

                <Marker position={lowTatrasPin}>
                  <Popup position={lowTatrasPin}>
                    Coordinates: <pre>{lowTatrasPin[0]}, {lowTatrasPin[1]}</pre>
                  </Popup>
                </Marker>

                <LayersControl position="topright">

                  <LayersControl.BaseLayer name="Nízké Tatry - RGB-Satelit 2015" checked>
                        <ImageOverlay
                        url={jasnaSat2015}
                        bounds={[
                          [48.96805013122616, 19.46547813713551],
                          [49.00685748937818, 19.57534141838551]
                        ]}
                        opacity="1"
                        >
                        </ImageOverlay>
                  </LayersControl.BaseLayer>
                  <LayersControl.BaseLayer name="Nízké Tatry - RGB-Satelit 2019">
                        <ImageOverlay
                        url={jasnaSat2019}
                        bounds={[
                          [48.96805013122616, 19.46547813713551],
                          [49.00685748937818, 19.57534141838551]
                        ]}
                        opacity="1"
                        >
                        </ImageOverlay>
                  </LayersControl.BaseLayer>
                  <LayersControl.Overlay name="Nízké Tatry - Úbytek lesa - rozdíl vegetačních indexů (NDVI)" checked>
                        <ImageOverlay
                        url={jasnaNdviDiff}
                        bounds={[
                          [48.96805013122616, 19.46547813713551],
                          [49.00685748937818, 19.57534141838551]
                        ]}
                        opacity="0.3"
                        >
                        </ImageOverlay>
                  </LayersControl.Overlay>
                </LayersControl>
            </LeafletMap>
            </div>
        )
    }
}

export default MapLowTatras;
