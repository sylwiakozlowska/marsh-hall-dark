// import React from "react";
// import { Map, GoogleApiWrapper } from 'google-maps-react';
// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker,
// } from "react-google-maps";

// // const mapStyles = {
// //   width: '100%',
// //   height: '300px',
// // };

// // const GoogleMap = () => {
// //   return (
    
    
// //     );
// // };
import React from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
),


class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}


export default MyFancyComponent;


//   //   <Map

//   //   google={google}
//   //   zoom={14}
//   //   style={mapStyles}
//   //   initialCenter={{
//   //    lat: -1.2884,
//   //    lng: 36.8233
//   //   }}
//   // />
//   // <figure scr="https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyAz11B4GW_29EsqMIvJLG0Ay49CrFDvQ98'&center=51.52754580580255,-0.17938832875530553&zoom=15&format=png&maptype=roadmap&style=element:geometry%7Ccolor:0xf5f5f5&style=element:labels.icon%7Cvisibility:off&style=element:labels.text.fill%7Ccolor:0x616161&style=element:labels.text.stroke%7Ccolor:0xf5f5f5&style=feature:administrative.land_parcel%7Celement:labels.text.fill%7Ccolor:0xbdbdbd&style=feature:poi%7Celement:geometry%7Ccolor:0xeeeeee&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:poi.park%7Celement:geometry%7Ccolor:0xe5e5e5&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:road%7Celement:geometry%7Ccolor:0xffffff&style=feature:road.arterial%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:road.highway%7Celement:geometry%7Ccolor:0xdadada&style=feature:road.highway%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:transit.line%7Celement:geometry%7Ccolor:0xe5e5e5&style=feature:transit.station%7Celement:geometry%7Ccolor:0xeeeeee&style=feature:water%7Celement:geometry%7Ccolor:0xc9c9c9&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&size=480x360" width="100%" height="300px"/>
// //   );
// // };
// // export default GoogleApiWrapper({
// //   apiKey: 'AIzaSyAz11B4GW_29EsqMIvJLG0Ay49CrFDvQ98'
// // })(GoogleMap);


// // function GoogleMap() {
// //   // Styles a map in night mode.
// //   let 
// //   styledMapType = new google.maps.StyledMapType( {
// //     center: {lat: 40.674, lng: -73.945},
// //     zoom: 12,
// //     styles: [
// //         {
// //           "elementType": "geometry",
// //           "stylers": [
// //             {
// //               "color": "#f5f5f5"
// //             }
// //           ]
// //         },
// //         {
// //           "elementType": "labels.icon",
// //           "stylers": [
// //             {
// //               "visibility": "off"
// //             }
// //           ]
// //         },
// //         {
// //           "elementType": "labels.text.fill",
// //           "stylers": [
// //             {
// //               "color": "#616161"
// //             }
// //           ]
// //         },
// //         {
// //           "elementType": "labels.text.stroke",
// //           "stylers": [
// //             {
// //               "color": "#f5f5f5"
// //             }
// //           ]
// //         },
// //         {
// //           "featureType": "administrative.land_parcel",
// //           "elementType": "labels.text.fill",
// //           "stylers": [
// //             {
// //               "color": "#bdbdbd"
// //             }
// //           ]
// //         },
// //         {
// //           "featureType": "poi",
// //           "elementType": "geometry",
// //           "stylers": [
// //             {
// //               "color": "#eeeeee"
// //             }
// //           ]
// //         },
// //         {
// //           "featureType": "poi",
// //           "elementType": "labels.text.fill",
// //           "stylers": [
// //             {
// //               "color": "#757575"
// //             }
// //           ]
// //         },
// //         {
// //           "featureType": "poi.park",
// //           "elementType": "geometry",
// //           "stylers": [
// //             {
// //               "color": "#e5e5e5"
// //             }
// //           ]
// //         },
// //         {
// //           "featureType": "poi.park",
// //           "elementType": "labels.text.fill",
// //           "stylers": [
// //             {
// //               "color": "#9e9e9e"
// //             }
// //           ]
// //         },
// //         {
// //           "featureType": "road",
// //           "elementType": "geometry",
// //           "stylers": [
// //             {
// //               "color": "#ffffff"
// //             }
// //           ]
// //         },
// //         {
// //           "featureType": "road.arterial",
// //           "elementType": "labels.text.fill",
// //           "stylers": [
// //             {
// //               "color": "#757575"
// //             }
// //           ]
// //         },
// //         {
// //           "featureType": "road.highway",
// //           "elementType": "geometry",
// //           "stylers": [
// //             {
// //               "color": "#dadada"
// //             }
// //           ]
// //         },
// //         {
// //           "featureType": "road.highway",
// //           "elementType": "labels.text.fill",
// //           "stylers": [
// //             {
// //               "color": "#616161"
// //             }
// //           ]
// //         },
// //         {
// //           "featureType": "road.local",
// //           "elementType": "labels.text.fill",
// //           "stylers": [
// //             {
// //               "color": "#9e9e9e"
// //             }
// //           ]
// //         },
// //         {
// //           "featureType": "transit.line",
// //           "elementType": "geometry",
// //           "stylers": [
// //             {
// //               "color": "#e5e5e5"
// //             }
// //           ]
// //         },
// //         {
// //           "featureType": "transit.station",
// //           "elementType": "geometry",
// //           "stylers": [
// //             {
// //               "color": "#eeeeee"
// //             }
// //           ]
// //         },
// //         {
// //           "featureType": "water",
// //           "elementType": "geometry",
// //           "stylers": [
// //             {
// //               "color": "#c9c9c9"
// //             }
// //           ]
// //         },
// //         {
// //           "featureType": "water",
// //           "elementType": "labels.text.fill",
// //           "stylers": [
// //             {
// //               "color": "#9e9e9e"
// //             }
// //           ]
// //         }
// //       ]
// //     }
// //   )}


//   const MapWithAMarker = withScriptjs(withGoogleMap(props =>
//     <GoogleMap
//       defaultZoom={8}
//       defaultCenter={{ lat: -34.397, lng: 150.644 }}
//     >
//       <Marker
//         position={{ lat: -34.397, lng: 150.644 }}
//       />
//     </GoogleMap>
//   ));
  

  
// export default MapWithAMarker;