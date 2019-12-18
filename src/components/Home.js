import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <header className="home">
      Swello
      </header>
      <div className="nav">
        <div>Boards</div><div>BoardTypes</div><div><Link to={'/beaches'}>Beaches</Link></div>
      </div>
    </div>
  );
};

export default Home;
