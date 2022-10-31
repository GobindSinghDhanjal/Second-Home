import React from "react";

function DividerSection1() {
    return(
        <section>
        <div className="container bg-gray-100 py-6 px-3 px-lg-5 rounded-3 shadow-sm">
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0 text-center text-lg-start">
              <p className="subtitle text-secondary">Start using Directory today</p>
              <p className="text-lg">Directory is the best way to find & discover great local businesses</p>
              <p className="text-muted mb-0">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed in</p>
            </div>
            <div className="col-lg-6 d-flex align-items-center justify-content-center">
              <div className="text-center">
                <p className="mb-2"><a className="btn btn-lg btn-primary" href="#">Create Your Account</a></p>
                <p className="text-muted text-small">It's free! </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default DividerSection1;