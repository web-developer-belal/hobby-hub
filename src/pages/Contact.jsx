import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaPaperPlane,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import contactImage from "../assets/contact.jpg";

const Contact = () => {
  return (
    <div className="min-h-screen pt-30 bg-gradient-to-br from-base-100 to-base-200 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section with Image */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 mb-16">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Get in <span className="text-base-content">Touch</span>
          </h1>
          <p className="text-xl text-base-content/80 mb-6">
            Have questions or feedback? We'd love to hear from you! Reach out
            through any of the channels below.
          </p>
          <div className="flex gap-4">
            {[
              { icon: <FaTwitter className="text-xl" />, label: "Twitter" },
              { icon: <FaFacebookF className="text-xl" />, label: "Facebook" },
              { icon: <FaInstagram className="text-xl" />, label: "Instagram" },
              { icon: <FaLinkedinIn className="text-xl" />, label: "LinkedIn" },
            ].map((social) => (
              <button
                key={social.label}
                className="btn btn-circle btn-outline hover:btn-primary transition-all"
                aria-label={social.label}
              >
                {social.icon}
              </button>
            ))}
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src={contactImage}
            alt="Contact us"
            className="rounded-xl w-full h-auto max-h-80 object-cover"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="card bg-base-100/30 backdrop-blur-sm border border-white/10 p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary mt-1">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Our Location</h3>
                  <p className="text-base-content/80">
                    123 Hobby Street
                    <br />
                    Creative District
                    <br />
                    San Francisco, CA 94107
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-secondary/10 text-secondary mt-1">
                  <FaPhone className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Phone</h3>
                  <p className="text-base-content/80">
                    +1 (555) 123-4567
                    <br />
                    Mon-Fri, 9am-5pm PST
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-accent/10 text-accent mt-1">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Email</h3>
                  <p className="text-base-content/80">
                    support@hobbyhub.com
                    <br />
                    We respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-info/10 text-info mt-1">
                  <MdSupportAgent className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Support</h3>
                  <p className="text-base-content/80">
                    helpcenter@hobbyhub.com
                    <br />
                    24/7 technical support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="card bg-base-100/30 backdrop-blur-sm border border-white/10 shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-base-content">
            Send Us a Message
          </h2>
          <form className="space-y-4">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email w-full" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input w-full" placeholder="Password" />
             
            </fieldset>

            <div className="form-control mt-8">
              <button
                type="submit"
                className="btn btn-primary rounded-full gap-2"
              >
                <FaPaperPlane />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
