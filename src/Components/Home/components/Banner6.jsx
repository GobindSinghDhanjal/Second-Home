import React from "react";
import BlogItem from "../../subComponents/BlogItem";
import {blogs} from "../../../shared/data";

function Banner6() {
    return(
        <section className="py-6 bg-gray-100"> 
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-8">
              <p className="subtitle text-secondary">Stories from around the globe</p>
              <h2>From our travel blog</h2>
            </div>
            <div className="col-md-4 d-md-flex align-items-center justify-content-end"><a className="text-muted text-sm" href="blog.html">
                 See all articles<i className="fas fa-angle-double-right ms-2"></i></a></div>
          </div>
          <div className="row">
            {/* <!-- blog item--> */}
            {blogs.map((blog)=>{
            return(
                <BlogItem imageUrl={blog.imageUrl} name={blog.name} title={blog.title}  date={blog.date} description={blog.description} />
            )
        })}
          </div>
        </div>
      </section>
    );
}

export default Banner6;