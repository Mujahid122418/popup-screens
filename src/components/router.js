import React from "react";

import ForgetPassword from "./forgetPassword/forgetPassword";
import PasswordRestVerification from "./forgetPassword/Password-reset-verification";
import RegistrationSuccessfully from "./forgetPassword/registrationSuccessfuly";

import { withRouter, Route, Switch } from "react-router-dom";



class Routing extends React.PureComponent {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ForgetPassword} />
          <Route
            exact
            path="/passwordRestVerification"
            component={PasswordRestVerification}
          />

          <Route
            exact
            path="/registrationSuccessfully"
            component={RegistrationSuccessfully}
          />
        </Switch>
      </div>
    );
  }
}


export default Routing;
