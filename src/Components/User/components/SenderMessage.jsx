import React from "react";

function SenderMessage(props) {
  return (
    <div className="d-flex col-md-9 col-xl-7 mb-3">
      <img
        className="avatar avatar-border-white flex-shrink-0"
        src={props.profileImg}
        alt="user"
      />
      <div className="ms-3">
        <div className="bg-gray-200 rounded p-4 mb-2">
          <p className="text-sm mb-0">
           {props.message}
          </p>
        </div>
        <p className="small text-muted ms-3">{props.time} | {props.date}</p>
      </div>
    </div>
  );
}

export default SenderMessage;
