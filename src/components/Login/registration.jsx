import { useRef, useState } from "react";
import {
  CONFIRMPASSWORD,
  EMAIL,
  NAME,
  NETFLIX_AUTHENTICATION,
  PASSWORD,
  RESET_PASSWORD,
  SIGN_IN,
  SIGN_UP,
  SUBMIT,
} from "../utility/constants";
import { validate } from "../utility/formvalidation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import auth from "../utility/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utility/userSlice";

export const Registration = () => {
  const [authentication, setAuthentication] = useState("signin");
  const [message, setMessage] = useState({ statusCode: "", statusMessage: "" });
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const dispatch = useDispatch();

  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email.current.value.trim(), {
      url: "http://localhost:5173/",
      handleCodeInApp: false,
    })
      .then(() => {
        setMessage({
          ...message,
          statusCode: 200,
          statusMessage: "Password Reset Mail Sent Successfully!!!",
        });
      })
      .catch((error) => {
        setMessage({
          ...message,
          statusCode: error.code,
          statusMessage: error.message,
        });
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = validate(
      email.current.value.trim(),
      password.current.value.trim(),
    );

    if (message === null) setMessage(null);
    setMessage(message);

    if (authentication === "signup") {
      createUserWithEmailAndPassword(
        auth,
        email.current.value.trim(),
        password.current.value.trim(),
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          setMessage({
            ...message,
            statusCode: 200,
            statusMessage: "User Registration is Successfull",
          });
          dispatch(addUser(user));
        })
        .catch((error) => {
          setMessage({
            ...message,
            statusCode: error.code,
            statusMessage: error.message,
          });
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value.trim(),
        password.current.value.trim(),
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          dispatch(addUser(user));
          setMessage({
            ...message,
            statusCode: 200,
            statusMessage: "Login is Successfull",
          });
          console.log(user);
        })
        .catch((error) => {
          setMessage({
            ...message,
            statusCode: error.code,
            statusMessage: error.message,
          });
        });
    }
  };

  const handleAuthentication = (message) => {
    setMessage("");
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
        {/* 
        {authentication === "confirmpassword" && (
          <>
            <label htmlFor="confirmPassword">{CONFIRMPASSWORD}</label>
            <input
              type="confirmpassword"
              name="confirmpassword"
              id="confirmpassword"
              ref={confirmpassword}
              placeholder="Enter the confirm Password"
              className="bg-gray-600 text-white p-2 round-xs"
            />
          </>
        )} */}

        {message?.statusCode !== 200 ? (
          <p className="mt-2 font-bold text-red-600">
            {message?.statusMessage}
          </p>
        ) : (
          <p className="mt-2 font-bold text-green-500">
            {message?.statusMessage}
          </p>
        )}

        <button className="text-white font-bold bg-red-500 my-5 p-2 rounded-xs w-full cursor-pointer">
          {SUBMIT}
        </button>

        {authentication === "signin" && (
          <span>
            <a
              href=""
              className="hover:underline"
              onClick={(event) => {
                event.preventDefault();
                handleAuthentication("signup");
              }}
            >
              {SIGN_UP}
            </a>

            <a
              href=""
              className="hover:underline mx-3"
              onClick={(event) => {
                event.preventDefault();
                handleResetPassword();
              }}
            >
              {RESET_PASSWORD}
            </a>
          </span>
        )}

        {authentication === "signup" && (
          <span>
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
