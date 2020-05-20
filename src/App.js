import React from 'react';
import { BrowserRouter,Switch } from 'react-router-dom';
import Core from './Main/core';
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
