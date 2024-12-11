"use client";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
const Newpassword = () => {
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
      <div className="newPassword__Cart_bg w-full md:w-1/2 lg:w-2/5 mx-auto py-[30px]">
        <h4 className="text-3xl text-center text-dark-400 font-semibold pb-[20px]">
          Set New Password
        </h4>
        <form className="px-[30px]" onSubmit={handleSubmit(onSubmit)}>
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
          <div className="relative">
            <input
              className="w-full py-3 px-4 rounded-lg border bg-white mt-[17px]"
              {...register("confirmPassword", { required: true })}
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              type="button"
              className="absolute top-9 right-3 cursor-pointer"
            >
              {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
            </button>
          </div>
          {errors.confirmPassword && <span>This field is required</span>}
          <div className="mt-[20px]">
            <input
              className="w-full bg-primary text-white text-[20px] font-bold py-3 rounded-full"
              type="submit"
              value="Create Account"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newpassword;
