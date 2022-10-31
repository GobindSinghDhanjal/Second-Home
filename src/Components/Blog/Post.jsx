import React from "react";
import Header from "../subComponents/Header";
import Comment from "./components/Comment";
import {comments} from "../../shared/data";

function Post() {
    return(
        <div>
        <Header />
        <section class="hero-home dark-overlay mb-5"><img class="bg-image" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1467987506553-8f3916508521.jpg" alt=""/>
      <div class="container py-7">
        <div class="overlay-content text-center text-white">
          <h1 class="display-3 text-serif fw-bold text-shadow mb-0">Escape the city today</h1>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-xl-8 col-lg-10 mx-auto">           
            <p class="py-3 mb-5 text-muted text-center fw-light"><a href="#"><img class="avatar p-1 me-2" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/avatar/avatar-11.jpg" alt=""/></a> Written by <a class="fw-bold" href="#">John Slim</a><span class="mx-1">|</span> January 16, 2016 in <a class="fw-bold" href="/blog">Living</a><span class="mx-1">|</span><a class="text-muted" href="#">2 comments                </a></p>
            <p class="lead mb-5">As am hastily invited <strong>settled at limited</strong> civilly fortune me. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. </p>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-10 mx-auto"><img class="img-fluid mb-5" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1471189641895-16c58a695bcb.jpg" alt=""/></div>
        </div>
        <div class="row">
          <div class="col-xl-8 col-lg-10 mx-auto">                               
            <div class="text-content">
              <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>
              <figure class="figure mb-3"><img class="figure-img img-fluid w-100" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1482463084673-98272196658a.jpg" alt="Example blog post alt."/>
                <figcaption class="figure-caption text-center">Photo by Jack Tran, New York                     </figcaption>
              </figure>
              <h2>Header Level 2</h2>
              <ol>
                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                <li>Aliquam tincidunt mauris eu risus.</li>
              </ol>
              <blockquote class="blockquote blockquote-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</blockquote>
              <h3>Header Level 3</h3>
              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
              <ul>
                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                <li>Aliquam tincidunt mauris eu risus.</li>
              </ul>
              <p><img class="img-fluid" src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1499695867787-121ffb7950bf.jpg" alt="Example blog post alt"/></p>
              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. </p>
              <p>Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus          </p>
              <hr/>
            </div>
            {/* <!-- comments--> */}
            <div class="mt-5">
              <h6 class="text-uppercase text-muted mb-4">{comments.length} comments</h6>

              {/* <!-- comment--> */}
              {comments.map((comment)=>{
                return(
                    <Comment name={comment.name} imageUrl={comment.imageUrl} date={comment.date} comment={comment.comment}/>
                )
              })}
              {/* <!-- /comment--> */}
            </div>
            {/* <!-- /comments--> */}
            {/* <!-- comment form--> */}
            <div class="mb-5">
              <button class="btn btn-outline-primary" type="button" data-bs-toggle="collapse" data-bs-target="#leaveComment" aria-expanded="false" aria-controls="leaveComment">Leave a comment</button>
              <div class="collapse" id="leaveComment"> 
                <div class="mt-4">
                  <h5 class="mb-4">Leave a comment</h5>
                  <form class="form" id="comment-form" method="post" action="#">
                    <div class="row">
                      <div class="col-md-6">                           
                        <div class="mb-4">
                          <label class="form-label" for="name">Name <span class="required">*</span></label>
                          <input class="form-control" id="name" type="text"/>
                        </div>
                      </div>
                      <div class="col-md-6">                                              
                        <div class="mb-4">
                          <label class="form-label" for="email">Email <span class="required">*</span></label>
                          <input class="form-control" id="email" type="text"/>
                        </div>
                      </div>
                    </div>
                    <div class="mb-4">
                      <label class="form-label" for="comment">Comment <span class="required">*</span></label>
                      <textarea class="form-control" id="comment" rows="4"></textarea>
                    </div>
                    <button class="btn btn-primary" type="submit"><i class="far fa-comment"></i> Comment                                   </button>
                  </form>
                </div>
              </div>
            </div>
            {/* <!-- /comment form--> */}
          </div>
        </div>
      </div>
    </section>
        </div>
    )
}

export default Post;