import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../src/pages/Home/index';
import ShopCart from '../src/pages/ShopCart/index'
function App() {
  return (
    <div >
      <BrowserRouter>
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Home />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
