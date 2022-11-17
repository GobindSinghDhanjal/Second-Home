import React from "react";
import { Link } from "react-router-dom";

function BlogItem(props) {
    return(
        <div className="col-lg-4 col-sm-6 mb-4 hover-animate">
        <div className="card shadow border-0 h-100"><Link to="/post"><img className="img-fluid card-img-top" src={props.imageUrl} alt="..."/></Link>
          <div className="card-body"><Link className="text-uppercase text-muted text-sm letter-spacing-2" to="#">{props.name} </Link>
            <h5 className="my-2"><Link className="text-dark" to="/post">{props.title}          </Link></h5>
            <p className="text-gray-500 text-sm my-3"><i className="far fa-clock me-2"></i>{props.date}</p>
            <p className="my-2 text-muted text-sm">{props.description}</p><Link className="btn btn-link ps-0" to="/post">Read more<i className="fa fa-long-arrow-alt-right ms-2"></i></Link>
          </div>
        </div>
      </div>
    )
}

export default BlogItem;