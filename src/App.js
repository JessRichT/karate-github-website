//import logo from './logo.svg';
//import './App.css';
import './index.css';
import React, {Component} from 'react';
import {HashRouter, Route, Routes, Link} from "react-router-dom";
import {Website} from "./frontPage";
import {Website2} from "./membersPage";

class App extends Component{
  render(){
    return(
      <HashRouter basename="/">
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/members">Members_Page</Link></li>
          </ul>

          <hr />
          <Routes>
          <Route exact path="/" element={<Website/>} />
          <Route path="/members" element={<Website2/>} />
          </Routes>
        </div>

      </HashRouter>
    );
  }
}
//const Home = () => <div><h1>OUCH!!!</h1></div>
//const Members = () => <div><h1>NOOOOOOO</h1></div>
export default App;
