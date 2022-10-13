import React from "react";
import Header from "../components/Header";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

function PersonalInfo() {
    return(
        <div>
            <Header />
            <hr />
            <hr />
            <hr />
            <section className="py-5">
      <div className="container">
        {/* <!-- Breadcrumbs --> */}
        <ol className="breadcrumb ps-0  justify-content-start">
          <li className="breadcrumb-item"><a href="index-2.html">Home</a></li>
          <li className="breadcrumb-item"><a href="user-account.html">Account</a></li>
          <li className="breadcrumb-item active">Personal info   </li>
        </ol>
        <h1 className="hero-heading mb-0">Personal info</h1>
        <p className="text-muted mb-5">Manage your Personal info and settings here.</p>
        <div className="row">
          <div className="col-lg-7 mb-5 mb-lg-0">
            <div className="text-block"> 
              <div className="row mb-3">
                <div className="col-sm-9">
                  <h5>Personal Details</h5>
                </div>
                <div className="col-sm-3 text-end">
                  <button className="btn btn-link ps-0 text-primary collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#personalDetails" aria-expanded="false" aria-controls="personalDetails">Update</button>
                </div>
              </div>
              <p className="text-sm text-muted"><i className="fa fa-id-card fa-fw me-2"></i>John Doe<br /><i className="fa fa-birthday-cake fa-fw me-2"></i>06/22/1980<br /><i className="fa fa-envelope-open fa-fw me-2"></i>john.doe@directory.com  <span className="mx-2"> | </span>  <i className="fa fa-phone fa-fw me-2"></i>+42055544466</p>
              <div className="collapse" id="personalDetails">
                <form action="#">
                  <div className="row pt-4">
                    <div className="mb-4 col-md-6">
                      <label className="form-label" for="name">Name</label>
                      <input className="form-control" type="text" name="name" id="name" value="John Doe"/>
                    </div>
                    <div className="mb-4 col-md-6">
                      <label className="form-label" for="date">Date of birth</label>
                      <input className="form-control" type="text" name="date" id="date" value="06/22/1980"/>
                    </div>
                    <div className="mb-4 col-md-6">
                      <label className="form-label" for="email">Email address</label>
                      <input className="form-control" type="email" name="email" id="email" value="john.doe@directory.com"/>
                    </div>
                    <div className="mb-4 col-md-6">
                      <label className="form-label" for="phone">Phone number</label>
                      <input className="form-control" type="text" name="phone" id="phone" value="+42055544466"/>
                    </div>
                  </div>
                  <button className="btn btn-outline-primary mb-4" type="submit">Save your personal details</button>
                </form>
              </div>
            </div>
            <div className="text-block"> 
              <div className="row mb-3">
                <div className="col-sm-9">
                  <h5>Address</h5>
                </div>
                <div className="col-sm-3 text-end">
                  <button className="btn btn-link ps-0 text-primary collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#address" aria-expanded="false" aria-controls="address">Change</button>
                </div>
              </div>
              <div className="d-flex text-sm text-muted"> <i className="fa fa-address-book fa-fw flex-shrink-0 me-2"></i>
                <div className="mt-n1">123 Main St., Apt #7<br />San Francisco, CA, 902 10</div>
              </div>
              <div className="collapse" id="address">
                <form action="#">
                  <div className="row pt-4">
                    <div className="mb-4 col-md-6">
                      <label className="form-label" for="street">Street</label>
                      <input className="form-control" type="text" name="street" id="street" value="123 Main St."/>
                    </div>
                    <div className="mb-4 col-md-6">
                      <label className="form-label" for="apt">Apt. (optional)</label>
                      <input className="form-control" type="text" name="apt" id="apt" value="Apt #7"/>
                    </div>
                    <div className="mb-4 col-md-6">
                      <label className="form-label" for="city">City</label>
                      <input className="form-control" type="text" name="city" id="city" value="San Francisco"/>
                    </div>
                    <div className="mb-4 col-md-6">
                      <label className="form-label" for="state">State</label>
                      <select className="selectpicker form-control" name="state" id="state" data-style="btn-selectpicker">
                        <option value="state_0">Alabama    </option>
                        <option value="state_1">Alaska    </option>
                        <option value="state_2">Arizona    </option>
                        <option value="state_3">Arkansas    </option>
                        <option value="state_4" selected>California    </option>
                        <option value="state_5">Colorado    </option>
                        <option value="state_6">Connecticut    </option>
                        <option value="state_7">Delaware    </option>
                        <option value="state_8">Florida    </option>
                        <option value="state_9">Georgia    </option>
                        <option value="state_10">Hawaii    </option>
                        <option value="state_11">Idaho    </option>
                        <option value="state_12">Illinois    </option>
                        <option value="state_13">Indiana    </option>
                        <option value="state_14">Iowa    </option>
                        <option value="state_15">Kansas    </option>
                        <option value="state_16">Kentucky    </option>
                        <option value="state_17">Louisiana    </option>
                        <option value="state_18">Maine    </option>
                        <option value="state_19">Maryland    </option>
                        <option value="state_20">Massachusetts    </option>
                        <option value="state_21">Michigan    </option>
                        <option value="state_22">Minnesota    </option>
                        <option value="state_23">Mississippi    </option>
                        <option value="state_24">Missouri    </option>
                        <option value="state_25">Montana    </option>
                        <option value="state_26">Nebraska    </option>
                        <option value="state_27">Nevada    </option>
                        <option value="state_28">New Hampshire    </option>
                        <option value="state_29">New Jersey    </option>
                        <option value="state_30">New Mexico    </option>
                        <option value="state_31">New York    </option>
                        <option value="state_32">North Carolina    </option>
                        <option value="state_33">North Dakota    </option>
                        <option value="state_34">Ohio    </option>
                        <option value="state_35">Oklahoma    </option>
                        <option value="state_36">Oregon    </option>
                        <option value="state_37">Pennsylvania    </option>
                        <option value="state_38">Rhode Island    </option>
                        <option value="state_39">South Carolina    </option>
                        <option value="state_40">South Dakota    </option>
                        <option value="state_41">Tennessee    </option>
                        <option value="state_42">Texas    </option>
                        <option value="state_43">Utah    </option>
                        <option value="state_44">Vermont    </option>
                        <option value="state_45">Virginia    </option>
                        <option value="state_46">Washington    </option>
                        <option value="state_47">West Virginia    </option>
                        <option value="state_48">Wisconsin    </option>
                        <option value="state_49">Wyoming    </option>
                      </select>
                    </div>
                    <div className="mb-4 col-md-6">
                      <label className="form-label" for="zip">ZIP</label>
                      <input className="form-control" type="text" name="zip" id="zip" value="902 10"/>
                    </div>
                  </div>
                  <button className="btn btn-outline-primary">Save address</button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-8 col-lg-4 ms-lg-auto">
            <div className="card border-0 shadow">
              <div className="card-header bg-primary-light py-4 border-0">
                <div className="d-flex align-items-center">
                  <div>
                    <h4 className="h6 subtitle text-sm text-primary">What info is shared with others?</h4>
                  </div>
                  <PermIdentityIcon className="svg-icon svg-icon svg-icon-light w-3rem h-3rem ms-3 text-primary flex-shrink-0" xlinkHref="#identity-1"/>
                </div>
              </div>
              <div className="card-body p-4">
                <p className="text-muted text-sm card-text">Directory only releases contact information for hosts and guests <strong>after a reservation is confirmed</strong>.</p>
                <p className="text-muted text-sm card-text">Amet nisi eiusmod minim commodo sit voluptate aute ut quis ea veniam sunt proident ex. <strong>Exercitation culpa laboris</strong> consequat fugiat non ipsum veniam Lorem aliqua deserunt tempor elit veniam.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
}

export default PersonalInfo;