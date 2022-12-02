import React from "react";
import Header from "../subComponents/Header";
import BusinessIcon from "@mui/icons-material/Business";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

function Contact() {

  function onFormSubmit(e) {
    e.preventDefault();

    alert("Your Form has been submitted");
    
  }
  return (
    <div>
      <Header />
      <section className="hero py-6 py-lg-7 text-white dark-overlay">
        <img
          className="bg-image"
          src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1522143049013-2519756a52d4.jpg"
          alt="How can we help you today?"
        />
        <div className="container overlay-content">
          {/* <!-- Breadcrumbs --> */}
          <ol className="breadcrumb text-white justify-content-center no-border mb-0">
            <li className="breadcrumb-item">
              <a href="index-2.html">Home</a>
            </li>
            <li className="breadcrumb-item active">Contact </li>
          </ol>
          <h1 className="hero-heading">How can we help you today?</h1>
        </div>
      </section>
      <section className="py-6">
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-center text-md-start mb-4 mb-md-0">
              <div className="icon-rounded mb-4 bg-primary-light">
                <BusinessIcon
                  className="w-2rem h-2rem"
                  style={{ color: "#4E66F8" }}
                />
              </div>
              <h3 className="h5">Address</h3>
              <p className="text-muted">
                <strong> North India</strong>
                <br />
                Model Town, North West District <br />
                New Delhi <br />
                India - 110009
                <br />
                <br />
                <strong> South India</strong> <br />
                Prestige Shantiniketan, Whitefield <br /> ITPL Main Road <br />
                Bengaluru, Karnataka <br />
                India - 560066
              </p>
            </div>
            <div className="col-md-4 text-center text-md-start mb-4 mb-md-0">
              <div className="icon-rounded mb-4 bg-primary-light">
                <HeadphonesOutlinedIcon
                  className="w-2rem h-2rem"
                  style={{ color: "#4E66F8" }}
                />
              </div>
              <h3 className="h5">Phone</h3>
              <p className="text-muted">
                <strong>+91 7829689922</strong>
              </p>
            </div>
            <div className="col-md-4 text-center text-md-start mb-4 mb-md-0">
              <div className="icon-rounded mb-4 bg-primary-light">
                <EmailOutlinedIcon
                  className="w-2rem h-2rem"
                  style={{ color: "#4E66F8" }}
                />
              </div>
              <h3 className="h5">Email</h3>
              <p className="text-muted">
                Please feel free to write an email to us .
              </p>
              <ul className="list-unstyled text-muted">
                <li>contact@daalohas.com</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-6 bg-gray-100">
        <div className="container">
          <h2 className="h4 mb-5">Contact form</h2>
          <div className="row">
            <div className="col-md-7 mb-5 mb-md-0">
              {/* <form
                className="form"
                id="contact-form"
                method="post"
                action="https://demo.bootstrapious.com/directory/2-0/contact.php"
              > */}
              <form
                className="form"
                id="contact-form"
                action="https://crm.zoho.in/crm/WebToLeadForm"
                name="WebToLeads378782000000615008"
                method="POST"
                onSubmit='javascript:document.charset="UTF-8"; return checkMandatory378782000000615008()'
                accept-charset="UTF-8"
              >
                <input
                  type="text"
                  style={{ display: "none" }}
                  name="xnQsjsdp"
                  defaultValue="226260fedf5402676c60581b4a97c9f56eabf8734351416ef7a129ea0fdfc89c"
                ></input>
                <input
                  type="hidden"
                  name="zc_gad"
                  id="zc_gad"
                  defaultValue=""
                ></input>
                <input
                  type="text"
                  style={{ display: "none" }}
                  name="xmIwtLD"
                  defaultValue="44a545cab1237b57b863be014a80ac83fdf221b372a4d010aafe3e56f2f60270"
                ></input>
                <input
                  type="text"
                  style={{ display: "none" }}
                  name="actionType"
                  defaultValue="TGVhZHM="
                ></input>
                <input
                  type="text"
                  style={{display:"none"}}
                  name="returnURL"
                  defaultValue="https&#x3a;&#x2f;&#x2f;www.thealohas.com"
                >
                </input>

                <div className="controls">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="mb-4">
                        <label className="form-label" htmlFor="surname">
                          Your Name *
                        </label>
                        <input
                         className="form-control p-2"
                         required
                          type="text"
                          id="Last_Name"
                          name="Last Name"
                          maxLength="80"
                          placeholder="Enter your Name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                  <div className="col-sm-6">
                  <div className="mb-4">
                    <label className="form-label" htmlFor="email">
                      Your email *
                    </label>
                    <input
                      required
                      className="form-control p-2"
                      placeholder="Enter your Email"
                      type="email"
                      ftype="email"
                      id="Email"
                      name="Email"
                      maxLength="100"
                    ></input>
                  </div>
                  </div>
                  </div>
                  <div className="row">
                  <div className="col-sm-6">
                  <div className="mb-4">
                    <label className="form-label" htmlFor="phone">
                      Your phone *
                    </label>
                    <input
                      required
                      className="form-control p-2"
                      placeholder="Enter your Phone"             
                      maxLength="15"
                      type='text' id='Mobile' name='Mobile'
                    ></input>
                    
                  </div>
                  </div>
                  </div>
                  <button className="btn btn-outline-primary" type="submit">
                    Send message
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-5">
              <div className="ps-lg-4 text-sm">
                <p className="text-muted">
                  Effects present letters inquiry no an removed or friends.
                  Desire behind latter me though in. Supposing shameless am he
                  engrossed up additions. My possible peculiar together to.
                  Desire so better am cannot he up before points. Remember
                  mistaken opinions it pleasure of debating. Court front maids
                  forty if aware their at. Chicken use are pressed removed.{" "}
                </p>
                <p className="text-muted">
                  Able an hope of body. Any nay shyness article matters own
                  removal nothing his forming. Gay own additions education
                  satisfied the perpetual. If he cause manor happy. Without
                  farther she exposed saw man led. Along on happy could cease
                  green oh.{" "}
                </p>
                <div className="social">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a
                        href="https://twitter.com/alohahomesindia"
                        target="_blank"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="https://www.facebook.com/daalohas"
                        target="_blank"
                      >
                        <i className="fab fa-facebook"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="https://www.instagram.com/daalohas/"
                        target="_blank"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="https://www.linkedin.com/company/daalohas/"
                        target="_blank"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="https://www.youtube.com/channel/UC0JHWCKp-bsehUPF6D7ff5A"
                        target="_blank"
                      >
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
