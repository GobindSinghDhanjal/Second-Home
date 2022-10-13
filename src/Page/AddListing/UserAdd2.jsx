import React from "react";
import Header from "../components/Header";

function UserAdd2() {
    return(
        <div>
            <Header />
            <br />
            <br />

            <div className="progress rounded-0 sticky-top" style={{height: "8px", top: "72px"}}>
      <div className="progress-bar" role="progressbar" style={{width: "40%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <section className="py-5">
      <div className="container">
        <p className="subtitle text-primary">Add new listing</p>
        <h1 className="h2 mb-5"> Texts <span className="text-muted float-end">Step 2</span>      </h1>
        <form>
          <div className="row form-block">
            <div className="col-lg-4">
              <h4>Description</h4>
              <p className="text-muted text-sm"> Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.</p>
            </div>
            <div className="col-lg-7 ms-auto">
              <div className="mb-5">
                <label className="form-label" for="form_description">Describe your place to guests</label>
                <textarea className="form-control" name="name" id="form_description" rows="5" aria-describedby="descriptionHelp"></textarea><small className="form-text text-muted mt-2" id="descriptionHelp">The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. &quot;What's happened to me?&quot; he thought. It wasn't a dream.    </small>
              </div>
              <div className="mb-5">
                <label className="form-label" for="form_availability">Your availability</label>
                <textarea className="form-control" name="name" id="form_availability" rows="3" aria-describedby="availabilityHelp"></textarea><small className="form-text text-muted mt-2" id="availabilityHelp">His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table.    </small>
              </div>
              <div className="mb-5">
                <label className="form-label" for="form_neighbourhood">Your neighbourhood</label>
                <textarea className="form-control" name="name" id="form_neighbourhood" rows="3" aria-describedby="hoodHelp"></textarea><small className="form-text text-muted mt-2" id="hoodHelp">Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.    </small>
              </div>
            </div>
          </div>
          <div className="row form-block flex-column flex-sm-row">
            <div className="col text-center text-sm-start"><a className="btn btn-link text-muted" href="/user-add-1"> <i className="fa-chevron-left fa me-2"></i>Back</a>
            </div>
            <div className="col text-center text-sm-end"><a className="btn btn-primary px-3" href="/user-add-3"> Next step<i className="fa-chevron-right fa ms-2"></i></a></div>
          </div>
        </form>
      </div>
    </section>

        </div>

    );
}

export default UserAdd2;