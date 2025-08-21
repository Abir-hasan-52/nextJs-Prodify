import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import LoginForm from "./components/LoginForm";

const page = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center my-8">Login</h1>

      <div className="max-w-3xl mx-auto">
        <LoginForm />
      </div>
    </>
  );
};

export default page;
