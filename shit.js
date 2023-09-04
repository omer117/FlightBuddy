/* eslint-disable no-undef */
let arr = [];

        //   console.log('fuck');
        //   function generateRandomNumber() {
        //     const randomFraction = Math.random();
        //     const randomNumber = Math.floor(
        //       randomFraction * (670 - 230 + 1) + 230
        //     );
        //     return randomNumber;
        //   }
        //   const randomNumber = generateRandomNumber();
        //   let arr = [];
        //   let depData;
        //   let arrData;

        //   await axios
        //     .post("http://localhost:3004/getAllChosenAirportsInfo", {
        //       targetAirport: firstAirportFrom,
        //     })
        //     .then((response) => {
        //       depData = {
        //         airportCode: response.data.Orig,
        //         airportName: response.data.Name,
        //         airportCountry: response.data["country Name"],
        //       };
        //     });

        //   await axios
        //     .post("http://localhost:3004/getAllChosenAirportsInfo", {
        //       targetAirport: AirportTo,
        //     })
        //     .then((response) => {
        //       arrData = {
        //         airportCode: response.data.Orig,
        //         airportName: response.data.Name,
        //         airportCountry: response.data["country Name"],
        //       };
        //     });

        //   for (let i = 0; i < 10; i++) {
        //     arr.push({
        //       arrivalCode: {
        //         code: firstAirportFrom,
        //         city:'',
        //         label: arrData.airportName,
        //         country:{
        //           label:arrData.airportCountry,
        //         }
        //       },
        //       dateDeparture: departureDate,
        //       timeDeparture: departureDate,
        //       duration: {
        //         text: "!32h",
        //         numerical: "212",
        //       },
        //       departureAirport: {
        //         code: firstAirportFrom,
        //         city: 'sda',
        //         label: depData.airportName,
        //         country:{
        //           label:depData.airportCountry,
        //         }
        //       },
        //       flight_name: "!flightName",
        //       totals: {
        //         total: randomNumber,
        //       },
        //       currency: "USD",
        //     });
        //   }
        //   setFirstResults(arr);
        // }
        // }
        // )

function generateRandomNumber() {
    const randomFraction = Math.random();
    const randomNumber = Math.floor(randomFraction * (670 - 230 + 1) + 230);
    return randomNumber;
}
const randomNumber = generateRandomNumber();


{
    arrivalCode: {
        city: ArrCity;
        label: ArrCityLabel;
        country: ArrCityCountry;
        countryCode: ArrCityCountryCode;
    };
    dateDeparture: ArrDate;
    timeDeparture: ArrDateTime;
    duration: {
        text: DurationTime;
        numerical: DurationTimeNumerical;
    };
    depCode: {
        city: depCity;
        label: depCityLabel;
        country: depCityCountry;
        countryCode: depCityCountryCode;
    };
    flight_name: flightName;
    totals: {
        total: randomNumber
        currency: 'USD'
    }}
}
