//import logo from './logo.svg';
//import './App.css';
import './index.css';
import React, {Component} from 'react';
import {HashRouter, Route, Routes, Link} from "react-router-dom";

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
          <Route exact path="/" component={Home} />
          <Route path="/members" component={Members} />
          </Routes>
        </div>

      </HashRouter>
    );
  }
}
const Home = () => 
<div>
<h1>Home</h1>
    </div>

const Members = () => 
<div>
<h1>Members</h1>
</div>
export default App;
