import React from "react";

const Company = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 text-center">
          <h3>About the Company</h3>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-6 text-start lead col-md-12 col-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cum
          aliquam ratione commodi consequatur perferendis ullam impedit nostrum
          iure blanditiis! Voluptate quaerat quis at soluta dolores, omnis illo
          voluptatibus consectetur, dignissimos saepe similique magni maxime
          ipsum hic vero quas culpa eligendi, sequi earum blanditiis dolore
          ratione rem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Esse at inventore quidem repellat facere perspiciatis ab suscipit.
          Quia temporibus odit minima praesentium sunt, facere sequi.
          <button
            className="btn bg-none border border-dark text-dark d-block text-start mt-5 px-4 py-2 rounded-1 mt-sm-5 mb-sm-5 mt-5 mb-5"
            type="button"
          >
            Become a Investor
          </button>
        </div>
        <div className="col-lg-6 d-md-block col-md-12 col-12">
          <img src="images/img.jpg" className="img-fluid"></img>
        </div>
      </div>
    </div>
  );
};

export default Company;
