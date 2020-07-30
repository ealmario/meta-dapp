import React from 'react';
import { Redirect } from 'react-router-dom';
import Alert from './components/Alert';

const Home = ({ ethereum, setEthAddr, setEthNet }) => { 

  const handleClick = async (e) => {
    // Enable MetaMask
    const accounts = await window.ethereum.enable();
    // Logged Account
    const account = accounts[0];
    // ChainID
    const chainId = await window.ethereum.chainId;

    // Set ETH address and network
    setEthAddr(account);
    setEthNet(chainId);

    // Redirect to Dashboard
    return <Redirect to="/dashboard" />
  }

  return(
    <>
      <div className="jumbotron jumbotron-fluid hero-section d-flex justify-content-center align-items-center m-0">
        <div className="container d-flex justify-content-center align-items-center flex-column">
          <h1 className="m-0">Welcome to MetaDapp</h1>
          <p className="lead">Check your tokens</p>
          {ethereum === undefined ? <Alert /> : <button className="btn btn-success" onClick={handleClick}>Connect to Metamask</button>}
        </div>
      </div>
    </>
  )
}

export default Home;