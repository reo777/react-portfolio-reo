import React, {Component} from "react";
import {Link} from "react-router-dom";
import {paths} from "../../../../config/paths";
import "./index.scss";

class Top extends Component {
  render() {
    return (
      <>
        <div className="landing">
          <h2>
            <Link to={`${paths.about.main}`}>Who is owner this website?</Link>
          </h2>
        </div>
      </>
    );
  }
}

export default Top;
