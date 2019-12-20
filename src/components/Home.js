import React from 'react';
import { Link } from 'react-router-dom'
import  './Home.css'

const Home = () => {
  return (
    <div>
      <header className="home">
        <h1>Swello</h1>
      </header>
      <div className="nav">
        <div>Boards</div><div>BoardTypes</div><div><Link className='links' to={'/beaches'}>Beaches</Link></div>
      </div>
    </div>
  );
};

export default Home;
