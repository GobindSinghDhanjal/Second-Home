import React from "react";

function Message(props) {
  return (
    <div className="list-group-item list-group-item-action p-4">
      <div className="row">
        <div className="col-2 col-lg-1 align-self-lg-center py-3 d-flex align-items-lg-center z-index-10">
          <div className="form-check">
            <input
              className="form-check-input"
              id="select_message_0"
              type="checkbox"
            />
            <label className="form-check-label" for="select_message_0">
              {" "}
            </label>
          </div>
          <div className="form-star d-none d-sm-inline-block mt-n1">
            <input id="star_message_0" type="checkbox" name="star"/>
            <label className="star-label" for="star_message_0">
              <span className="sr-only">Important Message</span>
            </label>
          </div>
        </div>
        <div className="col-9 col-lg-4 align-self-center mb-3 mb-lg-0">
          <div className="d-flex align-items-center mb-1 mb-lg-3">
            <h2 className="h5 mb-0">{props.name}</h2>
            <img
              className="avatar avatar-sm avatar-border-white ms-3"
              src={props.profileImg}
              alt="profile img"
            />
          </div>
          <p className="text-sm text-muted">{props.type}</p>
          <span className="badge badge-pill p-2 badge-secondary-light">
            {props.date}
          </span>
          <a className="stretched-link" href="/messages-detail">
            {" "}
          </a>
        </div>
        <div className="col-10 ms-auto col-lg-7">
          <div className="row">
            <div className="col-md-8 py-3">
              <p className="text-sm mb-0">{props.message}</p>
            </div>
            <div className="col-md-4 text-end py-3">
              <p className="text-sm">{props.date}</p>
            </div>
            <a className="stretched-link" href="/messages-detail">
              {" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
