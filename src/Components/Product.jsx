import React from "react";
import Productbox from "./Productbox";
import image1 from "../images/s1.png";
import image2 from "../images/s2.png";

function Product() {
  return (
    <div id="products">
      <h1>CHOOSE & ENJOY</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Necessitatibus, ea.
      </p>
      <div className="a-container">
        <Productbox image={image1} title="Luger Burger" />
        <Productbox image={image2} title="Lu Pigeon Burger" />
      </div>
    </div>
  );
}

export default Product;
