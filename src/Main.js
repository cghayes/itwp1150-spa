// HOMEWORK 8
import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter,
} from 'react-router-dom';
import Biking from "./Biking";
import DiscGolf from "./DiscGolf";
import Birding from "./Birding";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Favorite Outdoor Activities</h1>
          <ul className="header">
            <li><NavLink exact to="/">Biking</NavLink></li>
            <li><NavLink to="/DiscGolf">Disc Golf</NavLink></li>
            <li><NavLink to="/Birding">Birding</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Biking}/>
            <Route path="/DiscGolf" component={DiscGolf}/>
            <Route path="/Birding" component={Birding}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
