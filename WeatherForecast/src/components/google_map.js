import React, { Component } from 'react';

class GoogleMap extends Component {
    componentDidMount() {
        new google.maps.Map( this.refs.gmap, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.long
            }
        });
    }

    render() {
        return (
            <div ref="gmap" />
        );
    }
}

export default GoogleMap;