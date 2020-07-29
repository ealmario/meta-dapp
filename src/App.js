import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './pages/components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Page404 from './pages/Page404';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/dashboard">
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
