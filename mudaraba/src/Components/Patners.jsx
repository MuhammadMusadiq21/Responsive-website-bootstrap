import React from 'react'

const Patners = () => {
  return (
    <div className='container'>
        <h2 className='text-center fw-semibold mt-5 mb-5 slider'>Partners and Sponsors</h2>

        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner ">
    <div className="carousel-item active">
      <img src="images/img.jpg" className="d-block w-100"  />
    </div>
    <div className="carousel-item">
      <img src="images/img.jpg" className="d-block w-100" />
    </div>
    <div className="carousel-item">
      <img src="images/img.jpg" className="d-block w-100" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </div>
  )
}

export default Patners