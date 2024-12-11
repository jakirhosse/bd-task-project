"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="bg-gray-300 pt-[20px] pb-[100px]">
      <h4 className="text-[48px] text-center text-dark-400 font-semibold pb-[20px]">
        Sign In
      </h4>
      <form
        className="w-full md:w-1/2 lg:w-1/3 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <input
            className="w-full py-3 px-4 rounded-lg border bg-white"
            {...register("email", { required: true })}
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="relative">
          <input
            className="w-full py-3 px-4 rounded-lg border bg-white mt-[17px]"
            {...register("password", { required: true })}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            type="button"
            className="absolute top-9 right-3 cursor-pointer"
          >
            {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
          </button>
        </div>
        {errors.password && <span>This field is required</span>}
        <div className="flex justify-between items-center py-[20px]">
          <div className="flex items-center gap-1">
            <input className="w-[29px] h-[29px]" type="checkbox" name="check" />
            <label
              className="text-[20px] text-dark-500 font-normal"
              htmlFor="check"
            >
              Remember me
            </label>
          </div>
          <div>
            <Link
              className="text-[20px] text-dark-500 font-normal"
              href="/forget"
            >
              Forget Password
            </Link>
          </div>
        </div>
        <input
          className="w-full bg-primary text-white text-[20px] font-bold py-3 rounded-full"
          type="submit"
        />
      </form>
      <p className="text-[20px] text-dark-500 font-normal text-center pt-[15px]">
        Don&apos;t have account?{" "}
        <Link className="font-medium" href="/register">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
