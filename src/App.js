import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Header } from './components'
import { Home } from './pages'
const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
