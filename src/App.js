import React, { useState } from 'react';
import './App.css';

function App() {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const results = generateSearchResults(adults, children, fromDate, toDate, fromLocation, toLocation);
    setSearchResults(results);
  };

  const generateSearchResults = (numAdults, numChildren, fromDate, toDate, fromLocation, toLocation) => {
    // Generate random search results based on user input
    const airlines = ["Delta", "United", "American", "Southwest", "Alaska"];
    const results = [];

    for (let i = 0; i < 5; i++) {
      const airline = airlines[i];
      const numSeats = Math.floor(Math.random() * (numAdults + numChildren)) + 1;
      const pricePerSeat = Math.floor(Math.random() * 300) + 100;
      const totalPrice = numSeats * pricePerSeat;

      results.push({
        airline: airline,
        numSeats: numSeats,
        pricePerSeat: pricePerSeat,
        totalPrice: totalPrice
      });
    }

    return results;
  }

  return (
    <div className="App">
      <h1>Rahul Flight Services</h1>
      <div className="search-form">
        <label>
          Number of Adults:
          <input type="number" value={adults} onChange={(e) => setAdults(e.target.value)} />
        </label>
        <label>
          Number of Children:
          <input type="number" value={children} onChange={(e) => setChildren(e.target.value)} />
        </label>
        <label>
          From:
          <input type="text" value={fromLocation} onChange={(e) => setFromLocation(e.target.value)} />
        </label>
        <label>
          To:
          <input type="text" value={toLocation} onChange={(e) => setToLocation(e.target.value)} />
        </label>
        <label>
          From Date:
          <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
        </label>
        <label>
          To Date:
          <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
        </label>
        <button onClick={handleSearch}>Search</button>
      </div>
      {searchResults.length > 0 &&
        <div className="search-results">
          <h2>Search Results:</h2>
          <table>
            <thead>
              <tr>
                <th>Airline</th>
                <th>Number of Seats</th>
                <th>Price per Seat</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {searchResults.map((result, index) => (
                <tr key={index}>
                  <td>{result.airline}</td>
                  <td>{result.numSeats}</td>
                  <td>{result.pricePerSeat}</td>
                  <td>{result.totalPrice}</td>
                </tr>
              ))}
            </tbody>
            </table>
        </div>
      }
    </div>
  );
}

export default App;


