(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){},23:function(e,t,a){e.exports=a.p+"static/media/jasna_ndvi.c3bcd8e5.png"},24:function(e,t,a){e.exports=a.p+"static/media/jasna_sat_2015.d20b71d3.png"},25:function(e,t,a){e.exports=a.p+"static/media/jasna_sat_2019.55128dfd.png"},26:function(e,t,a){e.exports=a.p+"static/media/sumava_ndvi.d402a437.png"},27:function(e,t,a){e.exports=a.p+"static/media/satelite_2018.2aff946b.png"},28:function(e,t,a){e.exports=a.p+"static/media/decin_sentinel1.892781d9.png"},29:function(e,t,a){e.exports=a.p+"static/media/decin_sat.f62e89c0.png"},35:function(e,t,a){e.exports=a.p+"static/media/filter_icon.c82b0d08.png"},51:function(e,t,a){e.exports=a.p+"static/media/ice_cream.95dd12f9.svg"},52:function(e,t,a){e.exports=a.p+"static/media/liptov_termo.ba823f7a.png"},55:function(e,t,a){e.exports=a.p+"static/media/logo-z-transparent.e56d1080.png"},56:function(e,t,a){e.exports=a(93)},61:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(15),o=a.n(r),c=(a(61),a(9)),i=a(10),s=a(12),m=a(11),d=a(13),u=a(19),p=a(7),h=a(94),k=a(99),v=a(100),b=a(95),E=a(101),g=a(96),f=a(97),y=a(98),_=a(4),j=a.n(_),z=(a(18),a(52)),O=a.n(z),w=a(23),C=a.n(w),x=a(24),S=a.n(x),M=a(25),D=a.n(M),N=a(26),I=a.n(N),P=a(27),T=a.n(P),B=a(28),R=a.n(B),A=a(29),G=a.n(A),L=a(16),K=a.n(L),q=a(17),F=a.n(q),U=[48.997810425417505,19.5234493073076],V=[49.06852761680775,19.653044342994693],H=[48.997810425417505,19.5234493073076],W=[49.13588158999327,13.462639376521112],J=[49.10290544858402,13.483424400910737],Z=[50.812323241745226,14.20409129932523],$=new j.a.Icon({iconUrl:a(51),iconRetinaUrl:a(51),iconAnchor:[5,55],iconSize:[25,55]}),Q=(l.a.Component,[48.99031771831017,19.523394741117954]),X=[48.997810425417505,19.5234493073076],Y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(p.a)(Object(p.a)(a))),a.state={currentPos:null},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(e){console.log("Click lat: "+e.latlng.lat+" long: "+e.latlng.lng)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(k.a,{id:"Map",center:Q,zoom:13.5,attributionControl:!0,zoomControl:!0,onClick:this.handleClick},l.a.createElement(v.a,{url:"http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"}),l.a.createElement(b.a,{position:"bottomleft"}),l.a.createElement(h.a,{position:X},l.a.createElement(E.a,{position:X},"Coordinates: ",l.a.createElement("pre",null,X[0],", ",X[1]))),l.a.createElement(g.a,{position:"topright"},l.a.createElement(g.a.BaseLayer,{name:"N\xedzk\xe9 Tatry - RGB-Satelit 2015",checked:!0},l.a.createElement(f.a,{url:S.a,bounds:[[48.96805013122616,19.46547813713551],[49.00685748937818,19.57534141838551]],opacity:"1"})),l.a.createElement(g.a.BaseLayer,{name:"N\xedzk\xe9 Tatry - RGB-Satelit 2019"},l.a.createElement(f.a,{url:D.a,bounds:[[48.96805013122616,19.46547813713551],[49.00685748937818,19.57534141838551]],opacity:"1"})),l.a.createElement(g.a.Overlay,{name:"N\xedzk\xe9 Tatry - \xdabytek lesa - rozd\xedl vegeta\u010dn\xedch index\u016f (NDVI)",checked:!0},l.a.createElement(f.a,{url:C.a,bounds:[[48.96805013122616,19.46547813713551],[49.00685748937818,19.57534141838551]],opacity:"0.3"})))))}}]),t}(l.a.Component),ee=[49.13588158999327,13.462639376521112],te=[49.10290544858402,13.483424400910737],ae=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(p.a)(Object(p.a)(a))),a.state={currentPos:null},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(e){console.log("Click lat: "+e.latlng.lat+" long: "+e.latlng.lng)}},{key:"componentDidMount",value:function(){var e=this;K.a.get("geojson/KU_Sumava_WGS.geojson").then(function(t){e.setState({kataster:t.data})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(k.a,{id:"Map",center:te,zoom:13,attributionControl:!0,zoomControl:!0,onClick:this.handleClick},l.a.createElement(v.a,{url:"http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"}),l.a.createElement(b.a,{position:"bottomleft"}),l.a.createElement(h.a,{position:ee}),l.a.createElement(h.a,{position:te}),l.a.createElement(g.a,{position:"topright"},l.a.createElement(g.a.Overlay,{name:"\u0160umava - RGB-Satelit 201\xed"},l.a.createElement(f.a,{url:T.a,bounds:[[48.79827046389008,13.138275146484377],[49.14578361775004,14.127044677734377]],opacity:"1"})),l.a.createElement(g.a.Overlay,{name:"\u0160umava - \xdabytek lesa - rozd\xedl vegeta\u010dn\xedch index\u016f (NDVI)",checked:!0},l.a.createElement(f.a,{url:I.a,bounds:[[48.79827046389008,13.138275146484377],[49.14578361775004,14.127044677734377]],opacity:"1"})),l.a.createElement(g.a.Overlay,{name:"\u0160umava - katastr\xe1ln\xed \xfazem\xed",checked:!0},this.state&&this.state.kataster&&l.a.createElement(y.a,{key:F()({a:10*Math.random()}),data:this.state?this.state.kataster:null,onEachFeature:this.onEachFeature})))))}}]),t}(l.a.Component),ne=[50.812323241745226,14.20409129932523],le=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(p.a)(Object(p.a)(a))),a.state={currentPos:null},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(e){console.log("Click lat: "+e.latlng.lat+" long: "+e.latlng.lng)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(k.a,{id:"Map",center:ne,zoom:14.5,attributionControl:!0,zoomControl:!0,onClick:this.handleClick},l.a.createElement(v.a,{url:"http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"}),l.a.createElement(b.a,{position:"bottomleft"}),l.a.createElement(h.a,{position:ne}),l.a.createElement(g.a,{position:"topright"},l.a.createElement(g.a.Overlay,{name:"De\u010d\xedn - Sentinel 1",checked:!0},l.a.createElement(f.a,{url:R.a,bounds:[[50.80016643162019,14.109926819801332],[50.84462806151737,14.233523011207582]],opacity:"1"})),l.a.createElement(g.a.Overlay,{name:"De\u010d\xedn - RGB-Satelit",checked:!0},l.a.createElement(f.a,{url:G.a,bounds:[[50.80016643162019,14.109926819801332],[50.84462806151737,14.233523011207582]],opacity:"0.8"})))))}}]),t}(l.a.Component),re=(a(92),a(55)),oe=a.n(re),ce=a(35),ie=a.n(ce),se=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("h1",null,"Str\xf6m"),l.a.createElement("div",{class:"description"},"Str\xf6m je aplikace vyu\u017e\xedvaj\xedc\xed satelitn\xed sn\xedmky k detekci \xfabytku les\u016f - v sou\u010dasn\xe9 dob\u011b m\xe1me pouze \u201cproof of concept\u201d, ale i na n\u011bm jde kr\xe1sn\u011b pochopit co vytv\xe1\u0159\xedme. C\xedlem je vytvo\u0159it ve\u0159ejn\xfd a zdarma voln\u011b dostupn\xfd produkt.",l.a.createElement("br",null),l.a.createElement("br",null),"Model lokalizuje jak leg\xe1n\xed, tak neleg\xe1ln\xed k\xe1cen\xed strom\u016f. K tomu vyu\u017e\xedv\xe1 satelitn\xed sn\xedmky z programu Copernicus, kter\xe9 zpracov\xe1v\xe1 a analyzuje \xfabytek lesa - v p\u0159\xedpad\u011b dostupn\xfdch katastr\xe1ln\xedch dat (jako je to nap\u0159\xedklad v \u010cR) pak um\xedme \xfabytek za\u0159adit do kontextu katastr\xe1ln\xed mapy."),l.a.createElement(u.Link,{class:"btn btn-dark btn-lg",to:"low-tatras",smooth:!0,duration:500},"P\u0159\xedklady anal\xfdzy")),l.a.createElement("div",null,l.a.createElement("section",{id:"low-tatras",class:"sec low-tatras"},l.a.createElement("h2",{class:"map-header"}," N\xedzk\xe9 Tatry, Slovensko  "),l.a.createElement("div",{class:"map-desc"},"Model bere data ze slu\u017eby ",l.a.createElement("a",{target:"_blank",href:"https://www.sentinel-hub.com/",style:{color:"Orange"}},"SentinelHub")," - RGB sn\xedmky a vegeta\u010dn\xed index (NDVI) a porovn\xe1v\xe1 je v \u010dase za pomoc\xed pokro\u010dil\xfdch technik zpracov\xe1n\xed obrazu, kter\xe9 n\xe1m pom\xe1haj\xed pochopit, jak se les m\u011bnil v pr\u016fb\u011bhu let 2015 a\u017e 2019. Samotn\xe1 detekce prob\u011bhla na z\xe1klad\u011b v\xfdzkumu ",l.a.createElement("a",{target:"_blank",href:"https://www.researchgate.net/publication/326729428_Tropical_deforestation_monitoring_using_NDVI_from_MODIS_satellite_a_case_study_in_Pahang_Malaysia",style:{color:"Orange"}},'"Tropical deforestation monitoring using NDVI from MODIS satellite: a case study in Pahang, Malaysia"'),"."),l.a.createElement("div",{class:"map-wrapper"},l.a.createElement(Y,{id:"Map"}),l.a.createElement("div",{class:"legend"},l.a.createElement("img",{src:ie.a,class:"legend_image"}),l.a.createElement("p",{class:"legend_text"},"Interaktivn\xed ",l.a.createElement("br",null)," filtr vrstev"),l.a.createElement("div",{class:"legend_square1"}," "),l.a.createElement("p",{class:"legend_text"},"\xdabytek lesa mezi ",l.a.createElement("br",null)," lety 2015 a\u017e 2019"))),l.a.createElement(u.Link,{class:"btn btn-dark btn-lg",to:"sumava",smooth:!0,duration:500},"Pokra\u010duj"))),l.a.createElement("section",{id:"sumava",class:"sec sumava"},l.a.createElement("h2",{class:"map-header"}," \u0160umava, \u010cesko "),l.a.createElement("div",{class:"map-desc"},"P\u0159i vyu\u017eit\xed voln\u011b dostupn\xfdch katastr\xe1ln\xedch dat dok\xe1\u017eeme detekovat, zdali v\xfdk\xe1cen\xe1 oblast zasahuje do povolen\xfdch katastr\xe1ln\xedch \xfazem\xed. Na podobn\xe9 detekce pl\xe1nujeme vyu\u017e\xedvat neuronov\xe9 s\xedt\u011b, v budoucnu si um\xedme p\u0159edstavit i kontaktov\xe1n\xed majitele pozemku, nebo dal\u0161\xed slu\u017eby."),l.a.createElement("div",{class:"map-wrapper"},l.a.createElement(ae,{id:"Map"}),l.a.createElement("div",{class:"legend"},l.a.createElement("img",{src:ie.a,class:"legend_image"}),l.a.createElement("p",{class:"legend_text"},"Interaktivn\xed ",l.a.createElement("br",null)," filtr vrstev"),l.a.createElement("div",{class:"legend_square1"}," "),l.a.createElement("p",{class:"legend_text"},"\xdabytek lesa mezi ",l.a.createElement("br",null)," lety 2015 az 2019"),l.a.createElement("div",{class:"legend_square2"}," "),l.a.createElement("p",{class:"legend_text"},"Hranice ",l.a.createElement("br",null)," katastr\xe1ln\xedho pozemku"))),l.a.createElement(u.Link,{class:"btn btn-dark btn-lg",to:"decin",smooth:!0,duration:500},"Pokra\u010duj")),l.a.createElement("section",{id:"decin",class:"sec decin"},l.a.createElement("h2",{class:"map-header"}," De\u010d\xedn, \u010cesko "),l.a.createElement("div",{class:"map-desc"},"Dal\u0161\xed m\xe9n\u011b popul\xe1rn\xed techika v\xfdpo\u010dtu zm\u011bny objemu les\u016f spo\u010d\xedv\xe1 ve vyu\u017eit\xed radarov\xfdch dat ze satelit\u016f. Tyto sn\xedmky n\xe1m ukazuj\xed hranici lesa a tak m\u016f\u017eeme porovn\xe1vat jej\xed pozici a p\u0159\xedpadnou zm\u011bnu v pr\u016fb\u011bhu \u010dasu. Princip op\u011bt vych\xe1z\xed z publikovan\xe9ho \u010dl\xe1nku, tentokr\xe1t jde o ",l.a.createElement("a",{target:"_blank",href:"https://www.researchgate.net/publication/326916715_Use_of_the_SAR_Shadowing_Effect_for_Deforestation_Detection_with_Sentinel-1_Time_Series"},'"Use of the SAR Shadowing Effect for Deforestation Detection with Sentinel-1 Time Series"'),"."),l.a.createElement("div",{class:"map-wrapper"},l.a.createElement(le,{id:"Map"}),l.a.createElement("div",{class:"legend"},l.a.createElement("img",{src:ie.a,class:"legend_image"}),l.a.createElement("p",{class:"legend_text"},"Interaktivn\xed ",l.a.createElement("br",null)," filtr vrstev"),l.a.createElement("div",{class:"legend_square3"}," "),l.a.createElement("p",{class:"legend_text"},"Posunut\xed radarov\xe9ho st\xednu",l.a.createElement("br",null)," lesa v pr\u016fb\u011bhu let 2015 a\u017e 2019"))),l.a.createElement(u.Link,{class:"btn btn-dark btn-lg",to:"footer",smooth:!0,duration:500},"Konec")),l.a.createElement("footer",{id:"footer",className:"App-footer"},l.a.createElement("div",{class:"Footer-div"},l.a.createElement("h4",null,"Open data - Zdroje"),"Mapy od ",l.a.createElement("a",{target:"_blank",href:"https://www.openstreetmap.org/#map=8/48.674/19.709"},"OpenStreetMap"),l.a.createElement("br",null),"Satelitn\xed data od ",l.a.createElement("a",{target:"_blank",href:"https://scihub.copernicus.eu"},"Copernicus Open Access Hub"),l.a.createElement("br",null),"Katastr\xe1ln\xed \xfazem\xed od ",l.a.createElement("a",{target:"_blank",href:"https://geoportal.cuzk.cz/(S(kbu2aqdwswrucnikn5v1hm4m))/Default.aspx?mode=TextMeta&text=mapa.katastralni_uvod&side=mapy_KM"},"Geoport\xe1l \u010c\xdaZK")),l.a.createElement("div",{class:"Footer-div"},"Created by ",l.a.createElement("a",{target:"_blank",href:"https://zaitra.io/"},"zaitra.io"),l.a.createElement("br",null),l.a.createElement("img",{src:oe.a,alt:"Logo",class:"Footer-logo"}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[56,1,2]]]);
//# sourceMappingURL=main.58531141.chunk.js.map