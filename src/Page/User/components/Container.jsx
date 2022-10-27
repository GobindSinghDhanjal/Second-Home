import React, { useState } from "react";
import { useDispatch } from "react-redux"
import CloseIcon from '@mui/icons-material/Close';
import { registerTourist } from "../../../Redux/user/tourist/touristAction";

function Container() {

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const dispatch = useDispatch();

  function onSignUp(e) {

    if(password===confirmPass){

      console.log("matched");
      const postData={
        email,
        username,
        password
      }

      dispatch(registerTourist(postData));

    }else{
      console.log("not matched ");
    }
    e.preventDefault();
  }



    return(
        <div className="container-fluid px-3">
        <div className="row min-vh-100">
          <div className="col-md-8 col-lg-6 col-xl-5 d-flex align-items-center">
            <div className="w-100 py-5 px-md-5 px-xxl-6 position-relative">
              <div className="mb-4"><img className="img-fluid mb-4" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/logo-square.svg" alt="..." style={{maxWidth: "4rem"}}/>
                <h2>Sign up</h2>
                <p className="text-muted">His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table.</p>
              </div>
              <form className="form-validate" onSubmit={onSignUp}>
                <div className="mb-4">
                  <label className="form-label" for="loginEmail"> Email Address</label>
                  <input className="form-control" name="loginEmail" 
                   value={email} onChange={(e)=>setEmail(e.target.value)} id="loginEmail" type="email" placeholder="name@address.com" autocomplete="off" required data-msg="Please enter your email"/>
                </div>
                <div className="mb-4">
                  <label className="form-label" for="loginUsername"> Username</label>
                  <input className="form-control" name="loginUsername" 
                  value={username} onChange={(e)=>setUsername(e.target.value)} id="loginUsername" type="username" placeholder="username" autocomplete="off" required data-msg="Please enter your username"/>
                </div>
                <div className="mb-4">
                  <label className="form-label" for="loginPassword"> Password</label>
                  <input className="form-control" name="loginPassword"
                  value={password} onChange={(e)=>setPassword(e.target.value)} id="loginPassword" placeholder="Password" type="password" required data-msg="Please enter your password"/>
                </div>
                <div className="mb-4">
                  <label className="form-label" for="loginPassword2"> Confirm your password</label>
                  <input className="form-control" name="loginPassword2"
                  value={confirmPass} onChange={(e)=>setConfirmPass(e.target.value)} id="loginPassword2" placeholder="Password" type="password" required data-msg="Please enter your password"/>
                </div>
                <div className="d-grid gap-2">
                  <button className="btn btn-lg btn-primary" type="submit">Sign up</button>
                </div>
                <hr className="my-3 hr-text letter-spacing-2" data-content="OR" />
                <div className="d-grid gap-2">
                  <button type="button" className="btn btn btn-outline-primary btn-social"><i className="fa-2x fa-facebook-f fab btn-social-icon"> </i>Connect <span className="d-none d-sm-inline">with Facebook</span></button>
                  <button type="button" className="btn btn btn-outline-muted btn-social"><i className="fa-2x fa-google fab btn-social-icon"> </i>Connect <span className="d-none d-sm-inline">with Google</span></button>
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