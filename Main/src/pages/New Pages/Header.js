import React from 'react';
import '../New Pages/style.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCompass, faCameraRetro, faBicycle, faFlagCheckered } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <>
      <header>
        <h2><a href="#">Yoga Sense</a></h2>
        <nav>
          <li><a href="#">Tours</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </nav>
      </header>

      <section className="hero">
        <div className="background-image"></div>
        <div className="hero-content-area">
          <h1>Yoga Sense By Team "Kal Karenge"</h1>
          <h3>Unmissable Adventure Tours With Your Friends</h3>
          <a href="" className="btn">Contact Us Now</a>
        </div>
      </section>

      <section className="destinations">
        <h3 className="title">Some of our destinations:</h3>
        <p>Tired of the beach alone? Are the plains too plain? Come along with us on one of our unusual adventures with yout friends. Here are some pictures from people who have had elevated experiences with us.</p>
        <hr/>

        <ul className="grid">
          <li className="small image-1"></li>
          <li className="large image-2"></li>
          <li className="large image-3"></li>
          <li className="small image-4"></li>
        </ul>
      </section>

      <section className="packages">
        <h3 className="title">Tour Packages</h3>
        <p>We offer a variety of group (minimum 5 people) packages. Whether you've spent some summers together or this might be your first adventure, we've got the perfect vacation for you.</p>
        <hr/>

        <ul className="grid">
          <li>
            {/* <FontAwesomeIcon icon={faCompass} size="4x"/> */}
            <h4>Guided Trips</h4>
            <p>Looking for the complete experience? Take a tour with one of our experts. They'll show you secrets that you're likely to miss otherwise.</p>
          </li>
          <li>
            {/* <FontAwesomeIcon icon={faCameraRetro} size="4x"/> */}
            <h4>Photo Trips</h4>
            <p>Want to experience nature's beauty without all of that annoying exercise? Take a photo tour on one of our <em>Life is a party!</em> buses.</p>
          </li>
          <li>
            {/* <FontAwesomeIcon icon={faBicycle} size="4x"/> */}
            <h4>Biking Trips</h4>
            <p>If bicycles are more your speed, consider taking a tour through one of our mountain or city bike paths. We'll provide the bikes, and lunch too!</p>
          </li>
          <li>
            {/* <FontAwesomeIcon icon={faFlagCheckered} size="4x"/> */}
            <h4>Racing Trips</h4>
            <p>Got a competitive spirit? Sign up for one of our challenge-based marathons! Try to reach the summit before any other group.</p>
          </li>
        </ul>
      </section>

      <section className="testimonials">
        <h3 className="title">Testimonials from our adventurers:</h3>
        <hr/>
        <p className="quote">Wow! This tour made</p>
        </section>
        </>
  )}
  
  export default Header;
