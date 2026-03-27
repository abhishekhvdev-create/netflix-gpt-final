import { useRef, useState } from "react";
import {
  EMAIL,
  NAME,
  NETFLIX_AUTHENTICATION,
  PASSWORD,
  SIGN_IN,
  SIGN_UP,
  SUBMIT,
} from "../utility/constants";

export const Registration = () => {
  const [authentication, setAuthentication] = useState("signin");
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email.current.value);
    console.log(password.current.value);
  };

  const handleAuthentication = (message) => {
    setAuthentication(message);
  };
  return (
    <div className="absolute top-30 inset-0 font-bold h-30 flex items-center justify-center">
      <form
        className="flex flex-col my-auto w-100 bg-gray-200 p-10 opacity-90  text-black"
        onSubmit={handleSubmit}
      >
        <h1 className="flex text-center justify-center">
          {NETFLIX_AUTHENTICATION}
        </h1>
        <h2 className="my-3">
          {authentication === "signup" ? SIGN_UP : SIGN_IN}
        </h2>
        {authentication === "signup" && (
          <>
            <label htmlFor="email">{NAME}</label>
            <input
              type="text"
              name="name"
              id="name"
              ref={name}
              placeholder="Enter the Name"
              className="bg-gray-600 text-white p-2 rounded-xs"
            />
          </>
        )}
        <label htmlFor="email">{EMAIL}</label>
        <input
          type="text"
          name="email"
          id="email"
          ref={email}
          placeholder="Enter the Email"
          className="bg-gray-600 text-white p-2 rounded-xs"
        />

        <label htmlFor="password">{PASSWORD}</label>
        <input
          type="password"
          name="password"
          id="password"
          ref={password}
          placeholder="Enter the Password"
          className="bg-gray-600 text-white p-2 round-xs"
        />

        <button className="text-white font-bold bg-red-500 my-5 p-2 rounded-xs w-full cursor-pointer">
          {SUBMIT}
        </button>

        {authentication === "signin" && (
          <span>
            {"New to Netflix ? Click here to "}

            <a
              href=""
              className="underline"
              onClick={(event) => {
                event.preventDefault();
                handleAuthentication("signup");
              }}
            >
              {SIGN_UP}
            </a>
          </span>
        )}

        {authentication === "signup" && (
          <span>
            {"Already User ? Click here to "}

            <a
              href=""
              className="underline"
              onClick={(event) => {
                event.preventDefault();
                handleAuthentication("signin");
              }}
            >
              {SIGN_IN}
            </a>
          </span>
        )}
      </form>
    </div>
  );
};

export default Registration;
