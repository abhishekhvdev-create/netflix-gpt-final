import { useRef } from "react";
import { EMAIL, NETFLIX_AUTHENTICATION, SIGN_IN } from "../utility/constants";

export const Registration = () => {
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email.current.value);
    console.log(password.current.value);
  };
  return (
    <div className="absolute top-30 inset-0 font-bold h-30 flex items-center justify-center">
      <form
        className="flex flex-col my-auto w-100 bg-gray-200 p-10 opacity-95  text-black"
        onSubmit={handleSubmit}
      >
        <h1 className="flex text-center justify-center">
          {NETFLIX_AUTHENTICATION}
        </h1>
        <h2 className="my-3">{SIGN_IN}</h2>
        <label htmlFor="email">{EMAIL}</label>
        <input
          type="text"
          name="email"
          id="email"
          ref={email}
          placeholder="Enter the Email"
          className="bg-gray-600 text-white p-2 rounded-xs"
        />

        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          id="password"
          ref={password}
          placeholder="Enter the Password"
          className="bg-gray-600 text-white p-2 round-xs"
        />

        <button className="text-white font-bold bg-red-500 my-5 p-2 rounded-xs w-full cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Registration;
