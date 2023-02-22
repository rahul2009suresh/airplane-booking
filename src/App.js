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
      const fromTime = Math.floor(Math.random() * 24);
      const toTime = Math.floor(Math.random() * 24);

      results.push({
        airline: airline,
        numSeats: numSeats,
        pricePerSeat: pricePerSeat,
        totalPrice: totalPrice,
        fromTime: fromTime,
        toTime: toTime
      });
    }

    return results;
  }

  return (
    <div className="App" style={{backgroundColor: "#3b4e75"}}>
      <h1 style={{color: "#FFD700"}}>Rahul Flight Services</h1>
      <div className="search-form" style={{display: "flex", flexDirection: "column", gap: "20px"}}>
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
</div>
</div>
  )
}

export default App;
