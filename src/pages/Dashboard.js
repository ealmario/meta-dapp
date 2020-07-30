import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const Dashboard = ({ethAddr, ethNet, tokenAddr, tokenSymbol, tokenDecimals, token, ethereum, setEthAddr, setEthNet}) => {
  // States
  const [tokenBal, setTokenBal] = useState('');
  const [tokenAddMsg, setTokenAddMsg] = useState(false);

  if(!ethereum) {
    return <Redirect to="/" />
  }

  // Get ERC20 Tokens 
  const handleGetToken = async (e) => {
    try {
      // wasAdded is a boolean. Like any RPC method, an error may be thrown.
      const wasAdded = await window.ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20', // Initially only supports ERC20, but eventually more!
          options: {
            address: tokenAddr, // The address that the token is at.
            symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
            decimals: tokenDecimals, // The number of decimals in the token
            // image: tokenImage, // A string url of the token logo
          },
        },
      });
    
      if (wasAdded) {
        setTokenAddMsg(true);
        console.log('Thanks for your interest!');
      } else {
        console.log('Your loss!');
      }
    } catch (error) {
      console.log(error);
    }

    const tokenBal = await token.methods.balanceOf(ethAddr).call();
    setTokenBal(tokenBal);

    return <Redirect to="/dashboard" />
  }

    // Address/ChainID Event
     ethereum.on('accountsChanged', (accounts) => {
        setEthAddr(accounts[0]);
    });
  
    ethereum.on('chainChanged', (_chainId) => {
      setEthNet(_chainId);
    });
   
  return(
    <>
      <div className="container d-flex justify-content-center align-items-center flex-column py-3">
        
        <div className="card text-center mt-5">
          <div className="card-header">
            Metamask User
          </div>
          <div className="card-body">
            <p className="card-text">ETH Address: {ethAddr}</p>
            <p className="card-text">ETH Network: {ethNet === '0x3' ? "Ropsten Network" : "Please Select Ropsten"}</p>
            <p className="card-text">MDPT Tokens:</p>
            <h1 className="card-text">{ tokenBal === '' ? 0 : tokenBal }</h1>
            {tokenAddMsg ? 
              <div className="alert alert-success alert-dismissible fade show d-flex flex-column" role="alert">
                <p className="m-0">Tokens Successfully Added!</p> 
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div> : ""
            }
          </div>
          {tokenBal !== 0 ? 
            <div className="card-footer">
              <button className="btn btn-primary" onClick={handleGetToken}>Get Tokens</button>
            </div> :
            ""
          }
        </div>
      </div>
    </>
  )
}

export default Dashboard;