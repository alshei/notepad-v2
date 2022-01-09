import React from "react";
import Title from "../../components/Title";
import Form from "../../components/Form";
import InputField from "../../components/InputField";
import { Primary } from "../../components/Buttons";
import { Link } from "react-router-dom";

const RegisterScreen = () => {
  return (
    <div className="w-screen h-screen">
      <Title title="sign up" />
      <div className="mt-10 pb-40 w-full flex justify-center gap-6 pl-56 pr-56">
        <Form
          text="Have an account?"
          button={<Primary option={"create account"} type="submit" />}
          link={
            <Link to="login">
              <p className="inline-flex text-sm text-lavender hover:text-white">
                Log in here.
              </p>
            </Link>
          }
        >
          <InputField
            label="Name"
            id="signup-name"
            placeholder="Enter name"
            type="text"
            errorMsg="Error here"
          />
          <InputField
            label="Email"
            id="signup-email"
            placeholder="Enter email address"
            type="email"
            errorMsg="Error here"
          />
          <InputField
            label="Password"
            id="signup-password"
            placeholder="Create password"
            type="password"
            errorMsg="Error here"
          />
          <InputField
            label="Confirm Password"
            id="confirm-password"
            placeholder="Confirm password"
            type="password"
            errorMsg="Error here"
          />
        </Form>
      </div>
    </div>
  );
};

export default RegisterScreen;
