import React from "react";
import "../css/footer.css";

function Footer() {
  return (
    <div>
      <footer id="footer">
        {/* <!--! Logo--> */}
        <div className="footerContent">
          <div className="footerLogo">
            <img
              className="footerLogoMobil"
              src="./images/logo.png"
              alt="powerfull-logo"
            />
          </div>
          {/* <!--* Footer Text--> */}
          <div className="footerText">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
              autem quibusdam quae exercitationem adipisci, commodi sint eum
              atque dolorem amet, mollitia ea ab nobis pariatur temporibus,
              inventore eius delectus reprehenderit!
            </p>
          </div>
          {/* <!--* Footer Menu--> */}
          <div className="footerMenu">
            <div className="infoArea">
              <ul>
                <li>Information</li>
                <li>About us</li>
                <li>Classes</li>
                <li>Blog</li>
                <li>Content</li>
              </ul>
            </div>
            <div className="helpArea">
              <ul>
                <li>Helpful Links</li>
                <li>Services</li>
                <li>Supports</li>
                <li>Terms & Condition</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
