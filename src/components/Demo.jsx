import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Demo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [data, setData] = useState("");

  const onSubmit = (data) => {
    setData(data);
    reset();
  };

  return (
    <div>
      <div className="w-full flex justify-center items-center bg-gray-900 p-8 border-r border-dashed">
        <div
          className="w-1/2 shadow-lg rounded-md bg-white p-8 flex flex-col"
          style={{ height: "375px" }}
        >
          <h2 className="text-center font-medium text-2xl mb-4">
            React Hook Form Basic
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-1 flex-col justify-evenly"
          >
            <input
              type="text"
              className="border-2 outline-none p-2 rounded-md"
              placeholder="Name"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
            />
            <span className="text-sm text-red-700">
              {errors?.name?.message}
            </span>
            {/* phone-number */}
            <input
              type="number"
              className="border-2 outline-none p-2 rounded-md"
              placeholder="Phone Number"
              {...register("phoneNumber", {
                required: {
                  value: true,
                  message: "Phone number is required",
                },
                minLength: {
                  value: 10,
                  message: "Phone number must be 10 digits",
                },
                maxLength: {
                  value: 10,
                  message: "Phone number must be 10 digits",
                },
              })}
            />
            <span className="text-sm text-red-700">
              {errors?.phoneNumber?.message}
            </span>

            {/* mail */}
            <input
              type="text"
              className="border-2 outline-none p-2 rounded-md"
              placeholder="Email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email must end with gmail.com",
                },
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                  message: "Email must end with gmail.com",
                },
              })}
            />
            <span className="text-sm text-red-700">
              {errors?.email?.message}
            </span>

            <button
              className=" flex justify-center p-2 rounded-md w-1/2 self-center bg-gray-900  text-white hover:bg-gray-800"
              type="submit"
            >
              <span>Submit</span>
            </button>
          </form>
          <div className="h-4">
            <p> Data: {JSON.stringify(data)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
// "stringify" means taking a complex data structure and turning it into a simple string
