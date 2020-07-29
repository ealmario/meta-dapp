import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Alert from './components/Alert';

const Home = ({ ethereum, getAccount }) => { 
  const handleClick = () => {
    getAccount();

    return <Redirect to="/dashboard" />
  }

  return(
    <>
      <div className="jumbotron jumbotron-fluid hero-section d-flex justify-content-center align-items-center m-0">
        <div className="container d-flex justify-content-center align-items-center flex-column">
          <h1 className="m-0">Welcome to MetaDapp</h1>
          <p className="lead">Check your tokens</p>
          {!ethereum ? <Alert /> : ""}
          {!ethereum ? <button className="btn btn-success" disabled >Connect to MetaMask</button> : <button className="btn btn-success" onClick={handleClick}>Connect to MetaMask</button>}
          {/* <Link className="btn btn-success mt-3" to="/dashboard">View Tokens</Link> */}
        </div>
      </div>
    </>
  )
}

export default Home;