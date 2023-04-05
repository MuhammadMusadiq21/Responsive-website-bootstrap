import React from "react";

const Form = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-sm-12 col-md-6 col-lg-6 col-12">
          <div className="row">
            <h1 className="text-lg-start fw-semibold text-sm-center text-md-start tex-center">Contacts</h1>
            <p className="text-lg-start fs-5 fw-normal mt-3 lead text-sm-center text-md-start tex-center">
              Thank you for your interest in Mudaraba Investment. Please email
              or call us if you need more information. We appreciate your
              feedback.
            </p>
          </div>
          <div className="row mt-3">
            <div className="col-4">
              <th className="fs-3 fw-normal">Address</th>
            </div>
            <div className="col-8 fs-5 lead">
              <td>7269 Olaya St. Al Ulaya Dist. Riyadh KSA</td>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-4">
              <th className="fs-3 fw-normal">Hours</th>
            </div>
            <div className="col-8 fs-5 lead">
              <td>Monday - Saturday: 11 AM - 9 PM Sunday: 11 AM - 7 PM</td>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-4">
              <th className="fs-3 fw-normal">Contacts</th>
            </div>
            <div className="col-8 fs-5 lead">
              <td>920033670 info@mudaraba.sa Model Town</td>
            </div>
          </div>
        </div>
        <div className="hero2 rounded-2 col-sm-12 col-md-6 mt-sm-4 col-lg-6 col-12">
       <form className="p-5"> 
  <div className="mb-3">
    <input type="email" className="form-control p-2 border-0" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Full Name*" />
  </div>
  <div className="mb-3">
    <input type="email" className="form-control p-2 border-0" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Phone Number*" />
  </div>
  <div className="mb-3">
    <input type="email" className="form-control p-2 border-0" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your e-Mail*" />
  </div>
  <div class="mb-3">
    <textarea class="form-control text-start border-0" id="validationTextarea" placeholder="Type Your message" required></textarea></div>
    <div className="d-block mt-5">
  <button className="btn btn-dark form-control" type="button">Request a Quote</button>
</div>
</form>



        </div>
      </div>
    </div>
  );
};

export default Form;
