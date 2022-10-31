import React from "react";

function StyleSwitch() {
    return(
        <div className="collapse" id="style-switch">
        <div className="p-4">
          <h6 className="text-uppercase mb-4">Select theme colour</h6>
          <form className="mb-3">
            <select className="form-select style-switch-select" name="colour" id="colour">
              <option value="">select colour variant</option>
              <option value="css/style.default.4758a82d.css">blue</option>
              <option value="css/style.pink.cad18997.css">pink</option>
              <option value="css/style.green.10d4dc04.css">green</option>
              <option value="css/style.red.e7e8cbcc.css">red</option>
              <option value="css/style.violet.f8d1dbc8.css">violet</option>
              <option value="css/style.sea.e4eeb056.css">sea</option>
            </select>
          </form>
          <p className="text-muted text-xs mb-0">Stylesheet switching in this demo is done with JavaScript and can cause a blink while page loads. This will not happen in your production code.</p>
        </div>
      </div>
    );
}

export default StyleSwitch;