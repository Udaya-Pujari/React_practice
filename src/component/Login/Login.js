import React, { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <div>
        <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-75">
          {/* <h1 className="font-bold text-3xl py-4">Sign In</h1> */}
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {/*    add extra input for sign up ==> like {!signInForm && <input>}    */}
          <input
            type="text"
            placeholder="Email Address"
            className="p-4 m-2 w-full rounded-lg"
          />
          <input
            type="text"
            placeholder="Password"
            className="p-4 m-2 w-full rounded-lg"
          />
          {/* <button className="p-4 m-2 bg-red-700 w-full rounded-lg">
            Sign In
          </button> */}
          <button className="p-4 m-2 bg-red-700 w-full rounded-lg">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          {/* <p className="py-4" onClick={toggleForm}>
            New User? Sign Up Now
          </p> */}
          <p className="py-4 underline cursor-pointer   " onClick={toggleForm}>
            {isSignInForm
              ? "New User? Sign Up Now"
              : "Already Registered! Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
