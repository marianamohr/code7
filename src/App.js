import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Content from './pages/Content';

class App extends React.Component {

  render() {

    return (
      <div className="App">
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/content" component={ Content } />

      </Switch>
      </div>
    );
  }
}



export default App;
