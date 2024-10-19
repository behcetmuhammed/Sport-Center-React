import React from "react";
import "../css/header.css";
// import "../css/main.css";
function Header() {
  return (
    <div>
      <section id="header">
        {/* Container */}
        <div id="container" className="firstarea">
          {/* Logo */}
          <div id="logo">
            <img src="./" alt="powerfull-logo" />
            <div id="menu-toggle" className="menu-toggle">
              ☰
            </div>
          </div>
          {/* Nav- */}
          <nav id="nav" className="menu">
            {/* Hamburger menü simgesi */}

            {/* Menü açma butonu | Mobil için */}
            <ul id="menu" className="hidden">
              <li>
                <a href="#header">Home</a>
              </li>
              <li>
                <a href="#classes">Classes</a>
              </li>
              <li>
                <a href="#trainers">Trainer</a>
              </li>
              <li>
                <a href="#review">Review</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a className="joinas" href="#">
                  JOIN US
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* <!--! Contents--> */}
        <div id="content">
          {/* <!--* powerfull button--> */}
          <div id="contentsHeader">
            <button>POWERFULL</button>
          </div>
          {/* <!--* articles--> */}
          <article id="articleHeader">
            <div className="theme1">
              <p>
                Group <br />
                Practice <br />
                Wi̇th Trainer
              </p>
            </div>
            <div className="theme2">
              Welcome! Our gym is the perfect place to embrace a healthy
              lifestyle and achieve your fitness goals. With our expert trainers
              th our expert trainers, we offer all the facilities you need to
              improve yourself and stay in shape yourself and stay in shape.
            </div>
          </article>
          {/* <!--* signup and details button--> */}
          <div id="signupHeader">
            <button id="signup">Sign Up</button>
            <button id="details">Details</button>
          </div>
        </div>
        {/* <!--! Stats Section --> */}
        <section id="stats">
          {/* <!--* Courses--> */}
          <div className="stat-box">
            <div className="stat-number">50</div>
            <div className="stat-title">Courses</div>
          </div>
          {/* <!--* Workouts --> */}
          <div className="stat-box">
            <div className="stat-number">100</div>
            <div className="stat-title">Workouts</div>
          </div>
          {/* <!--* Working Hours--> */}
          <div className="stat-box">
            <div className="stat-number">12</div>
            <div className="stat-title">Working Hours</div>
          </div>
          {/* <!--*Happy Clients --> */}
          <div className="stat-box">
            <div className="stat-number">200</div>
            <div className="stat-title">Happy Clients</div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Header;
