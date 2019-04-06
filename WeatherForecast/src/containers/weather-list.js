import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

    renderWeather(cityData) {
        const temps = cityData.list.map((item) => item.main.temp);
        const pressures = cityData.list.map((item) => item.main.pressure);
        const humidities = cityData.list.map((item) => item.main.humidity);
        const { lat, lon } = cityData.city.coord;

        return (
            <tr key={ cityData.city.id }>
                <td><GoogleMap lat={ lat } long={ lon } /></td>
                <td><Chart data={ temps } height={ 120 } width={ 180 } colour={'red'} units='&deg;C'/></td>
                <td><Chart data={ pressures } height={ 120 } width={ 180 } colour={'black'} units='hPa' /></td>
                <td><Chart data={ humidities } height={ 120 } width={ 180 } colour={'blue'} units= '%' /></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.weather.map(cityData => this.renderWeather(cityData)) }
                </tbody>
            </table>
        );
    }
}

// function mapStateToProps(state) {
//     return {
//         weather: state.weather
//     }
// }

// ES6 shortform of the above
// - state property and props property have same name; weather
function mapStateToProps({ weather }) {
    return { weather };
}

export default connect (mapStateToProps)(WeatherList);