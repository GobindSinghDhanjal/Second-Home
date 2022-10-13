import React from "react";

function Button() {
    return(
        <button class="btn btn-primary btn-sm d-none" type="button" data-bs-toggle="collapse" data-bs-target="#style-switch" id="style-switch-button">
        <svg class="svg-icon svg-icon-md">
          <use xlinkHref="#configuration-1"> </use>
        </svg>
      </button>
    );
}

export default Button;