import React from "react";
import { FaInstagram , FaFacebook, FaYoutube } from 'react-icons/fa';

const Footer2 = () => {
  return (
    <div className="hero3 mt-5">
      <div className="container">
        <div className="row py-5">
          <div className=" text-lg-start col-lg-4 col-sm-12 col-md-4 text-sm-center text-md-start text-center col-12">
            <h3>Mudaraba</h3>
            <p className="mt-5 fs-5"> 
              Our company will go the extra mile to analyze the particular​Based
              on the Capital Market Law issued by Royal Decree.
            </p>
          </div>
          <div className="col-lg-3 col-sm-12 col-md-3 mt-sm-3 mt-md-0 mt-lg-0 mt-3 col-12 text-lg-start fs-5 lh-lg text-sm-center text-md-start text-center">
            <ul className="list-unstyled ">
                <li>Sectors</li>
                <li>Services</li>
                <li>Opportunities</li>
                <li>Investment Guide
</li>
<li>Financing Products
</li>
                
            </ul>
          </div>
          <div className="col-lg-2 col-sm-12 col-md-2 mt-sm-3 mt-md-0 mt-lg-0 mt-3 col-12 text-lg-start fs-5 lh-lg text-sm-center text-md-start text-center">
            <ul className="list-unstyled ">
                <li>Who we are</li>
                <li>Terms and Conditions</li>
                <li>How it works?</li>
                <li>Contact us
</li>
                
            </ul>
          </div>
          <div className="col-lg-3 col-sm-12 col-md-3 mt-sm-3 mt-md-0 mt-lg-0 mt-3 text-md-start text-center col-12 text-lg-end text-sm-center">
          <h3>Follow Us</h3>
          <div className="d-flex justify-content-md-end justify-content-lg-end justify-content-center gap-4 mt-3 justify-content-sm-center ">
          <h3><FaFacebook/></h3>
            <h3><FaInstagram/></h3>
            <h3><FaYoutube/></h3></div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
