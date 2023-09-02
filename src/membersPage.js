import React, {useState, useEffect} from 'react';
import './css/index2.css';
import { HashLink } from 'react-router-hash-link';
import { Link} from "react-router-dom";
import KarateLogoColour from './images/KarateLogoColour.png';

const logo = KarateLogoColour;

//alternative const Website = () => {}
function Website2() {
//use state:
  //const[name, setName] = useState("");
  //const[beltColour, setBeltColour] = useState("");
  const [kata, setKata] = useState("What you need to get your next belt");
  //const [orig, newStyle] = useState("green");

////////JSX (similar to html).  Wrap in <> and </>
  return ( 
      <div> 
      <head>
        <title>Karate Members</title>
        </head>
{/*<nav>
  <ul class="nav-links">
    {/*<li><a class="nav-link" href="#Training">Training</a></li>
    <li><a class="nav-link" href="#Order">Order</a></li>
  <li><a class="nav-link" href="/">Home Page</a></li>
    <link rel="stylesheet" href="./index2.css"></link>
  </ul>
</nav>*/}

<nav>
  <ul class="nav-links">

    <li><HashLink to="/members/#Training" class="nav-linkHide">Training</HashLink></li>
    <li><HashLink to="/members/#Syllabus" class="nav-linkHide">Syllabus</HashLink></li>
    
    
    {/*<li><a class="nav-link" href="/#Calendar">Calendar</a></li>
    <li><a class="nav-link" href="/#About">About</a></li>*/}
  </ul>
          </nav>

<body>
<div class="bg"> 
<h1 class="membersArea">Member's Area</h1>
    
    <div class="flex">

<section id="Syllabus" class="container_syllabus">
  <h3>Karate syllabus</h3>
  <p class="relativeBeltInfo">Click on the belt colour to find out more:</p>
  <ul>
    {/*<li style={{ color: 'white' }} >White belt</li>*/}
    {/*<li style={{ color: 'red' }} >Red belt</li>*/}
    <li
        onClick={() => setKata("This is your first belt.")}
        style={{ color: 'white', cursor: 'pointer', textDecorationLine: 'underline' }} >White belt</li>
    <li
        onClick={() => setKata(
          "No Katas required.  Basics: Straight punch, stepping punch, reverse punch, upward block, front kick, downward block")}
        style={{ color: 'red', cursor: 'pointer', textDecorationLine: 'underline'}} >Red belt</li>

    {/*<li style={{ color: 'orange' }}>Orange belt</li>*/}
    <li
        onClick={() => setKata("Kata: Heian Shodan. Kumite: Gohon Ippon Face and Front Kick")}
        style={{ color: 'orange', cursor: 'pointer', textDecorationLine: 'underline' }} >Orange belt</li>

<li
        onClick={() => setKata("Kata: Heian Nidan. Kumite: Gohon Ippon Full and Sambon")}
        style={{ color: 'yellow', cursor: 'pointer', textDecorationLine: 'underline' }} >Yellow belt</li>

<li
        onClick={() => setKata("Kata: Heian Sandan. Kumite: Kihon Ippon Face")}
        style={{ color: 'green', cursor: 'pointer', textDecorationLine: 'underline' }} >Green belt</li>

<li
        onClick={() => setKata("Kata: Heian Yondan. Kumite: Kihon Ippo Face and Body")}
        style={{ color: 'blue', cursor: 'pointer', textDecorationLine: 'underline' }} >Blue belt</li>

<li
        onClick={() => setKata("Kata: Heian Godan. Kumite: Kihon Ippon Face, Stomach and Front Kick")}
        style={{ color: 'purple', cursor: 'pointer', textDecorationLine: 'underline' }} >Purple belt</li>

<li
        onClick={() => setKata("Kata: Tekki Shodan. Kumite: All of Kihon Ippon and Jiyon Ippon Face")}
        style={{ color: 'brown', cursor: 'pointer', textDecorationLine: 'underline' }} >Brown belt</li>

<li
        onClick={() => setKata("Kata: Bassi-Dai. Kumite: Jiyu Ippon Face and Body")}
        style={{ color: 'brown', cursor: 'pointer', textDecorationLine: 'underline' }} >2nd Kyu belt</li>

<li
        onClick={() => setKata("Kata: Bassi-dai, Kanku-dai. Kumite: Jiyu Ippon Face Body and Front Kick")}
        style={{ color: 'brown', cursor: 'pointer', textDecorationLine: 'underline' }} >1st Kyu belt</li>

<li
        onClick={() => setKata("Kata: Enpi and own combination.  Kumite: All of Jiyu Ippon")}
        style={{ color: 'black', cursor: 'pointer', textDecorationLine: 'underline' }} >Black belt</li>

    {/*<li style={{ color: 'yellow' }}>Yellow belt</li>
    <li style={{ color: 'green' }}>Green belt</li>
    <li style={{ color: 'blue' }}>Blue belt</li>
    <li style={{ color: 'purple' }}>Purple belt</li>
    <li style={{ color: 'brown' }}>Brown belt</li>
  <li style={{ color: 'black' }}>Black belt</li>*/}
  </ul>  

  <p class="note_stripes1">N.B. Kids can achieve intermediate grades which are shown with a white stripe on their belt.</p>

</section> 

<section id="beltInfo" class="container_info"> 

<h3>More Belt Information</h3>

<p class="beltInfoHere">{kata}</p>

<br/>

<p class="note_stripes">Brown belt is the first teaching grade and therefore students who achieve this grade will be offered the opportunity to become assistant instructors to teach lower grades.</p>

  </section>

    <section id="Training" class="container_videos">    
  <h3 class="white">Training videos</h3>
  <p class="white">These videos can help you practise your karate at home between lessons.</p>
  
  <iframe width="360" height="215" src="https://www.youtube.com/embed/myCc-SJYj0U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<p class="blackWhite">Kanazawa demonstrates Shotokan katas in these videos:</p>
<iframe width="360" height="215" src="https://www.youtube.com/embed/-Z1D16MqisA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </section>
    </div>
    </div>
   
<footer class="foot">
  <ul id="foot_colour">
{/*<li><a href="#top">Top</a></li>*/}
    <li>
    <Link to="/">Home Page</Link>
      {/*<a href="/">Home Page</a>*/}
    </li>
    </ul>
</footer>
  </body>
  </div>
  
  )
}



export {Website2};
