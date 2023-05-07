import React, {useState, useEffect} from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import { HashLink } from 'react-router-hash-link';
import { Link} from "react-router-dom";

function Website() {
  
////////JSX (similar to html).  Wrap in <> and </>
  return (
    <div>  
<head>
  <title>Richards Karate</title>
<link rel="preconnect" href="https://fonts.googleapis.com"></link>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
<link href="https://fonts.googleapis.com/css2?family=Shojumaru&display=swap" rel="stylesheet"></link>
<link rel="stylesheet" href="./index.css"></link>
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
    <img class="logo" src="https://lh3.googleusercontent.com/drive-viewer/AAOQEORQVMYEjfBG2sMIEXNnONAFTzUhxClISYaULbyNsjISPUXe-HDqttWkVy5LGqNPQuWmS0WX_kkBMgmYYYmujSpfV693jg=s2560?source=screenshot.guru" alt="KarateLogo" />
<h1>Richards Dojo: Harrow</h1>
  </section>
  
    <section id="About" class="container_about">
<h3>About</h3>
<p><span class="welcome">Welcome</span> to our club site. 
<span class="newStyle">Have fun, compete and get fit!</span></p>
<p>We are a friendly karate club catering for local children.</p>  <p>Shotokan Karate promotes hand-eye co-ordination, balance and discipline.</p>
<p>We offer regular gradings and the club has two 6th Dan instructors.</p> 
      
      <p>Come on Sunday 2pm-3pm for a <span class="free" id="free">free trial session.</span></p>
      <p>Please <a class="email" href="mailto: info@richardsdojo.co.uk">contact us</a> for our very reasonable prices.</p>
  </section>

  <section class="photos">
  
       <img src="https://lh3.googleusercontent.com/drive-viewer/AAOQEOSgJF0tIAxzEADGfG-K5NS7nlIicr71faAPv2HF7rLRQClg3o8_caM9jwerPx_c6iE6LULAPhfHJ0Xgs2dGSt6F8QR12Q" alt="Girl karate" />
    <img src="https://lh3.googleusercontent.com/drive-viewer/AAOQEOSQWd_QCJdO4ModhmTCo6xO5OyB0GZ4udWHHC4svcWsgFFYMA6oxLC_lLLD0YVCTMQz88VrJE_gqmKRooQiIuLPVpbREg=s1600" alt="Dojo group photo" />
    <img src="https://lh3.googleusercontent.com/drive-viewer/AAOQEOS1YQ39oaYToZQZVWsS-uYXSk_YyYkx3LEbZ1RGWTXxCHNCOm73-WmkpyUVuZ7WDT_q3H4RKGE6sz1KOxadzAexG2W7Yg=s2560" alt="Boy karate" />
  </section>
    
  <section class="photos"> 
    <figcaption><a href="https://www.freepik.com/free-photo/active-female-teenager-practising-karate-studio_8792957.htm#&position=1&from_view=collections">Image by serhii_bobyk</a> on Freepik</figcaption>
    <figcaption><a href="https://www.freepik.com/free-photo/four-children-boys-girls-taekwondo-athletes-posing-uniform-isolated-white-background_22152056.htm#&position=2&from_view=collections">Image by master1305</a> on Freepik</figcaption>
    <figcaption><a href="https://www.freepik.com/free-photo/portrait-little-boy-kimono-with-blue-belt-training-isolated-white-studio-background_23761409.htm#&position=3&from_view=collections">Image by master1305</a> on Freepik</figcaption>
    </section>
    
  <section class="container_calendar" id="Calendar">
    <div class="gradient">
    <h3>Karate Calendar</h3>
  <p>3rd Term: <strong>23rd April - 23rd July</strong></p>

  <p><span class="moreDates"><tt>More dates to come!</tt></span></p>
  <p>Check out our <b>Google Calendar</b> below for more info:</p>
</div>
<iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FLondon&title=Richards%20Dojo%3A%20Karate%20Term%20Dates&showNav=1&showTabs=0&showCalendars=0&hl=en_GB&src=MTM3M2FkYTM4OGRjZjUzZDkzZTA4MmFkNzgwYTU1MTFiN2QwZDEwMDM5OGM1NzdlNTAyMWY2NjUxNDA2MTZjMUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%230B8043" width="100%" height="auto" title="calendar" frameborder="0"></iframe>
 {/*Changed width from 70% to 100%, height from 300 to auto and title = calendar*/}
    </section>
  
  <section class="container_contact" id="Contact">
<h3>Contact Us</h3>
<p>9 Scott Cres, Harrow HA2 0TY </p>
  <a class="email" href="mailto: info@richardsdojo.co.uk">E-mail</a>
  <br></br>
  <br></br>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.834368477423!2d-0.36202737674165114!3d51.571269844872674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876133b8f4e2867%3A0x317be2a9af7c9fd5!2sBeacon%20Centre%20Harrow!5e0!3m2!1sen!2suk!4v1681660706903!5m2!1sen!2suk" width="600" height="450" frameborder="0" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
