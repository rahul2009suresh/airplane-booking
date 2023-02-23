import React, { useState } from 'react';

function App() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Perform search with API call and update searchResults state
    setSearchResults([
      {
        name: 'Rahul Airlines',
        fromTime: '10:00 AM',
        toTime: '2:00 PM',
        cost: '$200'
      },
      {
        name: 'Rahul Express',
        fromTime: '11:00 AM',
        toTime: '3:00 PM',
        cost: '$180'
      },
      {
        name: 'Rahul Connect',
        fromTime: '12:00 PM',
        toTime: '4:00 PM',
        cost: '$220'
      }
    ]);
  };

  return (
    <div style={{ backgroundColor: '#2596be', color: '#F0ea03', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Rahul Flight Services</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '50%', minWidth: '500px' }}>
          <h2>Book Your Flight</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div>
              <label htmlFor="from">From:</label>
              <input type="text" id="from" value={from} onChange={(e) => setFrom(e.target.value)} />
            </div>
            <div>
              <label htmlFor="to">To:</label>
              <input type="text" id="to" value={to} onChange={(e) => setTo(e.target.value)} />
            </div>
            <div>
              <label htmlFor="date">Date:</label>
              <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div>
              <label htmlFor="adults">Adults:</label>
              <input type="number" id="adults" value={adults} onChange={(e) => setAdults(Math.max(0, parseInt(e.target.value)))} />
            </div>
            <div>
              <label htmlFor="children">Children:</label>
              <input type="number" id="children" value={children} onChange={(e) => setChildren(Math.max(0, parseInt(e.target.value)))} />
            </div>
            <div>
              <button onClick={handleSearch}>Search</button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <div style={{ width: '50%', minWidth: '500px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {searchResults.length > 0 && (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#F0ea03', padding: '10px' }}>
              <div style={{ fontWeight: 'bold' }}>Flight Name</div>
              <div style={{ fontWeight: 'bold' }}>Departure Time</div>
              <div style={{ fontWeight: 'bold' }}>Arrival Time</div>
              <div style={{ fontWeight: 'bold' }}>Cost</div>
            </div>
          )}
          {searchResults.map((result, index) => (
            <div key={index} style={{ backgroundColor: '#F0ea03', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 0 10px rgba(0,0,0,0.2)', borderRadius: '5px' }}>
              <div>{result.name}</div>
              <div>{result.fromTime}</div>
              <div>{result.toTime}</div>
              <div>{result.cost}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;