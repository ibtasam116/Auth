'use client'
import Link from "next/link";
import React from "react";

export default function signup() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e?.target?.name?.value;
    const email = e?.target?.email?.value;
    const password = e?.target?.password?.value;
    const confirmPassword = e?.target?.confirmPassword?.value;

    if (password !== confirmPassword) {
      return toast.error("Password did not match, try again!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center gap-5 max-w-lg  shadow-2xl shadow-gray-900 h-screen hover:shadow-gray-300  bg-white mx-auto rounded-md text-gray-900"
    >
      <h3 className="text-2xl ">Create New Account! </h3>
      <label className="block">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          Name
        </span>
        <input
          required
          type="name"
          name="name"
          className="mt-1 px-3 py-4 w-[350px] md:w-[450px] bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
          placeholder="Enter your name"
        />
      </label>

      <label className="block">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          Email
        </span>
        <input
          required
          type="email"
          name="email"
          className="mt-1 px-3 py-4 w-[350px] md:w-[450px] bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
          placeholder="Enter your email address"
        />
      </label>

      <label className="block">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          Password
        </span>
        <input
          required
          type="password"
          name="password"
          className="mt-1 w-[350px] md:w-[450px] px-3 py-4 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
          placeholder="Enter your password"
        />
      </label>
      <label className="block">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          Confirm Password
        </span>
        <input
          required
          type="password"
          name="confirmPassword"
          className="mt-1 w-[350px] md:w-[450px] px-3 py-4 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
          placeholder="Enter your password"
        />
      </label>
      <span className="block w-full mr-auto ml-7">
        Already have an Account?{" "}
        <Link className="text-blue-700 font-bold" href="/login">
          Log In
        </Link>
      </span>
      <button
        className="bg-[#53c28b] text-white rounded-md p-[15px] w-[90%]"
        type="submit"
      >
        Sign Up
      </button>
      <button className="bg-[#53c28b] text-white rounded-md p-[15px] w-[90%]">
        Continue With Google
      </button>
    </form>
  );
}
