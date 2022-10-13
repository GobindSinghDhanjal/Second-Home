import React from "react";
import Form from "./Form";
import CloseIcon from '@mui/icons-material/Close';

function Container() {
    return(
        <div className="container-fluid px-3">
        <div className="row min-vh-100">
          <div className="col-md-8 col-lg-6 col-xl-5 d-flex align-items-center">
            <div className="w-100 py-5 px-md-5 px-xxl-6 position-relative">
              <div className="mb-4"><img className="img-fluid mb-4" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/logo-square.svg" alt="..." style={{maxWidth: "4rem"}}/>
                <h2>Sign up</h2>
                <p className="text-muted">His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table.</p>
              </div>
              <form className="form-validate">
                <div className="mb-4">
                  <label className="form-label" for="loginUsername"> Email Address</label>
                  <input className="form-control" name="loginUsername" id="loginUsername" type="email" placeholder="name@address.com" autocomplete="off" required data-msg="Please enter your email"/>
                </div>
                <div className="mb-4">
                  <label className="form-label" for="loginPassword"> Password</label>
                  <input className="form-control" name="loginPassword" id="loginPassword" placeholder="Password" type="password" required data-msg="Please enter your password"/>
                </div>
                <div className="mb-4">
                  <label className="form-label" for="loginPassword2"> Confirm your password</label>
                  <input className="form-control" name="loginPassword2" id="loginPassword2" placeholder="Password" type="password" required data-msg="Please enter your password"/>
                </div>
                <div className="d-grid gap-2">
                  <button className="btn btn-lg btn-primary" type="submit">Sign up</button>
                </div>
                <hr className="my-3 hr-text letter-spacing-2" data-content="OR" />
                <div className="d-grid gap-2">
                  <button className="btn btn btn-outline-primary btn-social"><i className="fa-2x fa-facebook-f fab btn-social-icon"> </i>Connect <span className="d-none d-sm-inline">with Facebook</span></button>
                  <button className="btn btn btn-outline-muted btn-social"><i className="fa-2x fa-google fab btn-social-icon"> </i>Connect <span className="d-none d-sm-inline">with Google</span></button>
                </div>
                <hr className="my-4" />
                <p className="text-sm text-muted">By signing up you agree to Directory's <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a>.</p>
              </form><a className="close-absolute me-md-5 me-xl-6 pt-5" href="/"> 
                <CloseIcon className="w-2rem h-2rem" xlinkHref="#close-1" />
                {/* <svg className="svg-icon w-3rem h-3rem">
                  <use xlinkHref="#close-1"> </use>
                </svg> */}
                </a>
            </div>
          </div>
          <div className="col-md-4 col-lg-6 col-xl-7 d-none d-md-block">
            {/* <!-- Image--> */}
            <div className="bg-cover h-100 me-n3" style={{backgroundImage: `url("https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1497436072909-60f360e1d4b1.jpg")`}}></div>
          </div>
        </div>
      </div>
    );
}

export default Container;