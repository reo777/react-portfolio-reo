import * as React from "react";
import {Route, Switch} from "react-router-dom";
import {paths} from "../config/paths";
import {Top} from "../components/pages/Top";
import {Contact} from "../components/pages/Contact";
import {About} from "../components/pages/About";

function Routes() {
  return (
    <div className="common_routes">
      <Switch>
        <Route exact path={paths.top.main} component={Top} />
        <Route exact path={paths.about.main} component={About} />
        <Route exact path={paths.contact.main} component={Contact} />
      </Switch>
    </div>
  );
}

export default Routes;
