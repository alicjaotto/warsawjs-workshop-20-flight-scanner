import axios from 'axios';
import {AirportModel} from "../models/AirportModel";
import {FlightModel} from "../models/FlightModel";

export class AirportService {

    static API_URL = `http://warsawjs-flights-api.herokuapp.com`;

    static getAirportResources() {
        return axios.get(`${this.API_URL}/airports`)
            .then(response => {
                return response.data.map(item => new AirportModel(item));
            });
    }

    static fetchFlights(fromAirport, toAirport) {
        return axios.get(`${this.API_URL}/flights/01-01-2018/31-01-2018/${fromAirport.id}/${toAirport.id}`)
            .then(response => {
                return response.data.map(item => FlightModel.fromBackendData(item));
            });
        }
    }
