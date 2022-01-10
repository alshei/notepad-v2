import React, { useState } from "react";
import Title from "../../components/Title";
import Form from "../../components/Form";
import InputField from "../../components/InputField";
import { Secondary } from "../../components/Buttons";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const LoginScreen = ({ history }) => {
  /* states */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  /* function called after clicking login button */
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(email, password);

    /* after user has submitted login information */
    try {
      const config = {
        header: {
          "Content-type": "application/json",
        },
      };

      setError(false);
      setLoading(true);

      const { data } = await axios.post(
        "/api/users/login",
        { email, password },
        config
      );

      console.log(data);

      setLoading(false);

      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
  };

  return (
    <div className="w-screen h-screen">
      <Title title="log in" />
      <div className="mt-10 pb-40 w-full flex justify-center gap-6 pl-56 pr-56">
        <Form
          onSubmit={submitHandler}
          text="Don't have an account?"
          button={<Secondary option={"log in to account"} type="submit" />}
          link={
            <Link to="register">
              <p className="inline-flex text-sm text-apricot hover:text-white">
                Sign up here!
              </p>
            </Link>
          }
        >
          {error && <Error title="Oops!" text={error} />}

          <InputField
            label="Email"
            id="login-email"
            placeholder="Enter email address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            label="Password"
            id="login-password"
            placeholder="Enter password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {loading && <Loading />}
        </Form>
      </div>
    </div>
  );
};

export default LoginScreen;
