import { Component } from 'react';

import Footer from './Footer';
import Header from './Header';
import Home from '../home/Home';
import MonsterAddPage from '../monster-add/MonsterAddPage';
import MonstersPage from '../monsters/MonsterPage';
import MonsterDetailPage from '../monster/MonsterDetailPage';

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
                  <MonstersPage {...routerProps}/>
                )}
              />

              <Route path="/monsters/add" exact={true}
                render={routerProps => (
                  <MonsterAddPage {...routerProps}/>
                )}

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