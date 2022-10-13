import React from "react";
import SecurityIcon from '@mui/icons-material/Security';
import PermIdentity from "@mui/icons-material/PermIdentity";
import PaymentsIcon from '@mui/icons-material/Payments';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LockIcon from '@mui/icons-material/Lock';
import PublicIcon from '@mui/icons-material/Public';

function AccountDetails() {
    return(
        <section className="py-5">
        <div className="container">
          {/* <!-- Breadcrumbs --> */}
          <ol className="breadcrumb ps-0  justify-content-start">
            <li className="breadcrumb-item"><a href="index-2.html">Home</a></li>
            <li className="breadcrumb-item active">Your account   </li>
          </ol>
          <h1 className="hero-heading mb-0">Your account</h1>
          <p className="text-muted mb-5">Manage your account and settings here.</p>
          <div className="row">
            <div className="col-6 col-md-4 mb-30px">
              <div className="card h-100 border-0 shadow hover-animate">
                <div className="card-body">
                  <div className="icon-rounded bg-secondary-light mb-3">
                    <PermIdentity className="text-secondary w-2rem h-2rem" xlinkHref="#identity-1"/>
                  </div>
                  <h5 className="card-title mb-3"><a className="text-decoration-none text-dark stretched-link" href="/personalInfo">Personal info</a></h5>
                  <p className="text-muted card-text text-sm">Provide personal details and how we can reach you</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 mb-30px">
              <div className="card h-100 border-0 shadow hover-animate">
                <div className="card-body">
                  <div className="icon-rounded bg-secondary-light mb-3">
                    <SecurityIcon className=" text-secondary w-2rem h-2rem" xlinkHref="#password-1"/>
                  </div>
                  <h5 className="card-title mb-3"><a className="text-decoration-none text-dark stretched-link" href="/user-security">Login &amp; security</a></h5>
                  <p className="text-muted card-text text-sm">Update your password and secure your account</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 mb-30px">
              <div className="card h-100 border-0 shadow hover-animate">
                <div className="card-body">
                  <div className="icon-rounded bg-secondary-light mb-3">
                    <PaymentsIcon className="text-secondary w-2rem h-2rem" xlinkHref="#pay-by-card-1"/>
                  </div>
                  <h5 className="card-title mb-3"><a className="text-decoration-none text-dark stretched-link" href="#">Payments &amp; payouts</a></h5>
                  <p className="text-muted card-text text-sm">Review payments, payouts, coupons, gift cards, and taxes</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 mb-30px">
              <div className="card h-100 border-0 shadow hover-animate">
                <div className="card-body">
                  <div className="icon-rounded bg-secondary-light mb-3">
                    <NotificationsActiveIcon className="text-secondary w-2rem h-2rem" xlinkHref="#chat-app-1" />
                  </div>
                  <h5 className="card-title mb-3"><a className="text-decoration-none text-dark stretched-link" href="#">Notifications</a></h5>
                  <p className="text-muted card-text text-sm">Choose notification preferences and how you want to be contacted</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 mb-30px">
              <div className="card h-100 border-0 shadow hover-animate">
                <div className="card-body">
                  <div className="icon-rounded bg-secondary-light mb-3">
                    <LockIcon className="text-secondary w-2rem h-2rem"  xlinkHref="#diary-1"/>
                  </div>
                  <h5 className="card-title mb-3"><a className="text-decoration-none text-dark stretched-link" href="#">Privacy &amp; sharing</a></h5>
                  <p className="text-muted card-text text-sm">Control connected apps, what you share, and who sees it</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 mb-30px">
              <div className="card h-100 border-0 shadow hover-animate">
                <div className="card-body">
                  <div className="icon-rounded bg-secondary-light mb-3">
                    <PublicIcon className="text-secondary w-2rem h-2rem" xlinkHref="#mix-1"/>
                  </div>
                  <h5 className="card-title mb-3"><a className="text-decoration-none text-dark stretched-link" href="#">Global preferences</a></h5>
                  <p className="text-muted card-text text-sm">Set your default language, currency, and timezone</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default AccountDetails;