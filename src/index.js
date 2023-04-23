//renders pages
import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Navbar';

import App from './App';
import Website from './frontPage';
import Website2 from './membersPage';
//import reportWebVitals from './reportWebVitals';
//import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <div className="content">
      <Routes>
        <Route exact path="/">
    <Website />
     </Route>
    <Route path="/members">
      <Website2 />
    </Route>
    </Routes>
    </div>
    </Router>
);
