//import logo from './logo.svg';
//import './App.css';
import './css/index.css';
import React, {Component} from 'react';
import {HashRouter, Route, Routes, Link} from "react-router-dom";

import {Website} from "./frontPage";
import {Website2} from "./membersPage";
//import Navbar from './Navbar';
class App extends Component{
  render(){
    return(
      
      <HashRouter basename="/">
        <div>
        
          <hr />
          <Routes>
          <Route exact path="/" element={<Website/>} />
          <Route path="/members" element={<Website2/>} />
          </Routes>

          
          <ul>
          {/*}  <li><Link to="/">Home</Link></li>
            <li class="footli"><Link to="/members">Member's_section</Link></li> */}
          </ul>
          
          

        </div>

      </HashRouter>
    );
  }
}
//const Home = () => <div><h1>OUCH!!!</h1></div>
//const Members = () => <div><h1>NOOOOOOO</h1></div>
export default App;
