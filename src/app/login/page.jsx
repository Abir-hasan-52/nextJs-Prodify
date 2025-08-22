import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import LoginForm from "./components/LoginForm";

const page = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6">
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">
            Welcome Back 👋
          </h2>
          <p className="text-center text-gray-500">
            Please sign in to your account
          </p>
          <div className="max-w-3xl mx-auto">
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
