import React from "react";

function Section1() {
    return(
        <section className="d-flex align-items-center dark-overlay bg-cover" style={{backgroundImage: `url("https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80")`}}>
        <div className="container py-6 py-lg-7 text-white overlay-content">
          <div className="row">
            <div className="col-xl-8">
              <h1 className="display-3 fw-bold text-shadow">Let us guide you home</h1>
              <p className="text-lg text-shadow mb-6">Uncover the best offers on the real estate market.</p>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Section1;