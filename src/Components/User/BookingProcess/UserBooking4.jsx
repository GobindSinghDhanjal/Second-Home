import React from "react";
import Header from "../../subComponents/Header";

function UserBooking4() {
    return(
        <div>
        <Header />
        <br />
        <br />
        <div className="progress rounded-0 sticky-top" style={{height: "8px", top: "72px"}}>
      <div className="progress-bar" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <p className="subtitle text-primary">Book your holiday home</p>
            <h1 className="h2 mb-5"> Booking placed <span className="text-muted float-end">Step 4</span>      </h1>
            <div className="text-block">
              <p className="text-muted">Thank you for your booking, Ondrej. </p>
              <p className="text-muted mb-5">Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.</p>
              <p className="text-center mb-5"><a className="btn btn-primary mx-2 mb-2" href="/booking-details"> <i className="far fa-file me-2"></i>View your order</a><a className="btn btn-outline-muted mb-2" href="#">Or something else</a></p>
              <p className="mb-5 text-center"><img className="img-fluid" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/illustration/undraw_celebration_0jvk.svg" alt="" style={{width: "400px"}}/></p>
            </div>
          </div>
          <div className="col-lg-5 ps-xl-5">
            <div className="card border-0 shadow">
              <div className="card-body p-4">
                <div className="text-block pb-3">
                  <div className="d-flex align-items-center">
                    <div>
                      <h6> <a className="text-reset" href="/detail-rooms">Modern Apt - Vibrant Neighborhood</a></h6>
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

export default UserBooking4;