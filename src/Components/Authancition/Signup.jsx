import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { Authcontext } from "../../Context/Usercontext";
import { updateProfile } from "firebase/auth";

const Signup = () => {
  const { signupemail, auth } = useContext(Authcontext);

  const handelall = (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const email = form.email.value;
    const img = form.img;
    const password = form.password.value;
    console.log({ username, email, img, password });

    // sign up functions

    signupemail(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        if (user.uid) {
          updateProfile(auth.currentUser, {
            displayName: username,
          }).then(() => {});
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <div className="w-full max-w-md p-8 space-y-3 mx-auto my-5 rounded-xl bg-gray-900 text-gray-100">
        <h1 className="text-2xl font-bold text-center">Sign up</h1>
        <form
          onSubmit={handelall}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block text-gray-400">
              Username
            </label>
            <input
              required
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-100 text-gray-900 focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-400">
              Email
            </label>
            <input
              required
              type="email"
              name="email"
              id="email"
              placeholder="rohit@gmail.com"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-100 text-gray-900 focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-gray-400">
              Password
            </label>
            <input
              required
              type="password"
              name="password"
              id="password"
              placeholder="*****"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-100 text-gray-900 focus:border-violet-400"
            />
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="img" className="block text-gray-400">
              Img
            </label>
            <input
              name="img"
              required
              type="file"
              className="file-input w-full  "
            />
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400">
            Sign in
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
          <p className="px-3 text-sm text-gray-400">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            aria-label="Log in with Google"
            className="p-3 text-4xl rounded-sm"
          >
            <FcGoogle />
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 text-gray-400">
          Don't have an account?
          <Link
            rel="noopener noreferrer"
            to="/login"
            className="underline text-gray-100"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
