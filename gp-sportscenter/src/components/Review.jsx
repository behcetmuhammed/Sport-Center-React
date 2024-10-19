import React from "react";
import "../css/review.css";

function Review() {
  return (
    <div>
      <section id="review">
        {/* <!--! Title--> */}
        <h2 className="section-title">REVİEW CLIENT</h2>
        <div className="section-line"></div>
        <p className="section-description">
          Lorem Ipsum is not simply random text. It has roots in a piece of
          classical <br />
          at Hampden-Sydney College.
        </p>
        {/* <!--! Review Content--> */}
        <div className="customerReviews">
          {/* <!--* Customer 1--> */}
          <div className="customer1Area">
            <div className="customer1">
              <img src="./images/client1.jpg" alt="client1" />
              <div className="customerInfo">
                <h3>Diew Expert</h3>
                <p>CFO</p>
              </div>
            </div>
            <div className="textBubble">
              <p className="customerText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                tenetur quis, maiores voluptatem nostrum atque voluptas
                asperiores cupiditate ut similique odio molestiae est eaque. Eum
                recusandae corrupti tempora vitae atque.
              </p>
              <div className="shapes">
                <div className="shape1"></div>
                <div className="shape2"></div>
              </div>
            </div>
          </div>
          {/* <!--* Customer 2--> */}
          <div className="customer2Area">
            <div className="customer2">
              <img src="./images/client2.jpg" alt="client2" />
              <div className="customerInfo">
                <h3>Cardio Trainer</h3>
                <p>CFO</p>
              </div>
            </div>
            <div className="textBubble">
              <p className="customerText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                tenetur quis, maiores voluptatem nostrum atque voluptas
                asperiores cupiditate ut similique odio molestiae est eaque. Eum
                recusandae corrupti tempora vitae atque.
              </p>
              <div className="shapes">
                <div className="shape1"></div>
                <div className="shape2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Review;
