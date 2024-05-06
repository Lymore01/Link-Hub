/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { IoLink } from "react-icons/io5";
import { icons } from "../../utils/SocialMediaIcons";
import { FaRegEye } from "react-icons/fa6";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import Logo from "../../utils/Logo";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationRules } from "../../schema/FormValidation";

const Register = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const handleSubmit = async (values, formikHelpers) => {
    console.log("Enter in submit function", values);
    const { setSubmitting } = formikHelpers;
    try {
      await axios
        .post("http://localhost:6600/user/post-user", {
          email: values.email,
          password: values.password,
        })
        .then((response) => {
          if (response.data.message === "User logged in successfully!") {
            sessionStorage.setItem("userSessionId", response.data.session);
            navigate("/dashboard");
          } else if (response.data.message === "You must login!") {
            navigate("/login");
          } else {
            setMessage(response.data.message);
          }
          console.log(response.data);
        });
      setSubmitting(false);
    } catch (error) {
      console.log(error.response.data.message);
      setMessage(error.response.data.message);
    }
    setSubmitting(false);
  };

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center p-2 bg-[#ecf0f1]">
        <div className="w-full h-full rounded-md grid items-center justify-center bg-white grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 sm:grid-rows-1 sm:grid-cols-2 p-2">
          <div className="bg-white w-full h-full flex flex-col gap-[20px] items-center justify-start pt-[40px]">
            <div className="w-full flex sm:hidden">
              <span>
                <IoArrowBack className="w-[25px] h-[25px] cursor-pointer" />
              </span>
            </div>
            <div className="w-full h-auto items-center flex justify-center">
              <Logo />
            </div>
            <div className="w-full h-auto items-center justify-center flex flex-col">
              <span className="text-[26px] font-extrabold text-[#3f51b5]">
                Welcome Linky!
              </span>
              <span className="text-[10px] font-semibold text-[#3f51b5]">
                Do you have an account?{" "}
                <Link to={"/login"}>
                  <span className="font-bold underline cursor-pointer text-[#ff6e40]">
                    Log in
                  </span>
                </Link>
              </span>
            </div>
            <div className="w-[60%] md:w-[30%] h-auto items-center grid justify-center grid-rows-1 grid-cols-4">
              {icons.map((icon) => {
                return (
                  <>
                    <div
                      className="w-[35px] h-[35px] border border-gray rounded-full items-center justify-center flex cursor-pointer"
                      key={icon.id}
                    >
                      <span>{icon.icon}</span>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="flex items-center">
              <hr></hr>
              <span className="mx-4 text-gray-600">or</span>
              <hr></hr>
            </div>
            <div className="sm:w-[60%] w-[80%] h-auto items-center flex justify-start flex-col gap-[20px]">
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validationSchema={validationRules}
                onSubmit={handleSubmit}
                validator={() => ({})}
              >
                <Form className="w-full flex flex-col gap-[10px]">
                  <div className="w-full h-auto">
                    <label
                      htmlFor="email"
                      className="font-semibold text-[12px]"
                    >
                      Email
                    </label>
                    <div className="w-full h-[40px] bg-[#F0F0F0] rounded-[99em] p-2 pl-4">
                      <Field
                        type="email"
                        name="email"
                        placeholder="E.g. yourname@gmail.com"
                        className="w-full h-full bg-[transparent] text-[12px] items-center justify-center flex outline-none"
                      />
                    </div>

                    <ErrorMessage name="email">
                      {(msg) => (
                        <div className="text-red-500 text-[12px]">{msg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                  <div className="w-full h-auto">
                    <label
                      htmlFor="password"
                      className="font-semibold text-[12px]"
                    >
                      Password
                    </label>
                    <div className="w-full h-[40px] bg-[#F0F0F0] rounded-[99em] p-2 pl-4 flex flex-row">
                      <Field
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        className="w-full h-full bg-[transparent] text-[12px] items-center justify-center flex outline-none"
                      />
                      <div className="h-full flex items-center justify-center cursor-pointer">
                        <span className="">
                          <FaRegEye fill="gray" />
                        </span>
                      </div>
                    </div>

                    <ErrorMessage name="password">
                      {(msg) => (
                        <div className="text-red-500 text-[12px]">{msg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                  {/*  <div className="w-full h-auto">
                      <label
                        htmlFor="confirm password"
                        className="font-semibold text-[12px]"
                      >
                        Confirm Password
                      </label>
                      <div className="w-full h-[40px] bg-[#F0F0F0] rounded-[99em] p-2 pl-4 flex flex-row">
                        <Field
                          type="password"
                          name="confirm password"
                          placeholder="Enter your password"
                          className="w-full h-full bg-[transparent] text-[12px] items-center justify-center flex outline-none"
                        />
                        <div className="h-full flex items-center justify-center cursor-pointer">
                          <span className="">
                            <FaRegEye fill="gray" />
                          </span>
                        </div>
                      </div>

                      <ErrorMessage name="password">
                        {(msg) => (
                          <div className="text-red-500 text-[12px]">{msg}</div>
                        )}
                      </ErrorMessage>
                    </div> */}

                  <div className="w-full h-[40px] bg-[#3f51b5] rounded-[99em] items-center justify-center flex cursor-pointer">
                    <button type="submit">
                      <span className="text-[white] items-center justify-center flex font-bold text-[12px]">
                        Sign Up
                      </span>
                    </button>
                  </div>
                  <div>
                    <Link
                      to={"/forgot-password"}
                      className="text-[12px] font-bold underline cursor-pointer text-[#ff6e40]"
                    >
                      Forgot password
                    </Link>
                  </div>
                </Form>
              </Formik>
              {message && (
                <div className="text-red-500 text-xs w-full flex items-center justify-start">
                  {message}
                </div>
              )}
            </div>
          </div>
          <div className="w-full h-full rounded-lg hidden sm:flex">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="https://images.adsttc.com/media/images/5735/0a44/e58e/ce1c/5200/006f/medium_jpg/IMG_0370_copy.jpg?1463093821"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
