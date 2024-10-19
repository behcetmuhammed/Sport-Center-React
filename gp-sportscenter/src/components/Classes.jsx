import React from "react";
import "../css/classes.css";
function Classes() {
  return (
    <div>
      <section id="classes" className="classes-section">
        {/* <!--! Our Classes--> */}
        <h2 className="section-title">OUR CLASSES</h2>
        <div className="section-line"></div>
        {/* <!--! Description--> */}
        <p className="section-description">
          Lorem Ipsum is not simply random text. It has roots in a piece of
          classical <br />
          at Hampden-Sydney College.
        </p>
        {/* <!--! Classes Container--> */}
        {/* <!--* Content Area--> */}
        <div className="tab-navigation">
          {/* <!-- Tab Buttons --> */}
          <div className="tabs">
            <button className="tab-btn active" data-target="yoga">
              Yoga
            </button>
            <button className="tab-btn" data-target="group">
              Group
            </button>
            <button className="tab-btn" data-target="solo">
              Solo
            </button>
            <button className="tab-btn" data-target="stretching">
              Stretching
            </button>
          </div>

          {/* <!-- Tab Content --> */}
          <div className="tab-content">
            {/* <!-- Yoga Area --> */}
            <div className="tab-panel active" id="yoga">
              <div className="tab-panel-cont">
                <div className="yoga-contents">
                  <div>
                    <h1>Why are your Yoga?</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Pariatur possimus voluptatum impedit odit perferendis
                      dolorum placeat, exercitationem in officia autem maiores
                      ab nostrum laboriosam sapiente nulla totam neque eum
                      veniam.
                    </p>
                  </div>
                  <div>
                    <h1>When comes Yoga Your Time.</h1>
                    <ul>
                      <li>Saturday-Sunday: 8:00am - 10:00am</li>
                      <li>Monday-Tuesday: 10:00am - 12:00pm</li>
                      <li>Wednesday-Friday: 3:00pm - 6:00pm</li>
                    </ul>
                  </div>
                </div>
                <div className="yogaImg">
                  <img
                    src="./images/yoga.jpg"
                    alt="yoga"
                    height="300"
                    width="350"
                  />
                </div>
              </div>
            </div>
            {/* <!-- Group Area --> */}
            <div className="tab-panel" id="group">
              <div className="tab-panel-cont">
                <div className="group-contents">
                  <div>
                    <h1>Why are your Group?</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Pariatur possimus voluptatum impedit odit perferendis
                      dolorum placeat, exercitationem in officia autem maiores
                      ab nostrum laboriosam sapiente nulla totam neque eum
                      veniam.
                    </p>
                  </div>
                  <div>
                    <h1>When comes Group Your Time.</h1>
                    <ul>
                      <li>Saturday-Sunday: 8:00am - 10:00am</li>
                      <li>Monday-Tuesday: 10:00am - 12:00pm</li>
                      <li>Wednesday-Friday: 3:00pm - 6:00pm</li>
                    </ul>
                  </div>
                </div>
                <div className="groupImg">
                  <img
                    src="./images/group.webp"
                    alt="yoga"
                    height="300"
                    width="350"
                  />
                </div>
              </div>
            </div>
            {/* <!-- Solo Area --> */}
            <div className="tab-panel" id="solo">
              <div className="tab-panel-cont">
                <div className="solo-contents">
                  <div>
                    <h1>Why are your Solo?</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Pariatur possimus voluptatum impedit odit perferendis
                      dolorum placeat, exercitationem in officia autem maiores
                      ab nostrum laboriosam sapiente nulla totam neque eum
                      veniam.
                    </p>
                  </div>
                  <div>
                    <h1>When comes Solo Your Time.</h1>
                    <ul>
                      <li>Saturday-Sunday: 8:00am - 10:00am</li>
                      <li>Monday-Tuesday: 10:00am - 12:00pm</li>
                      <li>Wednesday-Friday: 3:00pm - 6:00pm</li>
                    </ul>
                  </div>
                </div>
                <div className="soloImg">
                  <img
                    src="./images/solo.jpg"
                    alt="yoga"
                    height="300"
                    width="350"
                  />
                </div>
              </div>
            </div>
            {/* <!-- Stretching Area --> */}
            <div className="tab-panel" id="stretching">
              <div className="tab-panel-cont">
                <div className="stretching-contents">
                  <div>
                    <h1>Why are your Stretching?</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Pariatur possimus voluptatum impedit odit perferendis
                      dolorum placeat, exercitationem in officia autem maiores
                      ab nostrum laboriosam sapiente nulla totam neque eum
                      veniam.
                    </p>
                  </div>
                  <div>
                    <h1>When comes Stretching Your Time.</h1>
                    <ul>
                      <li>Saturday-Sunday: 8:00am - 10:00am</li>
                      <li>Monday-Tuesday: 10:00am - 12:00pm</li>
                      <li>Wednesday-Friday: 3:00pm - 6:00pm</li>
                    </ul>
                  </div>
                </div>
                <div className="yogaImg">
                  <img
                    src="./images/stret.webp"
                    alt="yoga"
                    height="300"
                    width="350"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Classes;
