import React from "react";

function DividerSection2() {
    return(
        <section className="py-6">
        <div className="container">
          <div className="row mb-lg-6">
            <div className="col-md-8">
              <p className="subtitle text-secondary">Who are we?</p>
              <h2 className="mb-md-0">Meet our team</h2>
            </div>
            <div className="col-md-4 d-md-flex align-items-center justify-content-end"><a className="text-muted text-sm" href="team.html">
                 Meet us all<i className="fas fa-angle-double-right ms-2"></i></a></div>
          </div>
          <div className="row">
            <div className="mb-3 mb-lg-0 col-sm-6 col-lg-3">
              <div className="card border-0 hover-animate bg-transparent"><a className="position-relative" href="#"><img className="card-img-top team-img" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/avatar/agent-0.png" alt=""/>
                  <div className="team-circle bg-secondary-light"></div></a>
                <div className="card-body team-body text-center">
                  <h6 className="card-title">Meredith Goodwin</h6>
                  <p className="card-subtitle text-muted text-xs text-uppercase">CEO &amp; Founder    </p>
                </div>
              </div>
            </div>
            <div className="mb-3 mb-lg-0 col-sm-6 col-lg-3">
              <div className="card border-0 hover-animate bg-transparent"><a className="position-relative" href="#"><img className="card-img-top team-img" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/avatar/agent-1.png" alt=""/>
                  <div className="team-circle bg-secondary-light"></div></a>
                <div className="card-body team-body text-center">
                  <h6 className="card-title">Weeks Garrett</h6>
                  <p className="card-subtitle text-muted text-xs text-uppercase">Co-founder    </p>
                </div>
              </div>
            </div>
            <div className="mb-3 mb-lg-0 col-sm-6 col-lg-3">
              <div className="card border-0 hover-animate bg-transparent"><a className="position-relative" href="#"><img className="card-img-top team-img" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/avatar/agent-2.png" alt=""/>
                  <div className="team-circle bg-secondary-light"></div></a>
                <div className="card-body team-body text-center">
                  <h6 className="card-title">Fisher Bauer</h6>
                  <p className="card-subtitle text-muted text-xs text-uppercase">CTO    </p>
                </div>
              </div>
            </div>
            <div className="mb-3 mb-lg-0 col-sm-6 col-lg-3">
              <div className="card border-0 hover-animate bg-transparent"><a className="position-relative" href="#"><img className="card-img-top team-img" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/avatar/agent-3.png" alt=""/>
                  <div className="team-circle bg-secondary-light"></div></a>
                <div className="card-body team-body text-center">
                  <h6 className="card-title">Aguilar Webb</h6>
                  <p className="card-subtitle text-muted text-xs text-uppercase">Community    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default DividerSection2;