import React from 'react';
import { BrowserRouter,Switch } from 'react-router-dom';
import Core from './view/Home/core';
function App() {
  return (
    <div >
      <BrowserRouter>
        <Switch>
             <Core />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
