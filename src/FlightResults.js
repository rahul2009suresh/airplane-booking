import React from 'react';

function FlightResults({ results }) {
  return (
    <div>
      <h2>Search Results:</h2>
      {results.map((result, index) => (
        <div key={index}>
          <h3>{result.airline} - {result.flightNumber}</h3>
          <p>Departure Time: {result.departureTime}</p>
          <p>Arrival Time: {result.arrivalTime}</p>
          <p>Price: ${result.price}</p>
        </div>
      ))}
    </div>
  );
}

export default FlightResults;
