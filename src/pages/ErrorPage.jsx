import { Link } from "react-router";
import notFoundAnimation from "../assets/404.json";
import Lottie from "lottie-react";
const ErrorPage = () => {

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6 ">
      <div className="max-w-40">
        <Lottie animationData={notFoundAnimation} loop={true} />
      </div>
      <h1 className="text-4xl font-bold text-error mt-4">Page Not Found</h1>
      <p className="text-gray-500 mb-6">Sorry, the page you requested does not exist.</p>
      <Link to="/" className="btn btn-primary">
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
