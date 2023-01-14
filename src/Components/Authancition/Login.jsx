import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from "../../Context/Usercontext";

const Login = () => {
  const { loginemail } = useContext(Authcontext);
  const navegate = useNavigate()

  const handelalls = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginemail(email, password)
      .then((res) => {
        const user = res.user;
        if(user.uid){
          navegate('/')
          return toast.success('successfuly loge in !!')
        }
      })
      .catch((e) => {
        console.error(e.message);
      });
  };
  return (
    <div>
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 mx-auto my-5 bg-gray-900 text-gray-100">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          <p className="text-sm text-gray-400">
            Sign in to access your account
          </p>
        </div>
        <form
          onSubmit={handelalls}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
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

          <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400">
            Sign in
          </button>
        </form>
        <p className="px-6 mt-4 text-sm text-center text-gray-400">
          Don't have an account yet?
          <Link
            rel="noopener noreferrer"
            to="/signup"
            className="hover:underline text-violet-400"
          >
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
