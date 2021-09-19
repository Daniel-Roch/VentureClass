import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Pages
import Home from './pages/Home'
import Treinamento from './pages/Treinamento'

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" children={<Home />} />
          <Route exact path="/treinamento/:id" children={<Treinamento />} />
        </Switch>
      </Router>
  );
}

export default App;
