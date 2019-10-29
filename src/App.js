import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import Map from './map/Map';
import MapLowTatras from './map/MapLowTatras';
import MapSumava from './map/MapSumava';
import MapDecin from './map/MapDecin';
import './App.css';
import './map/Map.css';
import logo from './assets/images/logo-z-transparent.png';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header"> 
            <h1>Ström</h1>
            <div class="description">
                "Proof of Concept" detekcia rastuceho ubytku lesov vo svete.
                Model lokalizuje legalny aj nelegalny vyrubu stromov s vyuzitim
                volne dostupnych dat zo satelitov, katastra ci map. Tvrdenia su podlozene
                odkazom na studia a akekolvek financovanie projektu pomoze premenit model na verejnu a volne dostupnu sluzbu. 
            </div>
            <Link
                class="btn btn-dark btn-lg"
                to="low-tatras"
                smooth={true}
                duration= {500}
            >
            Viac
            </Link>
        </header>
        <div>
        <section id="low-tatras" class="sec low-tatras">
            <h2 class="map-header"> Nízske Tatry, SK </h2>
                <div class="map-desc">
                    Volne dostupne satelitne data zo sluzby <a target="_blank" href="https://www.sentinel-hub.com/" style={{ color: 'Orange' }}>SentinelHub </a>
                    ako RGB snimky ci vegetacny index (NDVI) a ich porovnania v case za pomoci Image Processing technik pomahaju zistit
                    ako sa les menil v priebehu rokov. Detekcia prebieha na zaklade vyskumu "<a target="_blank" href="https://www.researchgate.net/publication/326729428_Tropical_deforestation_monitoring_using_NDVI_from_MODIS_satellite_a_case_study_in_Pahang_Malaysia" style={{ color: 'Orange' }}>
                     Tropical deforestation monitoring using NDVI from MODIS satellite: a case study in Pahang, Malaysia
                    </a>".
                </div>
            <div class="map-wrapper">
                <MapLowTatras id="Map"/>
            </div>
            <Link
                class="btn btn-dark btn-lg"
                to="sumava"
                smooth={true}
                duration= {500}
            >
            Dalej
            </Link>
        </section>
        </div>

        <section id="sumava" class="sec sumava">
            <h2 class="map-header"> Šumava, ČR </h2>
            <div class="map-desc">
                Pri vyuziti volne dostupnych katastralnych dat dokazeme detekovat ci vyrub zasahoval do povolenych katastralnych uzemi.
                Na podobne detekcie planujeme v buducnosti vyuzivat aj neuronove siete.
            </div>
            <div class="map-wrapper">
                <MapSumava id="Map"/>
            </div>
            <Link
                class="btn btn-dark btn-lg"
                to="decin"
                smooth={true}
                duration= {500}
            >
            Dalej
            </Link>
        </section>

        <section id="decin" class="sec decin">
            <h2 class="map-header"> Dečín, ČR </h2>
            <div class="map-desc">
                Dalsia menej popularna technika je vyuzitie dat z radarovych snimkov z orbitu zeme. Tieto snimky nam 
                na rovnych plochach ukazuju radarovy tien hranice lesa. Porovnanie medzi rokmi nam ukazuje
                ako sa hranica lesa posunula.
                Principy a dokazy su popisane
                vo vyskume s nazvom "<a target="_blank" href="https://www.researchgate.net/publication/326916715_Use_of_the_SAR_Shadowing_Effect_for_Deforestation_Detection_with_Sentinel-1_Time_Series">
                Use of the SAR Shadowing Effect for Deforestation Detection with Sentinel-1 Time Series
                </a>"
            </div>
            <div class="map-wrapper">
                <MapDecin id="Map"/>
            </div>
            <Link
                class="btn btn-dark btn-lg"
                to="footer"
                smooth={true}
                duration= {500}
            >
            Koniec
            </Link>
        </section>

        <footer id="footer" className="App-footer"> 
            <div class="Footer-div">
                <h4>Zdroje open dat</h4>
                
                Mapy od <a target="_blank" href="https://www.openstreetmap.org/#map=8/48.674/19.709">OpenStreetMap</a>
                <br />
                Satelitne data od <a target="_blank" href="https://scihub.copernicus.eu">Copernicus Open Access Hub</a> 
                <br />
                Katasteralne uzemia od <a target="_blank" href="todo">TODO</a>
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
