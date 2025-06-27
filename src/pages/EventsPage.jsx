import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaUserFriends } from "react-icons/fa";
import eventAnimation from "../assets/Animation - 1751013959658 (1).json";
import Lottie from "lottie-react";
import { toast } from "react-toastify";

const EventsPage = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Urban Photography Walk",
      date: "2023-11-15",
      location: "Central Park, New York",
      attendees: 24,
      group: "NYC Photographers Club",
    },
    {
      id: 2,
      title: "Beginner's Pottery Workshop",
      date: "2023-11-20",
      location: "Creative Arts Center",
      attendees: 8,
      group: "Clay Masters Collective",
    },
    {
      id: 3,
      title: "Sunset Hiking Meetup",
      date: "2023-11-25",
      location: "Bear Mountain Trail",
      attendees: 30,
      group: "Outdoor Enthusiasts Hub",
    },
    {
      id: 4,
      title: "Weekly Coding Jam",
      date: "2023-11-28",
      location: "Tech Loft, San Francisco",
      attendees: 18,
      group: "JS Coders Group",
    },
    {
      id: 5,
      title: "Guitar Circle Jam Session",
      date: "2023-12-02",
      location: "Downtown Music Café",
      attendees: 15,
      group: "Strum & Hum Society",
    },
    {
      id: 6,
      title: "Watercolor Landscape Class",
      date: "2023-12-05",
      location: "The Art Studio, Chicago",
      attendees: 12,
      group: "Windy City Artists",
    },
  ];

  const unknownButton = (e) => {
    e.preventDefault();
    toast.error("Need admin permission.contact with admin.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 to-base-200 py-12 px-4 sm:px-6 lg:px-8 pt-30">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Community <span className="text-base-content">Events</span>
            </h1>
            <p className="text-xl text-base-content/80 mb-6">
              Join upcoming meetups, workshops, and gatherings with fellow hobby
              enthusiasts.
            </p>
            <button
              onClick={unknownButton}
              className="btn btn-primary btn-lg rounded-full px-8"
            >
              Host an Event
            </button>
          </div>
          <div className="md:w-1/2">
            <Lottie animationData={eventAnimation}></Lottie>
          </div>
        </div>

        {/* Events List */}
        <div className="grid md:grid-cols-2 gap-8">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="card bg-base-100/30 backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="card-body">
                <h2 className="card-title text-xl">{event.title}</h2>
                <div className="flex items-center gap-2 text-base-content/80 mt-2">
                  <FaCalendarAlt />
                  <span>
                    {new Date(event.date).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-base-content/80 mt-1">
                  <FaMapMarkerAlt />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2 text-base-content/80 mt-1">
                  <FaUserFriends />
                  <span>
                    {event.attendees} attending • {event.group}
                  </span>
                </div>
                <div className="card-actions justify-end mt-4">
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={unknownButton}
                  >
                    Join Event
                  </button>
                  <button
                    className="btn btn-ghost btn-sm"
                    onClick={unknownButton}
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">
            Don't see an event you like?
          </h2>
          <p className="text-xl text-base-content/80 mb-6 max-w-2xl mx-auto">
            Start your own event and invite the community to join your activity!
          </p>
          <button
            onClick={unknownButton}
            className="btn btn-secondary rounded-full px-8 gap-2"
          >
            <FaCalendarAlt /> Create New Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
