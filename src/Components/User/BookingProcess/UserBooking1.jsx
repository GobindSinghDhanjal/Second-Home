import React from "react";
import Header from "../../subComponents/Header";

function UserBooking1() {
    return(
        <div>
        <Header />
        <br />
        <br />
            <div className="progress rounded-0 sticky-top" style={{height: "8px", top: "72px"}}>
      <div className="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <p className="subtitle text-primary">Book your holiday home</p>
            <h1 className="h2 mb-5"> Review house rules <span className="text-muted float-end">Step 1</span>      </h1>
            <div className="text-block">
              <div className="alert alert-warning text-sm mb-3">
                <div className="d-flex align-items-center">
                  <svg className="svg-icon svg-icon svg-icon-light w-2rem h-2rem me-3 text-reset flex-shrink-0">
                    <use xlinkHref="#heart-1"> </use>
                  </svg>
                  <div><strong>This home is on people’s minds.</strong> It’s been viewed 43 times in the past week.</div>
                </div>
              </div>
            </div>
            <div className="text-block">
              <h5 className="mb-4">1 night in London</h5>
              <div className="row mb-3">
                <div className="col-md-6 d-flex align-items-center mb-3 mb-md-0">
                  <div className="date-tile me-3">
                    <div className="text-uppercase"> <span className="text-sm">Apr</span><br/><strong className="text-lg">17</strong></div>
                  </div>
                  <p className="text-sm mb-0">Wednesday check-in<br/>3PM - 7PM</p>
                </div>
                <div className="col-md-6 d-flex align-items-center">
                  <div className="date-tile me-3">
                    <div className="text-uppercase"> <span className="text-sm">Apr</span><br/><strong className="text-lg">18</strong></div>
                  </div>
                  <p className="text-sm mb-0">Thursday check-out<br/>11AM</p>
                </div>
              </div>
            </div>
            <div className="text-block">
              <h5 className="mb-4">Things to keep in mind</h5>
              <ul className="list-unstyled">
                <li className="mb-2"> 
                  <div className="d-flex align-items-center mb-3">
                    <div className="icon-rounded icon-rounded-sm bg-secondary-light flex-shrink-0 me-4"><i className="fa fas fa-child text-secondary fa-fw text-center"></i></div>
                    <div><span className="text-sm">Not suitable for children and infants - The entrance staircase doesn't have handrails</span></div>
                  </div>
                </li>
                <li className="mb-2"> 
                  <div className="d-flex align-items-center mb-3">
                    <div className="icon-rounded icon-rounded-sm bg-secondary-light flex-shrink-0 me-4"><i className="fa fas fa-glass-cheers text-secondary fa-fw text-center"></i></div>
                    <div><span className="text-sm">No parties or events</span></div>
                  </div>
                </li>
                <li className="mb-2"> 
                  <div className="d-flex align-items-center mb-3">
                    <div className="icon-rounded icon-rounded-sm bg-secondary-light flex-shrink-0 me-4"><i className="fa fa-smoking-ban text-secondary fa-fw text-center"></i></div>
                    <div><span className="text-sm">No smoking</span></div>
                  </div>
                </li>
                <li className="mb-2"> 
                  <div className="d-flex align-items-center mb-3">
                    <div className="icon-rounded icon-rounded-sm bg-secondary-light flex-shrink-0 me-4"><i className="fa fa-cat text-secondary fa-fw text-center"></i></div>
                    <div><span className="text-sm">No pets</span></div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="row form-block flex-column flex-sm-row">
              <div className="col text-center text-sm-start">
              </div>
              <div className="col text-center text-sm-end"><a className="btn btn-primary px-3" href="/user-booking-2"> Next step<i className="fa-chevron-right fa ms-2"></i></a></div>
            </div>
          </div>
          <div className="col-lg-5 ps-xl-5">
            <div className="card border-0 shadow">
              <div className="card-body p-4">
                <div className="text-block pb-3">
                  <div className="d-flex align-items-center">
                    <div>
                      <h6> <a className="text-reset" href="/detail-rooms.html">Modern Apt - Vibrant Neighborhood</a></h6>
                      <p className="text-muted text-sm mb-0">Entire home in New York</p>
                      <div className="mt-n1"><i className="fa fa-xs fa-star text-primary"></i><i className="fa fa-xs fa-star text-primary"></i><i className="fa fa-xs fa-star text-primary"></i><i className="fa fa-xs fa-star text-primary"></i><i className="fa fa-xs fa-star text-gray-200"></i>
                      </div>
                    </div><a className="flex-shrink-0" href="/detail-rooms"><img className="ms-3 rounded" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1512917774080-9991f1c4c750.jpg" alt="" width="100"/></a>
                  </div>
                </div>
                <div className="text-block py-3">
                  <ul className="list-unstyled mb-0">
                    <li className="mb-3"><i className="fas fa-users fa-fw text-muted me-2"></i>3 guests</li>
                    <li className="mb-0"><i className="far fa-calendar fa-fw text-muted me-2"></i>Apr 17, 2019 <i className="fas fa-arrow-right fa-fw text-muted mx-3"></i>Apr 18, 2019</li>
                  </ul>
                </div>
                <div className="text-block pt-3 pb-0">
                  <table className="w-100">
                    <tbody>
                      <tr>
                        <th className="fw-normal py-2">$432.02 x 1 night</th>
                        <td className="text-end py-2">$432.02</td>
                      </tr>
                      <tr>
                        <th className="fw-normal pt-2 pb-3">Service fee</th>
                        <td className="text-end pt-2 pb-3">$67.48</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr className="border-top">
                        <th className="pt-3">Total</th>
                        <td className="fw-bold text-end pt-3">$499.50</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
              <div className="card-footer bg-primary-light py-4 border-0">
                <div className="d-flex align-items-center">
                  <div>
                    <h6 className="text-primary">Flexible – free cancellation</h6>
                    <p className="text-sm text-primary opacity-8 mb-0">Cancel within 48 hours of booking to get a full refund. <a href="#" className="text-reset ms-3">More details</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
    )
}

export default UserBooking1;