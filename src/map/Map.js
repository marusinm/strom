import React from 'react';
import { Map as LeafletMap, TileLayer, ScaleControl, ImageOverlay, GeoJSON, LayersControl, Marker, Popup}  from 'react-leaflet';
import L from 'leaflet';
import './Map.css';
import liptovTermo from '../assets/images/liptov_termo.png';
import jasnaNdviDiff from '../assets/images/jasna_ndvi.png';
import jasnaSat2015 from '../assets/images/jasna_sat_2015.png';
import jasnaSat2019 from '../assets/images/jasna_sat_2019.png';
import sumavaNdviDiff from '../assets/images/sumava_ndvi.png';
import satellite2018 from '../assets/images/satelite_2018.png';
import decin_sentinel1 from '../assets/images/decin_sentinel1.png'
import decin_sat from '../assets/images/decin_sat.png'
import axios from 'axios';
import hash from 'object-hash';

// Center of the map (Low Tatras)
const center = [49.009662, 19.578817]
const lowTatrasCenter = [48.997810425417505, 19.5234493073076]
const termoPin = [49.06852761680775, 19.653044342994693]
const lowTatrasPin = [48.997810425417505, 19.5234493073076]
const sumavaPin1 = [49.13588158999327, 13.462639376521112]
const sumavaPin2 = [49.10290544858402, 13.483424400910737]
const sentinel1Pin = [50.812323241745226, 14.20409129932523]


const MyMarker = props => {
  const initMarker = ref => {
    if (ref) {
      ref.leafletElement.openPopup()
    }
  }
  return <Marker ref={initMarker} {...props}/>
}

const iconIceCream = new L.Icon({
    iconUrl: require('../assets/images/ice_cream.svg'),
    iconRetinaUrl: require('../assets/images/ice_cream.svg'),
    // iconAnchor: null,
    // popupAnchor: null,
    // shadowUrl: null,
    // shadowSize: null,
    // shadowAnchor: null,
    iconAnchor: [5, 55],
    iconSize: [25, 55],
});

class Map extends React.Component {
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

    componentDidMount() {
        axios.get('geojson/KU_Sumava_WGS.geojson')
            .then(response => {
                this.setState({
                    kataster: response.data
                });
            })
            .catch(function (error) {
                console.log(error);
        });
    }

    render() {
        return (
            <div>
            <LeafletMap
                id='Map'
                center={lowTatrasCenter}
                zoom={15.5}
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
                <Marker position={sumavaPin1}></Marker>
                <Marker position={sumavaPin2}></Marker>
                <Marker position={sentinel1Pin}></Marker>
                <Marker position={termoPin} icon={iconIceCream}></Marker>

                <LayersControl position="topright">

                  <LayersControl.Overlay name="Low Tatras Sat 2019">
                        <ImageOverlay
                        url={jasnaSat2019}
                        bounds={[
                          [48.96805013122616, 19.46547813713551],
                          [49.00685748937818, 19.57534141838551]
                        ]}
                        opacity="1"
                        >
                        </ImageOverlay>
                  </LayersControl.Overlay>
                  <LayersControl.Overlay name="Low Tatras Sat 2015" checked>
                        <ImageOverlay
                        url={jasnaSat2015}
                        bounds={[
                          [48.96805013122616, 19.46547813713551],
                          [49.00685748937818, 19.57534141838551]
                        ]}
                        opacity="1"
                        >
                        </ImageOverlay>
                  </LayersControl.Overlay>
                  <LayersControl.Overlay name="Low Tatras vegetation index NDVI" checked>
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
                  <LayersControl.Overlay name="Sumava sat 2018" checked>
                        <ImageOverlay
                        url={satellite2018}
                        bounds={[
                          [48.79827046389008, 13.138275146484377],
                          [49.14578361775004, 14.127044677734377]
                        ]}
                        opacity="1"
                        >
                        </ImageOverlay>
                  </LayersControl.Overlay>
                  <LayersControl.Overlay name="Sumava vegetation index NDVI" checked>
                        <ImageOverlay
                        url={sumavaNdviDiff}
                        bounds={[
                          [48.79827046389008, 13.138275146484377],
                          [49.14578361775004, 14.127044677734377]
                        ]}
                        opacity="1"
                        >
                        </ImageOverlay>
                  </LayersControl.Overlay>

                  <LayersControl.Overlay name="Sumava land registry">
                    { this.state && this.state.kataster &&
                      <GeoJSON key={hash({a: Math.random() * 10})} data={this.state ? this.state.kataster : null}
                      onEachFeature={this.onEachFeature}/>
                    }
                  </LayersControl.Overlay>

                  <LayersControl.Overlay name="Liptov termo">
                        <ImageOverlay
                        url={liptovTermo}
                        bounds={[
                          [49.00587592924053, 19.352406263351444],
                          [49.14980396275474, 19.791859388351444]
                        ]}
                        opacity="0.8"
                        >
                        </ImageOverlay>
                  </LayersControl.Overlay>

                  <LayersControl.Overlay name="Decin Sentinel 1" checked>
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

                  <LayersControl.Overlay name="Decin Sat" checked>
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

export default Map;
