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
                Ström je aplikace využívající satelitní snímky k detekci úbytku lesů - v současné době máme pouze “proof of concept”, ale i na něm jde krásně pochopit co vytváříme. 
                Model lokalizuje a umisťuje na mapu katastru jak legání, tak nelegální kácení stromů. K tomu využívá satelitní snímky z programu Copernicus, které zpracovává a analyzuje úbytek lesa.
            </div>
            <Link
                class="btn btn-dark btn-lg"
                to="low-tatras"
                smooth={true}
                duration= {500}
            >
            Příklady analýzy
            </Link>
        </header>
        <div>
        <section id="low-tatras" class="sec low-tatras">
            <h2 class="map-header"> Nízké Tatry, Slovensko  </h2>
                <div class="map-desc">
                    {/*Volne dostupne satelitne data zo sluzby <a target="_blank" href="https://www.sentinel-hub.com/" style={{ color: 'Orange' }}>SentinelHub </a>
                    ako RGB snimky ci vegetacny index (NDVI) a ich porovnania v case za pomoci Image Processing technik pomahaju zistit
                    ako sa les menil v priebehu rokov. Detekcia prebieha na zaklade vyskumu "<a target="_blank" href="https://www.researchgate.net/publication/326729428_Tropical_deforestation_monitoring_using_NDVI_from_MODIS_satellite_a_case_study_in_Pahang_Malaysia" style={{ color: 'Orange' }}>
                     Tropical deforestation monitoring using NDVI from MODIS satellite: a case study in Pahang, Malaysia
                    </a>".*/}

                    Model bere data ze služby <a target="_blank" href="https://www.sentinel-hub.com/" style={{ color: 'Orange' }}>SentinelHub</a>
                    - RGB snímky a vegetační index (NDVI) a porovnává je v čase za pomocí pokročilých technik zpracování obrazu, které nám pomáhají pochopit, jak se les měnil v průběhu let. (přidat jaké roky jsou na obrázku) Samotná detekce proběhla na základě výzkumu <a target="_blank" href="https://www.researchgate.net/publication/326729428_Tropical_deforestation_monitoring_using_NDVI_from_MODIS_satellite_a_case_study_in_Pahang_Malaysia" style={{ color: 'Orange' }}>
                     "Tropical deforestation monitoring using NDVI from MODIS satellite: a case study in Pahang, Malaysia"</a>.
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
            Pokračuj
            </Link>
        </section>
        </div>

        <section id="sumava" class="sec sumava">
            <h2 class="map-header"> Šumava, Česko </h2>
            <div class="map-desc">
                Při využití volně dostupných katastrálních dat dokážeme detekovat, zdali výkácená oblast zasahuje do povolených katastrálních území. Na podobné detekce plánujeme využívat neuronové sítě, v budoucnu si umíme představit i kontaktování majitele pozemku, nebo další služby. 
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
            Pokračuj
            </Link>
        </section>

        <section id="decin" class="sec decin">
            <h2 class="map-header"> Dečín, Česko </h2>
            <div class="map-desc">
                {/*Dalsia menej popularna technika je vyuzitie dat z radarovych snimkov z orbitu zeme. Tieto snimky nam 
                na rovnych plochach ukazuju radarovy tien hranice lesa. Porovnanie medzi rokmi nam ukazuje
                ako sa hranica lesa posunula.
                Principy a dokazy su popisane
                vo vyskume s nazvom "<a target="_blank" href="https://www.researchgate.net/publication/326916715_Use_of_the_SAR_Shadowing_Effect_for_Deforestation_Detection_with_Sentinel-1_Time_Series">
                Use of the SAR Shadowing Effect for Deforestation Detection with Sentinel-1 Time Series
                </a>"*/}

                Další méně populární techika výpočtu změny objemu lesů spočívá ve využití radarových dat ze satelitů. Tyto snímky nám ukazují hranici lesa a tak můžeme porovnávat její pozici a případnou změnu v průběhu času. Princip opět vychází z publikovaného článku, tentokrát jde o <a target="_blank" href="https://www.researchgate.net/publication/326916715_Use_of_the_SAR_Shadowing_Effect_for_Deforestation_Detection_with_Sentinel-1_Time_Series">"Use of the SAR Shadowing Effect for Deforestation Detection with Sentinel-1 Time Series"</a>.
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
            Konec
            </Link>
        </section>

        <footer id="footer" className="App-footer"> 
            <div class="Footer-div">
                <h4>Open data - Zdroje</h4>
                
                Mapy od <a target="_blank" href="https://www.openstreetmap.org/#map=8/48.674/19.709">OpenStreetMap</a>
                <br />
                Satelitní data od <a target="_blank" href="https://scihub.copernicus.eu">Copernicus Open Access Hub</a> 
                <br />
                Katastrální území od <a target="_blank" href="todo">TODO</a>
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
