import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './pages/components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Page404 from './pages/Page404';

function App() {
  const ethereum = window.ethereum;

  const [addr, setAddr] = useState('');

  async function getAccount() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts'});
    const account = accounts[0];
    setAddr(account);
  }
  // if (ethereum && ethereum.isMetaMask) {
  //   ethereum.on('accountsChanged', (accounts) => {
  //     setAddr(accounts[0]);
  //   });
  // }
  
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home ethereum={ethereum} getAccount={getAccount}/>
          </Route>

          <Route exact path="/dashboard" addr={addr}>
            <Dashboard />
          </Route>

          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
