import React from "react";
import RegisterForm from "./components/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">
          Create an Account 🎉
        </h2>
        <p className="text-center text-gray-500">
          Sign up to get started with your account
        </p>


      {/* Right Section */}
      <div className="max-w-3xl mx-auto">
        <RegisterForm />
      </div>
    </div>
    </div>
  );
};

export default RegisterPage;
