import React, {Component} from "react";
import {Link} from "react-router-dom";
import {paths} from "../../../../config/paths";

class Top extends Component {
  render() {
    return (
      <>
        <h2>You dare or You don't</h2>
        <h1>
          <Link to={`${paths.about.main}`}>Who are you?</Link>
        </h1>
      </>
    );
  }
}

export default Top;
