import React from 'react';
import { BrowserRouter,Switch } from 'react-router-dom';
import Main from './Main/main';
function App() {
  return (
    <div >
      <BrowserRouter>
        <Switch>
             <Main />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
