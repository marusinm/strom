
import React from 'react';
import { Map as LeafletMap, TileLayer, ScaleControl, ImageOverlay, GeoJSON, LayersControl, Marker, Popup}  from 'react-leaflet';
import L from 'leaflet';
import './Map.css';
import sumavaNdviDiff from '../assets/images/sumava_ndvi.png';
import satellite2018 from '../assets/images/satelite_2018.png';
import axios from 'axios';
import hash from 'object-hash';

// Center of the map 
const sumavaPin1 = [49.13588158999327, 13.462639376521112]
const sumavaPin2 = [49.10290544858402, 13.483424400910737]


const MyMarker = props => {
  const initMarker = ref => {
    if (ref) {
      ref.leafletElement.openPopup()
    }
  }
  return <Marker ref={initMarker} {...props}/>
}

class MapSumava extends React.Component {
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
                center={sumavaPin2}
                zoom={13}
                attributionControl={true}
                zoomControl={true}
                onClick={this.handleClick}
              >

                <TileLayer url='http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'></TileLayer>

                <ScaleControl position='bottomleft' />

                <Marker position={sumavaPin1}></Marker>
                <Marker position={sumavaPin2}></Marker>

                <LayersControl position="topright">
                  <LayersControl.Overlay name="Šumava - RGB-Satelit 201í" >
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
                  <LayersControl.Overlay name="Šumava - Úbytek lesa - rozdíl vegetačních indexů (NDVI)" checked>
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

                  <LayersControl.Overlay name="Šumava - katastrální území" checked>
                    { this.state && this.state.kataster &&
                      <GeoJSON key={hash({a: Math.random() * 10})} data={this.state ? this.state.kataster : null}
                      onEachFeature={this.onEachFeature}/>
                    }
                  </LayersControl.Overlay>
                </LayersControl>
            </LeafletMap>
            </div>
        )
    }
}

export default MapSumava;
