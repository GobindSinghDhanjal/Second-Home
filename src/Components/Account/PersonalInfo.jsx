import React from "react";
import Header from "../subComponents/Header";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { useDispatch, useSelector } from "react-redux";

function PersonalInfo() {
const tourist = useSelector((state) => state.tourist.tourist);

  const dispatch = useDispatch();

  return (
    <div>
      <Header />
      <hr />
      <hr />
      <hr />
      <section className="py-5">
        <div className="container">
          {/* <!-- Breadcrumbs --> */}
          <ol className="breadcrumb ps-0  justify-content-start">
            <li className="breadcrumb-item">
              <a href="index-2.html">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="user-account.html">Account</a>
            </li>
            <li className="breadcrumb-item active">Personal info </li>
          </ol>
          <h1 className="hero-heading mb-0">Personal info</h1>
          <p className="text-muted mb-5">
            Manage your Personal info and settings here.
          </p>
          <div className="row">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <div className="text-block">
                <div className="row mb-3">
                  <div className="col-sm-9">
                    <h5>Personal Details</h5>
                  </div>
                  <div className="col-sm-3 text-end">
                    <button
                      className="btn btn-link ps-0 text-primary collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#personalDetails"
                      aria-expanded="false"
                      aria-controls="personalDetails"
                    >
                      Update
                    </button>
                  </div>
                </div>
                <p className="text-sm text-muted">
                  <i className="fa fa-id-card fa-fw me-2"></i>
                  {tourist.name}
                  <br />
                  <i className="fa fa-envelope-open fa-fw me-2"></i>
                  {tourist.email}{" "}
                  <span className="mx-2"> | </span>{" "}
                  <i className="fa fa-phone fa-fw me-2"></i>
                  {tourist.phone}
                </p>
                <div className="collapse" id="personalDetails">
                  <form action="#">
                    <div className="row pt-4">
                      <div className="mb-4 col-md-6">
                        <label className="form-label" for="name">
                          Name
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="name"
                          id="name"
                          placeholder="sadasd"
                          onChange={(e) => null}
                        />
                      </div>
                      <div className="mb-4 col-md-6">
                        <label className="form-label" for="email">
                          Email address
                        </label>
                        <input
                          className="form-control"
                          type="email"
                          name="email"
                          id="email"
                          disabled
                          value={tourist.email}
                        />
                      </div>
                      <div className="mb-4 col-md-6">
                        <label className="form-label" for="phone">
                          Phone number
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="phone"
                          id="phone"
                          disabled
                          value={tourist.phone}
                        />
                      </div>
                    </div>
                    <button
                      className="btn btn-outline-primary mb-4"
                      type="submit"
                    >
                      Save your personal details
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-8 col-lg-4 ms-lg-auto">
              <div className="card border-0 shadow">
                <div className="card-header bg-primary-light py-4 border-0">
                  <div className="d-flex align-items-center">
                    <div>
                      <h4 className="h6 subtitle text-sm text-primary">
                        What info is shared with others?
                      </h4>
                    </div>
                    <PermIdentityIcon
                      className="svg-icon svg-icon svg-icon-light w-3rem h-3rem ms-3 text-primary flex-shrink-0"
                      xlinkHref="#identity-1"
                    />
                  </div>
                </div>
                <div className="card-body p-4">
                  <p className="text-muted text-sm card-text">
                    Directory only releases contact information for hosts and
                    guests <strong>after a reservation is confirmed</strong>.
                  </p>
                  <p className="text-muted text-sm card-text">
                    Amet nisi eiusmod minim commodo sit voluptate aute ut quis
                    ea veniam sunt proident ex.{" "}
                    <strong>Exercitation culpa laboris</strong> consequat fugiat
                    non ipsum veniam Lorem aliqua deserunt tempor elit veniam.
                  </p>
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
