// src/pages/Home.jsx
import { Link, useLoaderData } from "react-router";
import { MdEmail, MdOutlineConnectWithoutContact } from "react-icons/md";
import { AiOutlineSmile } from "react-icons/ai";
import { BiBulb } from "react-icons/bi";
import { Typewriter } from "react-simple-typewriter";
import GroupCard from "../components/GroupCard";
import Testimonials from "../components/Testimonials";
import SectionTitle from "../components/SectionTitle";
import { FaArrowDown } from "react-icons/fa";
import Lottie from "lottie-react";
import newsLatterAnimation from "../assets/Animation - 1751013875294.json";

const Home = () => {
  const groups = useLoaderData();

  const handleScrollToSection = () => {
    const el = document.getElementById("featured-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Hero Carousel */}
      <div className="carousel w-full h-screen relative">
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <img
            src="https://i.ibb.co/JRXR3gmZ/Dashboard-835-gardening-03-24.jpg"
            className="w-full h-full object-cover"
            alt="HobbyHub Banner"
          />

          <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 text-center text-white px-4 md:px-8 lg:px-16">
            <div className="max-w-4xl mx-auto space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                <Typewriter
                  words={[
                    "Join Local Hobby Groups",
                    "Connect With Passionate People",
                    "Find Your Creative Community",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </h1>
              <p className="text-lg md:text-xl">
                Discover and join hobby groups in your area. From book clubs to
                hiking adventures, find your perfect match today!
              </p>
              <Link
                to="/groups"
                className="btn btn-primary mt-6 px-8 py-3 text-lg"
              >
                Explore Groups
              </Link>
            </div>
          </div>

          {/* Animated Down Arrow */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce">
            <FaArrowDown
              size={30}
              className="text-white opacity-80"
              onClick={handleScrollToSection}
            />
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <div className="absolute inset-0 bg-blue-900 opacity-50"></div>
          <img
            src="https://i.ibb.co/Wp4h2bNS/holly-mandarich-Y90-GKs-TKx-BM-unsplash.webp"
            className="w-full h-full object-cover"
            alt="Coding Groups"
          />

          <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 text-center text-white px-4 md:px-8 lg:px-16">
            <div className="max-w-4xl mx-auto space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                <Typewriter
                  words={[
                    "Start Your Own Group",
                    "Share Your Passion",
                    "Lead a Community",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </h1>
              <p className="text-lg md:text-xl">
                Can't find a group for your hobby? Create your own and invite
                like-minded people to join your community!
              </p>
              <Link
                to="/createGroup"
                className="btn btn-secondary mt-6 px-8 py-3 text-lg"
              >
                Create Group
              </Link>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <div className="absolute inset-0 bg-green-900 opacity-50"></div>
          <img
            src="https://i.ibb.co/G4s7GWZz/Jeddah-Fishing-Trips.jpg"
            className="w-full h-full object-cover"
            alt="Community Meeting"
          />

          <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 text-center text-white px-4 md:px-8 lg:px-16">
            <div className="max-w-4xl mx-auto space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                <Typewriter
                  words={[
                    "Meet New Friends",
                    "Learn New Skills",
                    "Grow Together",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </h1>
              <p className="text-lg md:text-xl">
                Expand your social circle while doing what you love. Our groups
                meet regularly to share knowledge and experiences.
              </p>
              <Link
                to="/groups"
                className="btn btn-accent mt-6 px-8 py-3 text-lg"
              >
                Join Now
              </Link>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      {/* Featured Groups */}
      <section id="featured-section" className="my-16 px-4 md:px-10">
        <SectionTitle title="Featured Groups" />
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {groups.slice(0, 8).map((group) => (
            <GroupCard group={group} key={group._id} />
          ))}
        </div>
      </section>

      {/* Why HobbyHub */}
      <section className="bg-base-100 py-16 md:py-20 px-4 md:px-10">
        <SectionTitle title="✨ Why HobbyHub?" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-center">
          <div>
            <MdOutlineConnectWithoutContact className="text-4xl mx-auto text-primary" />
            <h4 className="text-xl font-semibold mt-2">Connect Locally</h4>
            <p>Meet people nearby who share your hobbies and interests.</p>
          </div>
          <div>
            <BiBulb className="text-4xl mx-auto text-primary" />
            <h4 className="text-xl font-semibold mt-2">Learn Together</h4>
            <p>Grow skills through group activities, projects, and meetups.</p>
          </div>
          <div>
            <AiOutlineSmile className="text-4xl mx-auto text-primary" />
            <h4 className="text-xl font-semibold mt-2">Enjoy Your Time</h4>
            <p>Reclaim your free time with fun and meaningful hobbies.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Newsletter CTA */}
      <section className="bg-success/40 text-primary-content py-16 px-4 md:px-10">
        <div className="max-w-40 mx-auto">
          <Lottie animationData={newsLatterAnimation} loop={true} />
        </div>
        <div className="max-w-xl mx-auto text-center">
          <p className="mb-4 text-lg text-black">
            Subscribe to our newsletter for hobby inspiration, tips, and new
            group announcements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
            <div className="relative w-full max-w-sm text-success-content">
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full pr-4 text-base text-success-content"
              />
            </div>
            <button className="btn btn-accent rounded-md shadow-sm px-6">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
