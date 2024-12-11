import React from 'react';
import img1 from '../IMG/search.png';
import img2 from '../IMG/mic.png';
import img3 from '../IMG/create.png';
import img4 from '../IMG/more.png';
import img5 from '../IMG/bell.png';
import img7 from '../IMG/Ellipse 1.png';

function Navbar({ query, setQuery, fetchVideos, maxResults, setMaxResults }) {

  const handleMaxResultsChange = (event) => {
    setMaxResults(parseInt(event.target.value, 10)); 
  };

  return (
    <>
      <div id="navbar">
        
        <div id="nav1" style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <input
              type="text"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{
                backgroundColor: 'rgb(24, 24, 24)',
                width: '540px',
                height: '26px',
                paddingLeft: '10px',
              }}
            />
          </div>
          <button
            onClick={fetchVideos}
            style={{
              width: '50px',
              backgroundColor: 'rgb(50, 50, 50)',
              height: '30px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: 'none',
              paddingTop: '5px',
            }}
          >
            <img src={img1} alt="Search Icon" height="25px" width="25px" />
          </button>
          
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              height: '30px',
              width: '40px',
              alignItems: 'center',
            }}
          >
            <img src={img2} alt="Mic Icon" height="25px" width="21px" />
          </div>

          {/* <div>
            <select
              name="numbers"
              id="numberSelect"
              value={maxResults}
              onChange={handleMaxResultsChange}
            >
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div> */}
        </div>
        <div
          id="nav2"
          style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}
        >
          <div className="aa">
            <img src={img3} alt="Create Icon" height="120%" />
          </div>
          <div className="aa">
            <img src={img4} alt="More Icon" height="120%" />
          </div>
          <div className="aa">
            <img src={img5} alt="Bell Icon" height="120%" />
          </div>
          <div className="aa">
            <img src={img7} alt="Profile Icon" height="120%" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
