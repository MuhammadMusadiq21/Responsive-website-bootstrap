import React from "react";

const Righttext = () => {
  return (

    <div className="hero2 pt-5">
        <div className="container-fluid">
      <div
        className="row p-5"
      >
         <div className="col-lg-6 col-sm-12 ">
          <img
            src="images/img.jpg"
            className="img-fluid"
          ></img>
          
        </div>
        <div className="col-lg-6 col-sm-12 mt-lg-3 mt-md-5 mt-sm-5 mt-5">
            <h1 className="text-start fs-3 lead fw-semibold ms-sm-0 ">About The Shari'a Advisor
of the Company</h1>
          <p className="lead lh-sm fs-5 text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sunt
            fugiat sint iure cumque voluptates consequuntur ad adipisci, quos
            qui perferendis non saepe, at recusandae, et cupiditate eveniet ex
            sapiente. 
          </p>
          <button
        class="mt-3 btn bg-none border border-dark text-dark ps-4 pe-4 rounded rounded-1 d-flex justify-content-start"
        type="button"
      >
        Learn More
      </button>
        </div>
      </div>
      </div>
     </div>
      
  );
};

export default Righttext;
