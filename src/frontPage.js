import React, {useState, useEffect} from 'react';
import ReactDOM from "react-dom/client";
import './css/index.css';
import { HashLink } from 'react-router-hash-link';
import { Link} from "react-router-dom";

import girlKarate from './images/girlKarate.jpg';
import GroupKarate from './images/GroupKarate.jpg';
import karateBoy from './images/karateBoy.jpg';
import KarateLogoColour from './images/KarateLogoColour.png';
//import SteppingStones from './images/SteppingStones.jpg';

function Website() {
/*
  useEffect(() => {
    document.title = 'Richards Karate Dojo';
  }, []);
}
  */
////////JSX (similar to html).  Wrap in <> and </>
  return (
    <div class="bg">  
<head>
  <title>Richards Shotokan Karate Dojo Northolt</title>
    
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="src/images/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"/>

<link rel="preconnect" href="https://fonts.googleapis.com"></link>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
<link href="https://fonts.googleapis.com/css2?family=Shojumaru&display=swap" rel="stylesheet"></link>
<link rel="stylesheet" href="src/css/index.css"></link>
      </head>     

{/*<nav>
  <ul class="nav-links">
    <li><a class="nav-link" href="#Contact">Contact</a></li>
    <li><a class="nav-link" href="#Calendar">Calendar</a></li>
    <li><a class="nav-link" href="#About">About</a></li>
  </ul>
  </nav>*/}
<nav>
  <ul class="nav-links">
    <li><HashLink to="/#Contact" class="nav-link">Contact</HashLink></li>
    <li><HashLink to="/#Calendar" class="nav-link">Calendar</HashLink></li>
    <li><HashLink to="/#About" class="nav-link">About</HashLink></li>

    {/*<li><a class="nav-link" href="/#Calendar">Calendar</a></li>
    <li><a class="nav-link" href="/#About">About</a></li>*/}
  </ul>
          </nav>
<body>
  <section class="photos">
    <img class="logo" src={KarateLogoColour} alt="Karate Logo" />
<h1>Richards Dojo: Harrow</h1>
  </section>
  
    <section id="About" class="container_about">
<h3>About</h3>
<p><span class="welcome">Welcome</span> to our club site. 
<span class="newStyle">Have fun, compete and get fit!</span></p>
<p>We are a friendly karate club catering for local children.</p>  <p>Shotokan Karate promotes hand-eye co-ordination, balance and discipline.</p>
<p>We offer regular gradings and the club has two 6th Dan instructors.</p> 
      
      <p>Come on for a <span class="free" id="free">free trial session.</span></p>
      <p>ADVANCED CLASSES: Sunday 2-3pm</p>
      <p>BEGINNER/INTERMEDIATE CLASSES: 3-4pm</p>
      <p>Please <a class="email" href="mailto: info@richardsdojo.co.uk">contact us</a> for our very reasonable prices.</p>
  </section>

  <section class="photos">
  
       <img src={girlKarate} alt="Girl karate" />
    <img src={GroupKarate} alt="Dojo group" />
    <img src={karateBoy} alt="Boy karate" />
  </section>
    
  <section class="photos"> 
    <figcaption><a href="https://www.freepik.com/free-photo/active-female-teenager-practising-karate-studio_8792957.htm#&position=1&from_view=collections">Image by serhii_bobyk</a> on Freepik</figcaption>
    <figcaption><a href="https://www.freepik.com/free-photo/four-children-boys-girls-taekwondo-athletes-posing-uniform-isolated-white-background_22152056.htm#&position=2&from_view=collections">Image by master1305</a> on Freepik</figcaption>
    <figcaption><a href="https://www.freepik.com/free-photo/portrait-little-boy-kimono-with-blue-belt-training-isolated-white-studio-background_23761409.htm#&position=3&from_view=collections">Image by master1305</a> on Freepik</figcaption>
    </section>
    
  <section class="container_calendar" id="Calendar">
    <div class="gradient">
    <h3>Karate Calendar</h3>
  <p>1st Term: <strong>10<sup>th</sup> September - 17<sup>th</sup> December</strong></p>

  <p><span class="moreDates"><tt>More dates to come!</tt></span></p>
  <p>Check out our <b>Google Calendar</b> below for more info:</p>
</div>
<iframe class="calendar" src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FLondon&title=Richards%20Dojo%3A%20Karate%20Term%20Dates&showNav=1&showTabs=0&mode=AGENDA&showCalendars=0&hl=en_GB&src=MTM3M2FkYTM4OGRjZjUzZDkzZTA4MmFkNzgwYTU1MTFiN2QwZDEwMDM5OGM1NzdlNTAyMWY2NjUxNDA2MTZjMUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%230B8043" width="70%" height="300" title="calendar" loading="lazy" frameborder="0"></iframe>
 {/*Changed width from 70% to 100%, height from 300 to auto and title = calendar*/}
    </section>
  
  <section class="container_contact" id="Contact">
<h3>Contact Us</h3>
<p>Northolt 2nd Scout hut, Russell Road, UB5 4PQ</p>
  <a class="email" href="mailto: info@richardsdojo.co.uk">E-mail</a>
  <br></br>
  <br></br>
  <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.5474770803985!2d-0.35542142411957656!3d51.55819637182493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487613804139d0d9%3A0x2e2c9ebc659a6985!2s2nd%20Northolt%20(Wood%20End)%20Scout%20Group!5e0!3m2!1sen!2suk!4v1693744296670!5m2!1sen!2suk" width="600" height="450" frameborder="0" allowfullscreen="" loading="lazy" title="map" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </section>
    
<footer class="foot">
  <ul id="foot_colour">
{/*<li class="footli"><a href="#top">Top</a></li>*/}
    {/*<li class="footli"><a href="/members">Member's Area</a></li>*/}
  <li><Link to="/members">Member's Area</Link></li>
          </ul>

</footer>
</body>
    </div>
  )
}

export {Website};
