import React from "react";
import { Link } from "react-router-dom";

function Banner4() {
    return(
        <section className="py-7 position-relative dark-overlay"><img className="bg-image" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1497436072909-60f360e1d4b1.jpg" alt=""/>
        <div className="container">
          <div className="overlay-content text-white py-lg-5">
            <h3 className="display-3 fw-bold text-serif text-shadow mb-5">Ready for your next holidays?</h3><Link className="btn btn-light" to="category-rooms.html">Get started</Link>
          </div>
        </div>
      </section>
    );
}

export default Banner4;