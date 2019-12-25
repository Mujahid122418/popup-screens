import React from "react";


import ForgetPassword from "./forgetPassword/forgetPassword";
import PasswordRestVerification from "./forgetPassword/Password-reset-verification";
import RegistrationSuccessfully from "./forgetPassword/registrationSuccessfuly";

import {
  
  withRouter,
  Route,
  Switch,
 
} from "react-router-dom";

import "./signup/pageTransitions/slideTransition.css";

import { connect } from "react-redux";
import { loadUser } from "../redux/Thunk/authThunk";

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
const mapDispatchToProps = Dispatch => ({
  loaduser: state => Dispatch(loadUser(state))
});

const mapStateToProps = state => ({
  UserState: state.userReducer
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Routing));
