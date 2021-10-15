import React from "react";
import GoogleMap from "google-map-react";
import "../style/Map.css"

class Map extends React.Component {
  render() {
    return (
        <div className="map">
        <GoogleMap
        	bootstrapURLKeys = {{ key: /* KEY 삽입 */ }}>
          	defaultZoom={15}
          	defaultCenter={{ lat: 37.5, lng: 127 }}
        ></GoogleMap>
      </div>
    );
  }
}

export default Map;
