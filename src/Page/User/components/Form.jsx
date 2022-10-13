import React from "react";

function Form() {
    return(
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
          <input className="form-control" name="loginPassword2" id="loginPassword2" placeholder="Password" type="password" required data-msg="Please enter your password/"/>
        </div>
        <div className="d-grid gap-2">
          <button className="btn btn-lg btn-primary" type="submit">Sign up</button>
        </div>
        <hr className="my-3 hr-text letter-spacing-2" data-content="OR"/>
        <div className="d-grid gap-2">
          <button className="btn btn btn-outline-primary btn-social"><i className="fa-2x fa-facebook-f fab btn-social-icon"> </i>Connect <span className="d-none d-sm-inline">with Facebook</span></button>
          <button className="btn btn btn-outline-muted btn-social"><i className="fa-2x fa-google fab btn-social-icon"> </i>Connect <span className="d-none d-sm-inline">with Google</span></button>
        </div>
        <hr className="my-4"/>
        <p className="text-sm text-muted">By signing up you agree to Directory's <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a>.</p>
      </form>
    );
}

export default Form;
