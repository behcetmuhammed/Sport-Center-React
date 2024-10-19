import React from "react";
import "../css/contact.css";

function Contect() {
  return (
    <div>
      <section id="contact">
        {/* <!--! Title--> */}
        <h2 className="section-title">CONTACT US</h2>
        <div className="section-line"></div>
        <p className="section-description">
          Lorem Ipsum is not simply random text. It has roots in a piece of
          classical <br />
          at Hampden-Sydney College.
        </p>
        {/* <!--! Contact Contant--> */}
        <div className="contactContant">
          <div className="contactForm">
            <form action="#" name="contact_form">
              <div className="communicationTools">
                {/* <!--* Mobil and Email info--> */}
                <div className="comTools1">
                  <div className="mobileNumber">
                    <label className="labelTools">Mobile Number</label>
                    <br />
                    <label>+90 111 222 33 44</label>
                  </div>
                  <div className="emailAddress">
                    <label className="labelTools">Email Address</label>
                    <br />
                    <label>demo@demo.com</label>
                  </div>
                </div>
                {/* <!--* User form--> */}
                <div className="comTools2">
                  <h3>Make An Appointment</h3>
                  {/* <!--name--> */}
                  <div className="inputArea">
                    <input
                      name="first_name"
                      type="text"
                      required
                      placeholder="Your Name"
                    />
                    <br />
                    {/* <!--email--> */}
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="Your Email"
                    />
                    <br />
                    {/* <!--message--> */}
                    <textarea
                      name="message"
                      cols="30"
                      rows="5"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="contactMap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48159.30798205144!2d28.950826488834103!3d41.026202180651275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9e7a7777c43%3A0x4c76cf3dcc8b330b!2sGalata%20Kulesi!5e0!3m2!1str!2str!4v1728043588542!5m2!1str!2str"
              width="400"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contect;
