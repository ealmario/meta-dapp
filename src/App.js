import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './pages/components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
