import React, { use, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { Helmet } from 'react-helmet-async';

const ForgetPassword = () => {
  const [loading, setLoading] = useState(false);
  const { user, restPassword } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  if (user) {
    const redirectTo = location.state || "/user/profile";
    navigate(redirectTo);
  }
  const handelSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const email = form.email.value;
    restPassword(email)
      .then(() => {
        setLoading(false);
        toast.success("Password reset email has been sent.");
        navigate("/login");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return (
    <>
      <Helmet>
        <title>Forget password</title>
      </Helmet>
      <div
        data-aos="fade-up"
        className="flex flex-col min-h-[80vh] items-center justify-center"
      >
        <form
          onSubmit={handelSubmit}
          className="card bg-base-100 w-full max-w-sm shrink-0 shadow-sm rounded-sm"
        >
          <div className="card-body">
            <h3 className="text-lg font-extrabold border-b-2 border-black w-fit text-black mb-3">
              Forget password
            </h3>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Enter your email address."
              />

              <button
                type="submit"
                className="btn btn-neutral mt-4 flex items-center justify-center gap-2"
              >
                <span
                  className={`loading loading-spinner text-success ${
                    loading ? "" : "hidden"
                  }`}
                ></span>
                Reset password
              </button>

              <p className="text-sm text-center">
                Back to{" "}
                <Link to="/login" className="link link-hover underline">
                  Login.
                </Link>
              </p>
            </fieldset>
          </div>
        </form>
      </div>
    </>
  );
};

export default ForgetPassword;
