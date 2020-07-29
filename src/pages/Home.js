import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return(
    <>
      <div className="jumbotron jumbotron-fluid hero-section d-flex justify-content-center align-items-center m-0">
        <div className="container d-flex justify-content-center align-items-center flex-column">
          <h1 className="m-0">Welcome to MetaDapp</h1>
          <p className="lead mb-3">Check your tokens</p>
          <Link className="btn btn-success" to="/dashboard">View Tokens</Link>
        </div>
      </div>
    </>
  )
}

export default Home;