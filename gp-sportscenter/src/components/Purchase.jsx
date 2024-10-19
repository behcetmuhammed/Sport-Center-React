import React from "react";
import "../css/purchase.css";

function Purchase() {
  return (
    <div>
      <section id="purchase">
        {/* <!--! Title Area--> */}
        <h2 className="section-title">PURCHASE FROM US</h2>
        <div className="section-line"></div>
        <p className="section-description">
          Lorem Ipsum is not simply random text. It has roots in a piece of
          classical <br />
          at Hampden-Sydney College.
        </p>
        {/* <!--! Product Card--> */}
        <div className="purchaseProducts">
          {/* <!-- İmage 1--> */}
          <div className="price-card">
            <div className="card-image">
              <img src="./images/purchase1.jpg" alt="Product Image" />
            </div>
            <div className="card-info">
              <h3>Kettlebell / 5kg</h3>
              <p>
                <s>89,99$</s> / 59,99$
              </p>
              <p>
                <i className="fa-solid fa-cart-shopping"></i>Add To Cart
              </p>
            </div>
          </div>
          {/* <!-- İmage 1--> */}
          <div className="price-card">
            <div className="card-image">
              <img src="./images/purchase2.jpg" alt="Product Image" />
            </div>
            <div className="card-info">
              <h3>Treadmill</h3>
              <p>
                <s>899,99$</s> / 599,99$
              </p>
              <p>
                <i className="fa-solid fa-cart-shopping"></i>Add To Cart
              </p>
            </div>
          </div>
          {/* <!-- İmage 1--> */}
          <div className="price-card">
            <div className="card-image">
              <img src="./images/purchase3.jpg" alt="Product Image" />
            </div>
            <div className="card-info">
              <h3>Adjustable Dumbbell</h3>
              <p>
                <s>89,99$</s> / 59,99$
              </p>
              <p>
                <i className="fa-solid fa-cart-shopping"></i>Add To Cart
              </p>
            </div>
          </div>
          {/* <!-- İmage 1--> */}
          <div className="price-card">
            <div className="card-image">
              <img src="./images/purchase4.jpg" alt="Product Image" />
            </div>
            <div className="card-info">
              <h3>Kettlebell / 3kg</h3>
              <p>
                <s>89,99$</s> / 59,99$
              </p>
              <p>
                <i className="fa-solid fa-cart-shopping"></i>Add To Cart
              </p>
            </div>
          </div>
        </div>
        {/* <!--Deneme--> */}
      </section>
    </div>
  );
}

export default Purchase;
