import React from "react";
import Title from "../../components/Title";
import Form from "../../components/Form";

const RegisterScreen = () => {
  return (
    <div className="w-screen h-screen">
      <Title title="sign up" />

      <div className="mt-10 pb-40 w-full flex justify-center gap-6 pl-56 pr-56">
        <Form />
      </div>
    </div>
  );
};

export default RegisterScreen;
