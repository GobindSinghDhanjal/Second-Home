import React from "react";

function BlogItem(props) {
    return(
        <div className="col-lg-4 col-sm-6 mb-4 hover-animate">
        <div className="card shadow border-0 h-100"><a href="/post"><img className="img-fluid card-img-top" src={props.imageUrl} alt="..."/></a>
          <div className="card-body"><a className="text-uppercase text-muted text-sm letter-spacing-2" href="#">{props.name} </a>
            <h5 className="my-2"><a className="text-dark" href="/post">{props.title}          </a></h5>
            <p className="text-gray-500 text-sm my-3"><i className="far fa-clock me-2"></i>{props.date}</p>
            <p className="my-2 text-muted text-sm">{props.description}</p><a className="btn btn-link ps-0" href="/post">Read more<i className="fa fa-long-arrow-alt-right ms-2"></i></a>
          </div>
        </div>
      </div>
    )
}

export default BlogItem;