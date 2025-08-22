"use client";
import Link from "next/link";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import React from "react";

const LoginForm = () => {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    toast("Submitting ....");
    try {
      const response = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/",
        redirect: false,
      });
      if (response.ok) {
        toast.success("Logged In successfully");
        router.push("/allProducts");
        form.reset();
      } else {
        toast.error("FAILED to Log In");
      }
      //console.log({ email, password });
    } catch (error) {
      console.log(error);
      toast.error("FAILED to Log In");
    }
  };
  return (
    // <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-8">
    //   <label className="form-control w-full">
    //     <div className="label w-full">
    //       <span className="label-text  font-bold">Email</span>
    //     </div>
    //     <input
    //       type="text"
    //       name="email"
    //       placeholder="Type here"
    //       className="input input-bordered w-full"
    //     />
    //   </label>
    //   <label className="form-control w-full">
    //     <div className="label w-full">
    //       <span className="label-text font-bold">Password</span>
    //     </div>
    //     <input
    //       type="password"
    //       name="password"
    //       placeholder="Type here"
    //       className="input input-bordered w-full"
    //     />
    //   </label>
    //   <button className="w-full btn btn-outline btn-info rounded-2xl">
    //     Sign In
    //   </button>
    //   {/* <p className="text-center">Or Sign In with</p> */}
    //   {/* <SocialLogin /> */}
    //   <p className="text-center">
    //     Already have an account?{" "}
    //     <Link href="/register" className="text-orange-500 font-bold">
    //       Register
    //     </Link>
    //   </p>
    // </form>
    <div>
      <form onSubmit={handleSubmit} className="space-y-6">
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
        <button className="w-full btn btn-info rounded-xl font-semibold">
          Sign In
        </button>
      </form>
      <p className="text-center text-gray-600 text-sm mt-4">
        Don't have an account?{" "}
        <Link
          href="/register"
          className="text-orange-500 font-semibold hover:underline"
        >
          Register
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
