import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Header from "../subComponents/Header";

function Security() {

  const [currentPass, setCurrentPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const dispatch = useDispatch();

  function onUpdatePass(e) {
    const postData = {
      currentPass,
      newPass,
      confirmPass
    };
    console.log(postData);

    // e.preventDefault();
  }


    return(
        <div>
            <Header />
            <br />
            <br />
            <br />
            <section className="py-5">
      <div className="container">
        {/* <!-- Breadcrumbs --> */}
        <ol className="breadcrumb ps-0  justify-content-start">
          <li className="breadcrumb-item"><a href="index-2.html">Home</a></li>
          <li className="breadcrumb-item"><a href="user-account.html">Account</a></li>
          <li className="breadcrumb-item active">Login &amp; security   </li>
        </ol>
        <h1 className="hero-heading mb-0">Login &amp; security</h1>
        <p className="text-muted mb-5">Manage your Login & security and settings here.</p>
        <div className="row">
          <div className="col-lg-7 mb-5 mb-lg-0"> 
            <div className="text-block"> 
              <h3 className="mb-4">Login</h3>
              <div className="row">
                <div className="col-sm-8">
                  <h6>Password</h6>
                  <p className="text-sm text-muted">Last updated 3 years ago</p>
                </div>
                <div className="col text-end">
                  <button className="btn btn-link ps-0 text-primary collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#updatePassword" aria-expanded="false" aria-controls="updatePassword">Update</button>
                </div>
              </div>
              <div className="collapse" id="updatePassword">
                <div className="row mt-4">
                  <div className="mb-4 col-12">
                    <label className="form-label" htmlFor="password-current">Current Password</label>
                    <input className="form-control" type="password" name="password-current" id="password-current" value={currentPass} onChange={(e)=>setCurrentPass(e.target.value)} />
                  </div>
                  <div className="mb-4 col-md-6">
                    <label className="form-label" htmlFor="password-new">New Password</label>
                    <input className="form-control" type="password" name="password-new" id="password-new" value={newPass} onChange={(e)=>setNewPass(e.target.value)}/>
                  </div>
                  <div className="mb-4 col-md-6">
                    <label className="form-label" htmlFor="password-confirm">Confirm Password</label>
                    <input className="form-control" type="password" name="password-confirm" id="password-confirm" value={confirmPass} onChange={(e)=>setConfirmPass(e.target.value)}/>
                  </div>
                </div>
                <button className="btn btn-outline-primary" onClick={onUpdatePass}>Update Password</button>
              </div>
            </div>
            <div className="text-block"> 
              <h3 className="mb-4">Social accounts</h3>
              <div className="row">
                <div className="col-sm-8">
                  <h6>Facebook</h6>
                  <p className="text-sm text-muted">Not connected</p>
                </div>
                <div className="col text-end"><a className="btn btn-link text-primary ps-0" href="#">Connect</a></div>
              </div>
              <div className="row">
                <div className="col-sm-8">
                  <h6>Google</h6>
                  <p className="text-sm">Connected</p>
                </div>
                <div className="col text-end"><a className="btn btn-link text-primary ps-0" href="#">Disconnect</a></div>
              </div>
            </div>
            <div className="text-block">
              <h3 className="mb-4">Device history</h3>
              <div className="d-flex">
                <div className="icon-rounded bg-secondary-light flex-shrink-0">
                  <svg className="svg-icon text-secondary w-2rem h-2rem">
                    <use xlinkHref="#imac-screen-1"> </use>
                  </svg>
                </div>
                <div className="pt-2 ms-3"><strong>Windows 10.0 </strong>· Chrome
                  <div className="badge badge-secondary-light text-uppercase">Current  Session</div>
                  <p className="text-sm text-muted">Ostrava, Moravskoslezsky kraj · April 6, 2020 at 01:51pm</p><a className="btn btn-link text-primary ps-0" href="#">Log out device</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 col-lg-4 ms-lg-auto">
            <div className="card border-0 shadow">
              <div className="card-header bg-primary-light py-4 border-0">
                <div className="d-flex align-items-center">
                  <div>
                    <h4 className="h6 subtitle text-sm text-primary">Let's make your account more secure</h4>
                  </div>
                  <svg className="svg-icon svg-icon svg-icon-light w-3rem h-3rem ms-3 text-primary flex-shrink-0">
                    <use xlinkHref="#shield-security-1"> </use>
                  </svg>
                </div>
              </div>
              <div className="card-body p-4">
                <h6 className="card-text">Your account security: </h6>
                <p className="card-text mb-4"><span className="badge badge-info-light">Medium</span></p>
                <p className="text-muted card-text">We’re always working on ways to increase safety in our community. </p>
                <p className="text-muted card-text">That’s why we look at every account to make sure it’s as secure as possible.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

        </div>

    );
}

export default Security;