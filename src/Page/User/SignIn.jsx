import React from "react";
import CloseIcon from '@mui/icons-material/Close';

function SignIn() {
    return(
      <div>
      <div className="container-fluid px-3">
      <div className="row min-vh-100">
        <div className="col-md-8 col-lg-6 col-xl-5 d-flex align-items-center">
          <div className="w-100 py-5 px-md-5 px-xxl-6 position-relative">
            <div className="mb-5"><img className="img-fluid mb-3" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/logo-square.svg" alt="..." style={{maxWidth: "4rem"}}/>
              <h2>Welcome back</h2>
            </div>
            <form className="form-validate">
              <div className="mb-4">
                <label className="form-label" for="loginUsername"> Email Address</label>
                <input className="form-control" name="loginUsername" id="loginUsername" type="email" placeholder="name@address.com" autocomplete="off" required data-msg="Please enter your email"/>
              </div>
              <div className="mb-4">
                <div className="row">
                  <div className="col">
                    <label className="form-label" for="loginPassword"> Password</label>
                  </div>
                  <div className="col-auto"><a className="form-text small text-primary" href="#">Forgot password?</a></div>
                </div>
                <input className="form-control" name="loginPassword" id="loginPassword" placeholder="Password" type="password" required data-msg="Please enter your password"/>
              </div>
              <div className="mb-4">
                <div className="form-check">
                  <input className="form-check-input" id="loginRemember" type="checkbox"/>
                  <label className="form-check-label text-muted" for="loginRemember"> <span className="text-sm">Remember me for 30 days</span></label>
                </div>
              </div>
              {/* <!-- Submit--> */}
              <div className="d-grid">
                <button className="btn btn-lg btn-primary">Sign in</button>
              </div>
              <hr className="my-3 hr-text letter-spacing-2" data-content="OR"/>
              <div className="d-grid gap-2">
                <button className="btn btn btn-outline-primary btn-social"><i className="fa-2x fa-facebook-f fab btn-social-icon"> </i>Connect <span className="d-none d-sm-inline">with Facebook</span></button>
                <button className="btn btn btn-outline-muted btn-social"><i className="fa-2x fa-google fab btn-social-icon"> </i>Connect <span className="d-none d-sm-inline">with Google</span></button>
              </div>
              <hr className="my-4"/>
              <p className="text-center"><small className="text-muted text-center">Don't have an account yet? <a href="signup.html">Sign Up                </a></small></p>
            </form><a className="close-absolute me-md-5 me-xl-6 pt-5" href="/"> 
            <CloseIcon className=" w-2rem h-2rem" xlinkHref="#close-1"/></a>
          </div>
        </div>
        <div className="col-md-4 col-lg-6 col-xl-7 d-none d-md-block">
          {/* <!-- Image--> */}
          <div className="bg-cover h-100 me-n3" style={{backgroundImage: `url("https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1497436072909-60f360e1d4b1.jpg")`}}></div>
        </div>
      </div>
    </div>
    <button className="btn btn-primary btn-sm d-none" type="button" data-bs-toggle="collapse" data-bs-target="#style-switch" id="style-switch-button">
      <svg className="svg-icon svg-icon-md">
        <use xlinkHref="#configuration-1"> </use>
      </svg>
    </button>
    <div className="collapse" id="style-switch">
      <div className="p-4">
        <h6 className="text-uppercase mb-4">Select theme colour</h6>
        <form className="mb-3">
          <select className="form-select style-switch-select" name="colour" id="colour">
            <option value="">select colour variant</option>
            <option value="css/style.default.4758a82d.css">blue</option>
            <option value="css/style.pink.cad18997.css">pink</option>
            <option value="css/style.green.10d4dc04.css">green</option>
            <option value="css/style.red.e7e8cbcc.css">red</option>
            <option value="css/style.violet.f8d1dbc8.css">violet</option>
            <option value="css/style.sea.e4eeb056.css">sea</option>
          </select>
        </form>
        <p className="text-muted text-xs mb-0">Stylesheet switching in this demo is done with JavaScript and can cause a blink while page loads. This will not happen in your production code.</p>
      </div>
    </div>
    </div>
    );
}

export default SignIn;