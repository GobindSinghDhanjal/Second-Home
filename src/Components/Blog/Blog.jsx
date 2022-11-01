import React from "react";
import Header from "../subComponents/Header";
import BlogItem from "../subComponents/BlogItem";
import {blogs} from "../../shared/data";

function Blog() {

    console.log(blogs);

  return (
    <div>
      <Header />
      <section className="position-relative py-6"><img className="bg-image" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1467987506553-8f3916508521.jpg" alt=""/>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body p-5"><strong className="text-uppercase text-secondary d-inline-block mb-2 text-sm">Featured</strong>
                <h2 className="mb-3">Escape the city today</h2>
                <p className="text-muted">As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built party world. Of so am he remember although required. Bachelor unpacked be advanced at. Confined in declared marianne is vicinity</p><a className="btn btn-link p-0" href="post.html">Continue reading <i className="fa fa-long-arrow-alt-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-6">
      <div className="container">
        <div className="row mb-5">

        {/* <!-- blog item--> */}

        {blogs.map((blog)=>{
            return(
                <BlogItem imageUrl={blog.imageUrl} name={blog.name} title={blog.title}  date={blog.date} description={blog.description} />
            )
        })}
        </div>
        {/* <!-- Pagination --> */}
        <nav aria-label="Blog pagination">
          <ul className="pagination justify-content-between mb-5">
            <li className="page-item"><a className="page-link text-sm rounded" href=" "> <i className="fa fa-chevron-left me-1"></i>Older posts</a></li>
            <li className="page-item disabled"><a className="page-link text-sm rounded" href=" " tabIndex="-1">Newer posts  <i className="fa fa-chevron-right ms-1"></i></a></li>
          </ul>
        </nav>
      </div>
    </section>
    </div>
  );
}

export default Blog;
