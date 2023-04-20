import React, {useState, useEffect} from 'react';
import './index2.css';

//alternative const Website = () => {}
function Website2() {
  //use state:
  const[name, setName] = useState("");
  const[beltColour, setBeltColour] = useState("");

////////JSX (similar to html).  Wrap in <> and </>
  return (
    <>  
      
<nav>
  <ul class="nav-links">
    <li><a class="nav-link" href="#Training">Training</a></li>
    <li><a class="nav-link" href="#Order">Order</a></li>
    <li><a class="nav-link" href="/">Home Page</a></li>
    <link rel="stylesheet" href="./index2.css"></link>
  </ul>
</nav>

<body>
<h1>Member's Area</h1>
    
    <div class="flex">
<section id="Training" class="container_syllabus">
  <h3>Karate syllabus</h3>
  <p>Here are our Shotokan karate belt colours.  More information about the syllabus is coming soon:</p>
  <ul>
    <li>White belt</li>
    <li>Red belt</li>
    <li>Orange belt</li>
    <li>Yellow belt</li>
    <li>Green belt</li>
    <li>Blue belt</li>
    <li>Purple belt</li>
    <li>Brown belt</li>
    <li>Black belt</li>
  </ul>  
  <p class="note_stripes">N.B. Kids can achieve intermediate grades which are shown with a white stripe on their belt.</p>
</section>      

    <section id="Training" class="container_videos">    
  <h3>Training videos</h3>
  <p>These videos can help you practise your karate at home between lessons.</p>
  
  <iframe width="360" height="215" src="https://www.youtube.com/embed/myCc-SJYj0U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<p>Kanazawa demonstrates Shotokan katas in these videos:</p>
<iframe width="360" height="215" src="https://www.youtube.com/embed/-Z1D16MqisA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </section>
    </div>

<footer class="foot">
  <ul id="foot_colour">
<li><a href="#top">Top</a></li>
    <li><a href="/">Home Page</a></li>
    </ul>
</footer>
  </body>
  </>
  )
}



export default Website2;
