import React, { use, useEffect, useState } from "react";
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
  useEffect(() => {
    if (user) {
      const redirectTo = location.state || "/dashboard";
      navigate(redirectTo, { replace: true });
    }
  }, [user, navigate, location.state]);

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
        const redirectTo = location.state || "/dashboard";
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
        const redirectTo = location.state || "/dashboard";
        navigate(redirectTo);
      })
      .catch(() => {
        toast.error("Something wen" / "t wrong");
      });
  };
  return (
    <div className="flex pt-20 flex-col min-h-[80vh] items-center justify-center">
      <form
        onSubmit={handelSubmit}
        className="card bg-base-100 w-full max-w-sm shrink-0 shadow-sm rounded-md"
      >
        <div className="card-body">
          <div className="text-center mb-3">
            <Link to="/" className="text-2xl font-bold">
              <span className="text-primary">Hobby</span>
              <span className="text-base-content">Hub</span>
            </Link>
            <p className="text-center mt-1">Enter your login credentials.</p>
          </div>
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
              className="btn btn-outline w-full flex items-center justify-center gap-2 mt-2"
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
