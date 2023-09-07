import ResultComponent from "../../components/ResultComponent/resultComponent";

export default function LastResultPage(props) {
  console.log(props.data);

  const chosenFlights = props.data;
  const chosenFlightsJSX = chosenFlights.map((flight) => {
    return <ResultComponent resultData={flight} />;
  });

  return <>
  {chosenFlightsJSX.length > 0 ? chosenFlightsJSX : <></>}
  </>;
}
