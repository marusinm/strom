
import React from 'react';
import { Map as LeafletMap, TileLayer, ScaleControl, ImageOverlay, GeoJSON, LayersControl, Marker, Popup}  from 'react-leaflet';
import L from 'leaflet';
import './Map.css';
import decin_sentinel1 from '../assets/images/decin_sentinel1.png'
import decin_sat from '../assets/images/decin_sat.png'
import axios from 'axios';
import hash from 'object-hash';

// Center of the map (Low Tatras)
const sentinel1Pin = [50.812323241745226, 14.20409129932523]


const MyMarker = props => {
  const initMarker = ref => {
    if (ref) {
      ref.leafletElement.openPopup()
    }
  }
  return <Marker ref={initMarker} {...props}/>
}

class MapDecin extends React.Component {
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
                center={sentinel1Pin}
                zoom={14.5}
                attributionControl={true}
                zoomControl={true}
                onClick={this.handleClick}
              >

                <TileLayer url='http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'></TileLayer>

                <ScaleControl position='bottomleft' />

                <Marker position={sentinel1Pin}></Marker>

                <LayersControl position="topright">
                  <LayersControl.Overlay name="Dečín - Sentinel 1" checked>
                        <ImageOverlay
                        url={decin_sentinel1}
                        bounds={[
                          [50.80016643162019, 14.109926819801332],
                          [50.84462806151737, 14.233523011207582]
                        ]}
                        opacity="1"
                        >
                        </ImageOverlay>
                  </LayersControl.Overlay>

                  <LayersControl.Overlay name="Dečín - RGB-Satelit" checked>
                        <ImageOverlay
                        url={decin_sat}
                        bounds={[
                          [50.80016643162019, 14.109926819801332],
                          [50.84462806151737, 14.233523011207582]
                        ]}
                        opacity="0.8"
                        >
                        </ImageOverlay>
                  </LayersControl.Overlay>
                </LayersControl>
            </LeafletMap>
            </div>
        )
    }
}

export default MapDecin;
