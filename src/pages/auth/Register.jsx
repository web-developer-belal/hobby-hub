import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { setUser, registerUser, googleSignIn } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  
  const handelSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    //const name = form.name.value;
    const email = form.email.value;
    //const photoUrl = form.photo_url.value;
    const password = form.password.value;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const isValidLength = password.length >= 6;

    if (!hasUppercase || !hasLowercase || !isValidLength) {
      setLoading(false);
      toast.error(
        "Password must be at least 6 characters, include an uppercase and a lowercase letter."
      );
      return;
    }
    registerUser(email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        setLoading(false);
        form.reset();
        toast.success("Register successful");
        const redirectTo = location.state || "/";
        navigate(redirectTo);
      })
      .catch(() => {
        toast.error("Something wen" / "t wrong");
        setLoading(false);
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        setUser(result.user);
        toast.success("Login successful");
        const redirectTo = location.state || "/";
        navigate(redirectTo);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        toast.error("Something wen" / "t wrong");
      });
  };

  return (
    <div className="flex flex-col min-h-[80vh] items-center justify-center px-4 my-8 ">
      <form
        onSubmit={handelSubmit}
        className="card bg-base-100 w-full max-w-sm shadow-sm rounded-lg"
      >
        <div className="card-body ">
          <div className="text-center mb-3">
            <Link to="/" className="text-2xl font-bold">
              <span className="text-primary">Hobby</span>
              <span className="text-base-content">Hub</span>
            </Link>
            <p className="text-center mt-1">Don't worry your data is safe here.</p>
          </div>

          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className="input input-bordered"
            placeholder="Name"
            required
          />

          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input input-bordered"
            placeholder="Email"
            required
          />

          <label className="label">Photo URL</label>
          <input
            type="text"
            name="photo_url"
            className="input input-bordered"
            placeholder="Photo URL"
          />

          <label className="label">Password</label>
          <label className="input">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
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
            className="btn btn-primary mt-4 w-full flex text-white items-center justify-center gap-2"
            type="submit"
          >
            <span
              className={`loading loading-spinner ${loading ? "" : "hidden"}`}
            ></span>
            {loading ? "Registering..." : "Register"}
          </button>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full flex items-center justify-center gap-2"
          >
            <FcGoogle size={20} /> Continue with Google
          </button>

          <p className="text-sm text-center">
            Already have an account?{" "}
            <Link to="/login" className="link link-hover text-blue-500">
              Login now.
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
