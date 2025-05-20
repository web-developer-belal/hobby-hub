import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { BsTrash2 } from "react-icons/bs";
import { toast } from "react-toastify";

const MySubscriptions = () => {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("subscriptions");
    try {
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed) && parsed.length > 0) {
        setSubscriptions(parsed);
      } else {
        setSubscriptions([]);
      }
    } catch (err) {
      console.error("Invalid data in localStorage", err);
      setSubscriptions([]);
    }
  }, []);

  const handleUnsubscribe = (id) => {
    const confirmed = window.confirm("Are you sure you want to unsubscribe?");
    if (!confirmed) return;

    const updated = subscriptions.filter((sub) => sub.id !== id);
    setSubscriptions(updated);
    localStorage.setItem("subscriptions", JSON.stringify(updated));
    toast.success("Unsubscribed successfully.");
  };

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleString();
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-5">
      <Helmet>
        <title>My Subscriptions</title>
      </Helmet>
      <h2 className="section-title">My Subscriptions</h2>

      {subscriptions.length > 0 ? (
        <ul className="space-y-4">
          {subscriptions.map((sub) => (
            <li
              key={sub.id}
              className="flex justify-between items-center border border-primary p-4 rounded-lg shadow-sm hover:shadow-lg transition"
            >
              <div>
                <h3 className="text-xl font-semibold">{sub.name}</h3>
                <p className="text-sm text-gray-500">Price: ${sub.price}</p>
                <p className="text-sm text-gray-500">
                  Subscribed at: {formatDate(sub.subscribedAt)}
                </p>
              </div>
              <button
                onClick={() => handleUnsubscribe(sub.id)}
                className="text-red-500 hover:text-red-700"
                title="Unsubscribe"
              >
                <BsTrash2 className="w-5 h-5" />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center text-gray-500">
          <p>You have no subscriptions yet.</p>
        </div>
      )}
    </div>
  );
};

export default MySubscriptions;
