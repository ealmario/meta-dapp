import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Alert from './components/Alert';

const Home = ({ ethereum, setEthAddr, setEthNet, ethAddr }) => {
  const [isConnected, setIsConnected] = useState(false);

  // Redirect to dashboard on login
  if (isConnected) {
    return <Redirect to='/dashboard' />
  }

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

    setIsConnected(true);
  }

  return(
    <>
      <div className="container content-container d-flex justify-content-center align-items-center flex-column">
        <div className="p-3 h-50 d-flex flex-column justify-content-center align-items-center">
          <h1 className="m-0 text-center">Welcome to MetaDapp</h1>
          <p className="lead">Check your tokens</p>
          {ethereum === undefined ? <Alert /> : <button className="btn btn-custom mt-3" onClick={handleClick}>{ethAddr ? "View Tokens" : "Connect to Metamask"}</button>}
        </div>
      </div>
    </>
  )
}

export default Home;