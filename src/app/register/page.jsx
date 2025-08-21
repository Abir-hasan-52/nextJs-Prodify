import React from "react";
import RegisterForm from "./components/RegisterForm";

const RegisterPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-8">Register</h1>

      {/* Right Section */}
      <div className="max-w-3xl mx-auto">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
