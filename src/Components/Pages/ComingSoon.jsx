import React from "react";

function ComingSoon() {
  return (
    <div>
      <div class="mh-full-screen d-flex align-items-center dark-overlay">
        <img
          class="bg-image"
          src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1490578474895-699cd4e2cf59.jpg"
          alt="Coming Soon"
        />
        <div class="container text-white text-center text-lg overlay-content py-6 py-lg-0">
          <h1 class="sr-only">Coming soon</h1>
          <img
            class="img-fluid mx-auto mb-6"
            src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/coming-soon.png"
            alt="Coming Soon"
          />
          <h3 class="mb-5 text-shadow">Our directory is coming to you soon.</h3>
          <p class="fw-light mb-4">
            <i class="fas fa-map-marker-alt me-2"></i> Directory Ltd. | 25 Baker
            St., LB8 E18 London, UK
          </p>
          <ul class="list-inline">
            <li class="list-inline-item">
              <a class="text-white" href="#" target="_blank" title="twitter">
                <i class="fab fa-twitter"> </i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="text-white" href="#" target="_blank" title="facebook">
                <i class="fab fa-facebook"> </i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="text-white" href="#" target="_blank" title="instagram">
                <i class="fab fa-instagram"> </i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="text-white" href="#" target="_blank" title="pinterest">
                <i class="fab fa-pinterest"> </i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="text-white" href="#" target="_blank" title="vimeo">
                <i class="fab fa-vimeo"> </i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <button
        class="btn btn-primary btn-sm d-none d-lg-block"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#style-switch"
        id="style-switch-button"
      >
        <svg class="svg-icon svg-icon-md">
          <use xlinkHref="#configuration-1"> </use>
        </svg>
      </button>
      <div class="collapse" id="style-switch">
        <div class="p-4">
          <h6 class="text-uppercase mb-4">Select theme colour</h6>
          <form class="mb-3">
            <select
              class="form-select style-switch-select"
              name="colour"
              id="colour"
            >
              <option value="">select colour variant</option>
              <option value="css/style.default.4758a82d.css">blue</option>
              <option value="css/style.pink.cad18997.css">pink</option>
              <option value="css/style.green.10d4dc04.css">green</option>
              <option value="css/style.red.e7e8cbcc.css">red</option>
              <option value="css/style.violet.f8d1dbc8.css">violet</option>
              <option value="css/style.sea.e4eeb056.css">sea</option>
            </select>
          </form>
          <p class="text-muted text-xs mb-0">
            Stylesheet switching in this demo is done with JavaScript and can
            cause a blink while page loads. This will not happen in your
            production code.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
