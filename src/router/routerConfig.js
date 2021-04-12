import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import HOME from "../features/home/Home";
import appRoutes from "../common/constants/appRoutes";
export default () => {
  return (
    <Fragment>
      <Route exact path={appRoutes.HOME} component={HOME} />
    </Fragment>
  );
};
