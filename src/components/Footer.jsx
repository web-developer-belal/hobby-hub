import React from "react";
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <>
      <footer className="bg-base-200 text-base-content px-6 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h6 className="footer-title text-lg font-semibold mb-2">Explore</h6>
            <ul className="space-y-1">
              <li>
                <Link to="/" className="link link-hover">Home</Link>
              </li>
              <li>
                <Link to="/all-subscription-boxes" className="link link-hover">Services</Link>
              </li>
              <li>
                <a className="link link-hover">Pricing</a>
              </li>
              <li>
                <Link to="/faq" className="link link-hover">FAQs</Link>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="footer-title text-lg font-semibold mb-2">Company</h6>
            <ul className="space-y-1">
              <li>
                <a className="link link-hover">About Us</a>
              </li>
              <li>
                <Link to="/contact-us" className="link link-hover">Contact</Link>
              </li>
              <li>
                <a className="link link-hover">Careers</a>
              </li>
              <li>
                <a className="link link-hover">Press</a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="footer-title text-lg font-semibold mb-2">Legal</h6>
            <ul className="space-y-1">
              <li>
                <Link to="/terms-and-conditions" className="link link-hover">Terms of Use</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="link link-hover">Privacy Policy</Link>
              </li>
              <li>
                <a className="link link-hover">Cookie Policy</a>
              </li>
              <li>
                <a className="link link-hover">Security</a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="footer-title text-lg font-semibold mb-2">
              Follow Us
            </h6>
            <div className="flex gap-4 mt-2">
             <Link className="btn bg-base-100 hover:text-white hover:bg-primary hover:shadow-sm text-xl w-10 h-10 p-2 rounded-full flex items-center justify-center" to="https://www.facebook.com/belal.hossen.freelancer/"><FaFacebookSquare size={24} />
             </Link>
             <Link className="btn bg-base-100 hover:text-white hover:bg-primary hover:shadow-sm text-xl w-10 h-10 p-2 rounded-full flex items-center justify-center" to="https://github.com/web-developer-belal"><FaGithub size={24} />
             </Link>
             <Link className="btn bg-base-100 hover:text-white hover:bg-primary hover:shadow-sm text-xl w-10 h-10 p-2 rounded-full flex items-center justify-center" to="https://www.linkedin.com/in/belal-hossen-5a4b27355/"><FaLinkedin size={24} />
             </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-base-300 mt-10 pt-6 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <Link
              to="/"
              className="text-xl  justify-center font-extrabold tracking-wide flex items-center space-x-1"
            >
              <span className="text-primary">PetPaw</span>
              <span className="text-black">Joy</span>
            </Link>{" "}
            Industries Ltd. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Crafted with ❤️ for tech enthusiasts.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
