import React, { useState } from "react";
import Title from "../../components/Title";
import Form from "../../components/Form";
import InputField from "../../components/InputField";
import { Primary } from "../../components/Buttons";
import { Link } from "react-router-dom";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import axios from "axios";

const RegisterScreen = () => {
  /* states */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
    } else {
      setMessage(null);
      try {
        const config = {
          header: {
            "Content-type": "application/json",
          },
        };

        setError(false);
        setLoading(true);

        const { data } = await axios.post(
          "/api/users",
          { name, email, password },
          config
        );

        setLoading(false);

        localStorage.setItem("userInfo", JSON.stringify(data));
      } catch (error) {
        setError(error.response.data.message);
        setLoading(false);
      }
    }
  };

  return (
    <div className="w-screen h-screen">
      <Title title="sign up" />
      <div className="mt-10 pb-40 w-full flex justify-center gap-6 pl-56 pr-56">
        <Form
          onSubmit={submitHandler}
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
          {error && <Error title="Oops!" text={error} />}
          {message && <Error title="Wait a sec!" text={message} />}

          <InputField
            label="Name"
            id="signup-name"
            placeholder="Enter name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputField
            label="Email"
            id="signup-email"
            placeholder="Enter email address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            label="Password"
            id="signup-password"
            placeholder="Create password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputField
            label="Confirm Password"
            id="confirm-password"
            placeholder="Confirm password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {loading && <Loading />}
        </Form>
      </div>
    </div>
  );
};

export default RegisterScreen;
