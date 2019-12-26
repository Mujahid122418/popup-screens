import React, { useState } from "react";
import "antd/dist/antd.css";
import "./style.css";
import { Link } from "react-router-dom";
import { Row, Col, Form, Icon, Input, Button, Checkbox } from "antd";
import logo from "../../assets/Icon-Prototype-Screens (3)/icons/logo.png";
import { Formik } from "formik";
const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function RegistrationSuccessfully(props) {
  const [formData, setFormData] = useState({
    newPassword: "",
    conformPassword: ""
  });
  const { newPassword, conformPassword } = formData;
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    console.log(formData);
    e.preventDefault();
    // props.form.validateFieldsAndScroll((err, values) => {
    //   if (!err) {
    //     console.log("Received values of form: ", values);
    //   }
    // });
  };

  return (
    <>
      {/* {!props.UserState.user._id? */}
      <div className="page-container login page">
        <div className="Login-Container">
          <Row type="flex" justify="center">
            <Col>
              <Row className="innnerContainer">
                <Col span={24} className="logoStyle">
                  <img className="img" src={logo} />
                </Col>

                <Col span={24}>
                  <h2 id="account-success">
                    Account Created
                    <br />
                    Successfully{" "}
                  </h2>
                </Col>
                <br />
                <Col span={24}>
                  <div className="">
                    <Row type="flex" justify="center">
                      <Form onSubmit={handleSubmit}>
                        <Col span={24}>
                          <p>
                            Please activate your account
                            <br />
                            by verifing the email we sent on
                            <br />
                            user_email_address
                          </p>
                          <br />
                          <a id="link-not-send">Not received any email?</a>
                        </Col>
                        <br />
                        <br />
                        <Col span={24}>
                          <Button
                            // onClick={handleSubmit}
                            id="handelButtonStyle"
                            // disabled={
                            //   !formData.emailIsValid ||
                            //   !formData.passwordIsValid
                            // }
                          >
                            Resend
                          </Button>
                        </Col>{" "}
                     
                      </Form>
                    </Row>

                    {/* <PasswordForgot  firstTime={formData.firstTime} animationHandle ={formData.animationToggle} animationHandler={togleAnimationFunc} /> */}
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
     
    </>
  );
}

const WrappedRegistrationForm = Form.create({ name: "register" })(
  RegistrationSuccessfully
);
export default WrappedRegistrationForm;
