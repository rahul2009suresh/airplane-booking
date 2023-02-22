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
      const departureTime = Math.floor(Math.random() * 24);
      const arrivalTime = Math.floor(Math.random() * 24);

      results.push({
        airline: airline,
        numSeats: numSeats,
        pricePerSeat: pricePerSeat,
        totalPrice: totalPrice,
        departureTime: departureTime,
        arrivalTime: arrivalTime
      });
    }

    return results;
  }

  return (
    <div className="App" style={{backgroundColor: "#4D648D"}}>
      <h1 style={{color: "#FFD700"}}>Rahul Flight Services</h1>
      <div className="search-form">
        <div className="input-group">
          <label className="label" style={{color: "#FFD700"}}>
            Number of Adults:
            <input className="input" type="number" value={adults} onChange={(e) => setAdults(e.target.value)} />
          </label>
          <label className="label" style={{color: "#FFD700"}}>
            Number of Children:
            <input className="input" type="number" value={children} onChange={(e) => setChildren(e.target.value)} />
          </label>
        </div>
        <div className="input-group">
          <label className="label" style={{color: "#FFD700"}}>
            From:
            <input className="input" type="text" value={fromLocation} onChange={(e) => setFromLocation(e.target.value)} />
          </label>
          <label className="label" style={{color: "#FFD700"}}>
            To:
            <input className="input" type="text" value={toLocation} onChange={(e) => setToLocation(e.target.value)} />
          </label>
        </div>
        <div className="input-group">
          <label className="label" style={{color: "#FFD700"}}>
            From Date:
            <input className="input" type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
          </label>
          <label className="label" style={{color: "#FFD700"}}>
            To Date:
            <input className="input" type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
      </label>
    </div>
    <button className="button" onClick={handleSearch}>Search</button>
  </div>
  {searchResults.length > 0 && (
    <div className="search-results" style={{ backgroundColor: "white", padding: "20px", marginTop: "20px" }}>
      <h2 style={{ color: "black" }}>Search Results:</h2>
      <div className="search-result-cards" style={{ display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap" }}>
        {searchResults.map((result, index) => (
          <div className="search-result-card" key={index} style={{ border: "1px solid black", borderRadius: "5px", margin: "10px", padding: "10px", minWidth: "250px" }}>
            <div className="card-header">
              <h3>{result.airline}</h3>
              <p>{new Date().toLocaleString()}</p>
            </div>
            <div className="card-body">
              <p>Number of Seats: {result.numSeats}</p>
              <p>Price per Seat: ${result.pricePerSeat}</p>
              <p>Total Price: ${result.totalPrice}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )}
</div>
);
}

export default App;
