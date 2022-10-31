import React from "react";

function Comment(props) {
    return(
        <div className="d-flex mb-4"><img className="avatar avatar-lg p-1 flex-shrink-0 me-4" src={props.imageUrl} alt="Profile pic"/>
        <div>
          <h5>{props.name}</h5>
          <p className="text-uppercase text-sm text-muted"><i className="far fa-clock"></i>{props.date}</p>
          <p className="text-muted">{props.comment}</p>
          <p><a className="btn btn-link text-primary" href=" "><i className="fa fa-reply"></i> Reply</a></p>
        </div>
      </div>
    )
}

export default Comment;