import React from "react";
import "../css/trainers.css";

function Trainers() {
  return (
    <div>
      <section id="trainers">
        {/* <!--! Title--> */}
        <h2 class="section-title">OUR BEST TRAINERS</h2>
        <div class="section-line"></div>
        <p class="section-description">
          Lorem Ipsum is not simply random text. It has roots in a piece of
          classical <br />
          at Hampden-Sydney College.
        </p>
        {/* <!--! İmage Area--> */}
        <div class="trainerImg">
          <div class="trainer">
            <img src="./images/trainer1.jpg" alt="trainer1" />
            <div class="trainer-name">
              <p class="name">John Doe</p>
              <p class="title">Cardio Trainer</p>
            </div>
            <div class="border-left"></div>
            <div class="border-right"></div>
          </div>
          <div class="trainer">
            <img src="./images/trainer2.jpg" alt="trainer2" />
            <div class="trainer-name">
              <p class="name">John Doe</p>
              <p class="title">Cardio Trainer</p>
            </div>
            <div class="border-left"></div>
            <div class="border-right"></div>
          </div>
          <div class="trainer">
            <img src="./images/trainer3.jpg" alt="trainer3" />
            <div class="trainer-name">
              <p class="name">John Doe</p>
              <p class="title">Cardio Trainer</p>
            </div>
            <div class="border-left"></div>
            <div class="border-right"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Trainers;
