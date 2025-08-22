"use client";
import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
  SocialLogin,
} from "react-icons/fa";
import { registerUser } from "@/app/actions/auth/registerUser";
import toast from "react-hot-toast";
// import { useRouter } from "next/navigation";

const RegisterForm = () => {
  // const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    try {
      // 👇 Register user
      await registerUser({ name, email, password });

      toast.success("Registered successfully!");
       
      form.reset();

      //   router.push("/");
    } catch (error) {
      toast.error("Registration failed!");
    }
  };
  return (
    

    <div>
      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            className="input input-bordered w-full rounded-xl"
            required
          />
        </div>

        {/* Email */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="input input-bordered w-full rounded-xl"
            required
          />
        </div>

        {/* Password */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="input input-bordered w-full rounded-xl"
            required
          />
        </div>

        {/* Submit Button */}
        <button className="w-full btn btn-info rounded-xl font-semibold hover:btn-primary transition-colors">
          Sign Up
        </button>
      </form>
      <p className="text-center text-gray-600 text-sm mt-4">
        Have an account?{" "}
        <Link
          href="/login"
          className="text-orange-500 font-semibold hover:underline"
        >
          Login please
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
