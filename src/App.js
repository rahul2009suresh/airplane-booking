import React, { useState } from 'react';
import FlightResults from './FlightResults';

function App() {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [flightResults, setFlightResults] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Here you can fetch the data from a backend API and update the flightResults state
    // For demonstration purposes, let's just set some sample data
    const sampleData = [
      {
        airline: 'Rahul Flight Services',
        flightNumber: 'RF123',
        departureTime: '8:00 AM',
        arrivalTime: '10:30 AM',
        price: 250
      },
      {
        airline: 'Rahul Flight Services',
        flightNumber: 'RF456',
        departureTime: '1:00 PM',
        arrivalTime: '3:30 PM',
        price: 350
      }
    ];

    setFlightResults(sampleData);
  };

  return (
    <div className="App">
      <h1>Rahul Flight Services</h1>
      <form onSubmit={handleFormSubmit}>
        <label>From:</label>
        <input type="text" value={fromCity} onChange={(e) => setFromCity(e.target.value)} required />

        <label>To:</label>
        <input type="text" value={toCity} onChange={(e) => setToCity(e.target.value)} required />

        <label>Departure Date:</label>
        <input type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} required />

        <label>Return Date:</label>
        <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />

        <label>Adults:</label>
        <input type="number" value={adults} onChange={(e) => setAdults(e.target.value)} required />

        <label>Children:</label>
        <input type="number" value={children} onChange={(e) => setChildren(e.target.value)} />

        <button type="submit">Search Flights</button>
      </form>

      {flightResults && <FlightResults results={flightResults} />}
    </div>
  );
}

export default App;
