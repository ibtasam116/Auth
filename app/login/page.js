import Link from "next/link";
import React from "react";

export default function login() {
  return (
    <form className="flex flex-col justify-center items-center gap-5 max-w-lg  shadow-2xl shadow-[#03071e] h-screen hover:shadow-[#3a5a40]  bg-white mx-auto rounded-md text-[#03071e]">
      <h3 className="text-2xl font-extrabold">Please Log In! </h3>

      <label className="block">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          Email
        </span>
        <input
          required
          type="email"
          name="email"
          className="mt-1 px-3 py-4 w-[350px] md:w-[450px] bg-white border shadow-sm border-slate-300 placeholder-[#3a5a40] focus:outline-none focus:border-[#344e41] focus:ring-[#344e41] block rounded-md sm:text-sm focus:ring-1"
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
          className="mt-1 w-[350px] md:w-[450px] px-3 py-4 bg-white border shadow-sm border-slate-300 placeholder-[#3a5a40] focus:outline-none focus:border-[#344e41] focus:ring-[#344e41] block rounded-md sm:text-sm focus:ring-1"
          placeholder="Enter your password"
        />
      </label>
      <span className="block w-full mr-auto ml-7">
        Dont have any Account?{" "}
        <Link className="text-[#03071e] font-bold" href="/signup">
          Sign Up
        </Link>
      </span>
      <button
        className="bg-[#344e41] text-white rounded-md p-[15px] w-[90%] hover:bg-[#3a5a40]"
        type="submit"
      >
        Log In
      </button>
      <button className="bg-[#344e41] text-white rounded-md p-[15px] w-[90%] hover:bg-[#3a5a40]">
        Continue With Google
      </button>
    </form>
  );
}
