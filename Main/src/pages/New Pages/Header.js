import React from 'react';
import '../New Pages/style.css';
import KommunicateChat from '../ChatBot/ChatB';
import ChatB from '../ChatBot/ChatB';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCompass, faCameraRetro, faBicycle, faFlagCheckered } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <>
      <header>
        <h2><a href="#">Aasana Sense</a></h2>
        <nav>
          <li><a href="#">Home </a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </nav>
      </header>
      <KommunicateChat></KommunicateChat>

      <section className="hero">
        <div className="background-image"></div>
        <div className="hero-content-area">
          <h1>Aasana Sense By Team "Kal Karenge"</h1>
          <h3>"Begin your journey to inner peace"</h3>
          <a href="/start" className="btn">Try nOW</a>
        </div>
      </section>

      <section className="destinations">
        <h3 className="title">destinations</h3>
        <p>"Yoga is not about touching your toes. It's about what you learn on the way down."</p>
        <hr/>

        <ul className="grid">
          <li className="small image-1"></li>
          <li className="large image-2"></li>
          <li className="large image-3"></li>
          <li className="small image-4"></li>
        </ul>
      </section>

      <section className="packages">
        <h3 className="title">Features</h3>
        <p>The Aasana-Sense provides real-time feedback on the user's yoga pose, including suggestions for corrections and improvements.</p>
        <hr/>

        <ul className="grid">
          <li>
            {/* <FontAwesomeIcon icon={faCompass} size="4x"/> */}
            <h4>Personalized recommendations</h4>
            <p>.Providing personalized recommendations based on the user's fitness level, preferences, and goals, helping them to optimize their yoga practice and achieve their desired outcomes.</p>
          </li>
          <li>
            {/* <FontAwesomeIcon icon={faCameraRetro} size="4x"/> */}
            <h4>Help Box</h4>
            <p>Chat Box that assist you throughout your fitness journey.</p>
          </li>
          <li>
            {/* <FontAwesomeIcon icon={faBicycle} size="4x"/> */}
            <h4>Strict Assistance</h4>
            <p>The Aasana-Sense detects the accuracy of the poses and postures performed by the user and provides an accurate and strict assistance.</p>
          </li>
          <li>
            {/* <FontAwesomeIcon icon={faFlagCheckered} size="4x"/> */}
            <h4>An Eye Keeper</h4>
            <p>An eye is always on you that checks if you are actually doing your routine yoga.
No skipping this time.</p>
          </li>
        </ul>
      </section>

      <section className="testimonials">
        <h3 className="title">Our Team:</h3>
        <h4>Bajrang Gour</h4>
//         <p>Team Leader</p>
//         <h4>Yashwarddhan Gulia</h4>
//         <p>Team Member</p>

//         <h4>Tanishka Pahwa</h4>
//         <p>Team Member</p>

        <h4>Rajvinder Kaur</h4>
        <p>Team Member</p>

        <hr/>
     
        </section>
        Made with <i class="fa fa-heart pulse"></i> By <h4 href="" target="_blank" color='Black'>Kal karenge</h4>
        </>
  )}
  
  export default Header;
