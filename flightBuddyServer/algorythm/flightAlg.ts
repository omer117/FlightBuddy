
import axios from 'axios';

const firstFlightAxiosOptions: object = {
    method: 'GET',
    // url: 'https://flight-fare-search.p.rapidapi.com/v2/airport/departures',
    url: 'https://airlabs.co/api/v9/schedules'
    , params: {
        dep_iata: 'JFK',
        api_key: 'bf8abceb-d27d-45de-926b-7cdd696d053b',
        dep_estimated: "2023-08-13"
    },
};

const secondFlightAxiosOptions : object = {
    method: 'GET',
    // url: 'https://flight-fare-search.p.rapidapi.com/v2/airport/departures',
    url: 'https://airlabs.co/api/v9/schedules'
    , params: {
        dep_iata: 'LAX',
        api_key: 'bf8abceb-d27d-45de-926b-7cdd696d053b',
        dep_estimated: "2023-08-13"
    },
}



    // (async () => {
    //     try {
    //         const response = await axios.request(options);
    //         console.log(response.data);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // })()