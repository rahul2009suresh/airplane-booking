import React, { useState } from 'react';

function App() {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');

  const handleSearch = () => {
    // Perform search based on user inputs
  };

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
      {/* Display search results here */}
    </div>
  );
}

export default App;

