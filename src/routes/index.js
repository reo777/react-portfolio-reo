import * as React from "react";
import {Route, Switch, Link} from "react-router-dom";
import {paths} from "../config/paths";
import {Top} from "../components/pages/Top";
import {Contact} from "../components/pages/Contact";
import {About} from "../components/pages/About";
import "./index.scss";

function Routes() {
  return (
    <div className="common_routes">
      <div className="main_header">
        <div>
          <Link to={`${paths.top.main}`}>Main</Link>
        </div>
        <div>
          <Link to={`${paths.about.main}`}>About</Link>
        </div>
        <div>
          <Link to={`${paths.contact.main}`}>Contact</Link>
        </div>
      </div>

      <Switch>
        <Route exact path={paths.top.main} component={Top} />
        <Route exact path={paths.about.main} component={About} />
        <Route exact path={paths.contact.main} component={Contact} />
      </Switch>
    </div>
  );
}

export default Routes;
