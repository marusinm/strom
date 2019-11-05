import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import Map from './map/Map';
import MapLowTatras from './map/MapLowTatras';
import MapSumava from './map/MapSumava';
import MapDecin from './map/MapDecin';
import './App.css';
import './map/Map.css';
import logo from './assets/images/logo-z-transparent.png';
import filter_icon from './assets/images/filter_icon.png';
import en from './translation/en';
import cz from './translation/cz.json';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            translation: cz
        };
    }

    translate_en = () => {
        this.setState({translation: en});
    }

    translate_cs = () => {
        this.setState({translation: cz});   
    }

    render() {
        return (
          <div className="App">
            <header className="App-header"> 
                <div className="App-translate">
                <button className="btn btn-translate" type="button" onClick={this.translate_en}>EN</button>
                <button className="btn btn-translate" type="button" onClick={this.translate_cs}>CS</button>
                </div>
                <h1>Ström</h1>
                <div class="description">
                    {this.state.translation.intro.txt_intro1}
                    <br/><br/>
                    {this.state.translation.intro.txt_intro2}
                </div>
                <Link
                    class="btn btn-dark btn-lg"
                    to="low-tatras"
                    smooth={true}
                    duration= {500}
                >
                {this.state.translation.intro.btn_use_cases}
                </Link>
            </header>
            <div>
            <section id="low-tatras" class="sec low-tatras">
                <h2 class="map-header"> {this.state.translation.low_tatras.caption} </h2>
                    <div class="map-desc">
                         {this.state.translation.low_tatras.description1} <a target="_blank" href="https://www.sentinel-hub.com/" style={{ color: 'Orange' }}>SentinelHub</a> {this.state.translation.low_tatras.description2} <a target="_blank" href="https://www.researchgate.net/publication/326729428_Tropical_deforestation_monitoring_using_NDVI_from_MODIS_satellite_a_case_study_in_Pahang_Malaysia" style={{ color: 'Orange' }}>"Tropical deforestation monitoring using NDVI from MODIS satellite: a case study in Pahang, Malaysia"</a>.
                    </div>
                <div class="map-wrapper">
                    <MapLowTatras id="Map"/>
                    <div class="legend">
                        <img src={filter_icon} class="legend_image" />
                        <p class="legend_text">{this.state.translation.low_tatras.legend1_line1}<br/>{this.state.translation.low_tatras.legend1_line2}</p>
                        <div class="legend_square1"> </div>
                        <p class="legend_text">{this.state.translation.low_tatras.legend2_line1}<br/>{this.state.translation.low_tatras.legend2_line2}</p>
                    </div>
                </div>
                <Link
                    class="btn btn-dark btn-lg"
                    to="sumava"
                    smooth={true}
                    duration= {500}
                >
                {this.state.translation.low_tatras.btn_next}
                </Link>
            </section>
            </div>

            <section id="sumava" class="sec sumava">
                <h2 class="map-header"> {this.state.translation.sumava.caption} </h2>
                <div class="map-desc">
                    {this.state.translation.sumava.description1}
                </div>
                <div class="map-wrapper">
                    <MapSumava id="Map"/>
                    <div class="legend">
                        <img src={filter_icon} class="legend_image" />
                        <p class="legend_text">{this.state.translation.sumava.legend1_line1}<br/>{this.state.translation.sumava.legend1_line2}</p>
                        <div class="legend_square1"> </div>
                        <p class="legend_text">{this.state.translation.sumava.legend2_line1}<br/>{this.state.translation.sumava.legend2_line2}</p>
                        <div class="legend_square2"> </div>
                        <p class="legend_text">{this.state.translation.sumava.legend3_line1}<br/>{this.state.translation.sumava.legend3_line2}</p>
                    </div>
                </div>
                <Link
                    class="btn btn-dark btn-lg"
                    to="decin"
                    smooth={true}
                    duration= {500}
                >
                {this.state.translation.sumava.btn_next}
                </Link>
            </section>

            <section id="decin" class="sec decin">
                <h2 class="map-header"> {this.state.translation.decin.caption} </h2>
                <div class="map-desc">
                    {this.state.translation.decin.description1} <a target="_blank" href="https://www.researchgate.net/publication/326916715_Use_of_the_SAR_Shadowing_Effect_for_Deforestation_Detection_with_Sentinel-1_Time_Series">"Use of the SAR Shadowing Effect for Deforestation Detection with Sentinel-1 Time Series"</a>.
                </div>
                <div class="map-wrapper">
                    <MapDecin id="Map"/>
                    <div class="legend">
                        <img src={filter_icon} class="legend_image" />
                        <p class="legend_text">{this.state.translation.decin.legend1_line1}<br/>{this.state.translation.decin.legend1_line2}</p>
                        <div class="legend_square3"> </div>
                        <p class="legend_text">{this.state.translation.decin.legend2_line1}<br/>{this.state.translation.decin.legend2_line2}</p>
                    </div>
                </div>
                <Link
                    class="btn btn-dark btn-lg"
                    to="footer"
                    smooth={true}
                    duration= {500}
                >
                {this.state.translation.decin.btn_next}
                </Link>
            </section>

            <footer id="footer" className="App-footer"> 
                <div class="Footer-div">
                    <h4>{this.state.translation.footer.sources}</h4>
                    
                    {this.state.translation.footer.maps_from} <a target="_blank" href="https://www.openstreetmap.org/#map=8/48.674/19.709">OpenStreetMap</a>
                    <br />
                    {this.state.translation.footer.satellite_from} <a target="_blank" href="https://scihub.copernicus.eu">Copernicus Open Access Hub</a> 
                    <br />
                    {this.state.translation.footer.land_registry_from} <a target="_blank" href="https://geoportal.cuzk.cz/(S(kbu2aqdwswrucnikn5v1hm4m))/Default.aspx?mode=TextMeta&text=mapa.katastralni_uvod&side=mapy_KM">{this.state.translation.footer.cuzk}</a>
                </div>

                <div class="Footer-div">
                    Created by <a target="_blank" href="https://zaitra.io/">zaitra.io</a>
                    <br/>
                    <img src={logo} alt="Logo" class="Footer-logo" />
                </div>
            </footer>
          </div>
        );
    }
}

export default App;
