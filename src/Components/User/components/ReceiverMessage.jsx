import React from "react";

function ReceiverMessage(props) {
  return (
    <div className="d-flex col-md-9 col-xl-7 ms-auto mb-3">
      <div className="me-3">
        <div className="bg-primary rounded p-4 mb-2">
          <p className="text-sm mb-0 text-white">
          {props.message}
          </p>
        </div>
        <p className="small text-muted ms-3">
          {props.time} | {props.date}
        </p>
      </div>
      <img
        className="avatar avatar-border-white flex-shrink-0"
        src={props.profileImg}
        alt="user"
      />
    </div>
  );
}

export default ReceiverMessage;
