import React, { use, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { user, setUser, signInUser, googleSignIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  if (user) {
    //toast.success("You already logged in.");
    const redirectTo = location.state || "/user/profile";
    navigate(redirectTo);
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;

    const email = form.email.value;

    const password = form.password.value;
    signInUser(email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        setLoading(false);
        toast.success("Login successful");
        form.reset();
        const redirectTo = location.state || "/user/profile";
        navigate(redirectTo);
      })
      .catch(() => {
        toast.error("Credential not matched");
        setLoading(false);
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        setUser(result.user);
        toast.success("Login successful");
        const redirectTo = location.state || "/user/profile";
        navigate(redirectTo);
      })
      .catch(() => {
        toast.error("Something wen" / "t wrong");
      });
  };
  return (
    <div data-aos="fade-up" className="flex flex-col min-h-[80vh] items-center justify-center">
      
      <form
        onSubmit={handelSubmit}
        className="card bg-base-100 w-full max-w-sm shrink-0 shadow-sm rounded-sm"
      >
        <div className="card-body">
          <h3 className="text-lg font-extrabold border-b-2 border-black w-fit text-black mb-3">
            Login
          </h3>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <label className="input">
              <input
                type={showPassword ? "text" : "password"}
                required
                name="password"
                placeholder="Password"
              />
              {showPassword ? (
                <FaEye
                  onClick={() => setShowPassword(!showPassword)}
                  className="opacity-50 cursor-pointer"
                />
              ) : (
                <FaEyeSlash
                  onClick={() => setShowPassword(!showPassword)}
                  className="opacity-50 cursor-pointer"
                />
              )}
            </label>
            <div>
              <Link to="/forget-password" className="link link-hover">
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              className="btn btn-neutral mt-4 flex items-center justify-center gap-2"
            >
              <span
                className={`loading loading-spinner text-success ${
                  loading ? "" : "hidden"
                }`}
              ></span>
              Login
            </button>
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="btn btn-outline w-full flex items-center justify-center gap-2"
            >
              <FcGoogle size={20} /> Continue with Google
            </button>
            <p className="text-sm text-center">
              Don't have an account?{" "}
              <Link to="/register" className="link link-hover text-blue-500">
                Register now.
              </Link>
            </p>
          </fieldset>
        </div>
      </form>
    </div>
  );
};

export default Login;
