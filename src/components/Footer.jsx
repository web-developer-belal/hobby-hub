import { Link } from "react-router";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal p-10 bg-base-100 text-base-content mt-10">
      <nav>
        <Link to="/" className="text-2xl font-bold">
          <span className="text-primary">Hobby</span>
          <span className="text-base-content">Hub</span>
        </Link>
        <p className="max-w-xs mt-2">
          Discover and join local hobby groups that fuel your passion and build your community.
        </p>
      </nav>

      <nav>
        <span className="footer-title">Navigation</span>
        <Link to="/" className="link link-hover">Home</Link>
        <Link to="/groups" className="link link-hover">All Groups</Link>
        <Link to="/createGroup" className="link link-hover">Create Group</Link>
        <Link to="/myGroups" className="link link-hover">My Groups</Link>
      </nav>

      <nav>
        <span className="footer-title">Contact</span>
        <a className="link link-hover">Email: support@hobbyhub.com</a>
        <a className="link link-hover">Phone: +123-456-7890</a>
        <a className="link link-hover">Location: Dhaka, Bangladesh</a>
      </nav>

      <nav>
        <span className="footer-title">Follow Us</span>
        <div className="flex space-x-4 text-2xl">
          <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
          <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
