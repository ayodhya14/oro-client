import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class MapView extends Component {
  static defaultProps = {
    center: {
      lat: 6.9273,
      lng: 79.8451
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAoVK6qUBH8BQRCAdyW08M6WkKXPiKu2cM" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={6.9273}
            lng={79.8451}
            text="ORO Jewellers"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default MapView;