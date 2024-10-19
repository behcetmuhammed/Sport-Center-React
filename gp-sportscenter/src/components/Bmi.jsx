import React from "react";
import "../css/bmi-calculator.css";

function Bmi() {
  return (
    <div>
      <section id="bmi" className="bmiArea">
        {/* <!--! BMI Calculator--> */}
        <div className="bmiCalculator">
          <h3>BMI Calculator</h3>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
          <form id="bmi-form">
            <input
              style={{ flex: 1 }}
              type="number"
              id="height"
              placeholder="Your height"
              required
            />
            <label htmlFor="height">cm</label>
            <input
              style={{ flex: 1 }}
              type="number"
              id="weight"
              placeholder="Your Weight"
              required
            />
            <label htmlFor="weight">kg</label>
            <br />
          </form>
        </div>
        {/* <!--! Your BMI--> */}
        <div className="yourBmi">
          <div className="valueBmi">
            <div id="bmi-result"></div>
          </div>
          <img
            src="./images/bmi-index.jpg"
            alt="BMI stats"
            height="200"
            width="350"
          />
          {/* <!-- Arrows --> */}
          <div className="arrows">
            <div id="underweight-arrow" className="bmi-arrow"></div>
            <div id="normal-arrow" className="bmi-arrow"></div>
            <div id="overweight-arrow" className="bmi-arrow"></div>
            <div id="obese-arrow" className="bmi-arrow"></div>
            <div id="extremely-obese-arrow" className="bmi-arrow"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Bmi;
