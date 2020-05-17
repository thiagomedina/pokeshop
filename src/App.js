import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PokeList from '../src/components/Products/pokeList'
import Home from '../src/pages/Home/home';
function App() {
  return (
    <div >
      <BrowserRouter>
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <PokeList />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
