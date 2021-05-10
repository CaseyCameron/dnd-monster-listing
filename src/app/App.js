import { Component } from 'react';

import Footer from './Footer';
import Header from './Header';
import Home from '../home/Home';
import MonstersPage from '../monsters/MonstersPage';
import MonsterDetailPage from '../monster/monsterDetailPage';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Header/>
          <main>

            <Switch>
              <Route path="/" exact={true}
                render={routerProps => (
                  <Home {...routerProps}/>
                )}
              />

              <Route path="/monsters" exact={true}
                render={routerProps => (
                  <MonsterssPage {...routerProps}/>
                )}
              />

              <Route path="/monsters/:id"
                render={routerProps => (
                  <MonsterDetailPage {...routerProps}/>
                )}
              />

              <Redirect to="/" />

            </Switch>
          </main>
          <Footer/>
        </Router>
      </div>
    );
  }

}

export default App;