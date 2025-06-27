import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaUserFriends } from 'react-icons/fa';
import eventsImg from '../assets/event.jpg';

const EventsPage = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Urban Photography Walk",
      date: "2023-11-15",
      location: "Central Park, New York",
      attendees: 24,
      group: "NYC Photographers Club"
    },
    {
      id: 2,
      title: "Beginner's Pottery Workshop",
      date: "2023-11-20",
      location: "Creative Arts Center",
      attendees: 8,
      group: "Clay Masters Collective"
    }
  ];

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
              Join upcoming meetups, workshops, and gatherings with fellow hobby enthusiasts.
            </p>
            <button className="btn btn-primary btn-lg rounded-full px-8">
              Host an Event
            </button>
          </div>
          <div className="md:w-1/2">
            <img 
              src={eventsImg} 
              alt="Community events" 
              className="rounded-xl shadow-xl w-full h-auto max-h-96 object-cover" 
            />
          </div>
        </div>

        {/* Events List */}
        <div className="grid md:grid-cols-2 gap-8">
          {upcomingEvents.map(event => (
            <div key={event.id} className="card bg-base-100/30 backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-2xl transition-all">
              <div className="card-body">
                <h2 className="card-title text-xl">{event.title}</h2>
                <div className="flex items-center gap-2 text-base-content/80 mt-2">
                  <FaCalendarAlt />
                  <span>{new Date(event.date).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center gap-2 text-base-content/80 mt-1">
                  <FaMapMarkerAlt />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2 text-base-content/80 mt-1">
                  <FaUserFriends />
                  <span>{event.attendees} attending • {event.group}</span>
                </div>
                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-primary btn-sm">Join Event</button>
                  <button className="btn btn-ghost btn-sm">Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">Don't see an event you like?</h2>
          <p className="text-xl text-base-content/80 mb-6 max-w-2xl mx-auto">
            Start your own event and invite the community to join your activity!
          </p>
          <button className="btn btn-secondary rounded-full px-8 gap-2">
            <FaCalendarAlt /> Create New Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;