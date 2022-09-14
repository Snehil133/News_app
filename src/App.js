import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize = 5;I
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/"><News key="general" apiKey={this.apikey} pageSize={this.pageSize} country="in" category="general"/>
          </Route>
          <Route exact path="/business"><News key="business" apiKey={this.apikey}  pageSize={this.pageSize} country="in" category="business"/>
          </Route>
          <Route exact path="/entertainment"><News key="entertainment" apiKey={this.apikey} pageSize={this.pageSize} country="in" category="entertainment"/>
          </Route>
          <Route exact path="/general"><News key="general" apiKey={this.apikey} pageSize={this.pageSize} country="in" category="general"/>
          </Route>
          <Route exact path="/health"><News key="health" apiKey={this.apikey} pageSize={this.pageSize} country="in" category="health"/>
          </Route>
          <Route exact path="/science"><News key="science" apiKey={this.apikey} pageSize={this.pageSize} country="in" category="science"/>
          </Route>
          <Route exact path="/sports"><News key="sports" apiKey={this.apikey} pageSize={this.pageSize} country="in" category="sports"/>
          </Route>
          <Route exact path="/technology"><News key="technology" apiKey={this.apikey} pageSize={this.pageSize} country="in" category="technology"/>
          </Route>  
        </Switch>
        </Router>
      </div>
    )
  }
}

