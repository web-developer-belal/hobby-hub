import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router";

const GroupCard = ({ group }) => {
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src={group.imageUrl}
            alt={group.groupName}
            className="h-48 w-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h3 className="card-title">
            {group.groupName}{" "}
            <span className="badge badge-soft badge-success">{group.category}</span>
          </h3>
          <p className="text-sm text-gray-500">
            Start Date: {new Date(group.startDate).toDateString()}
          </p>
          <p className="flex items-start gap-2 text-sm text-gray-600 mt-2">
            <FaUserCircle className="text-lg mt-1 text-primary" />
            <span className="flex flex-col">
              <span>
                <b>Created by:</b> {group.userName}
              </span>
              <span className="text-xs text-gray-400">{group.userEmail}</span>
            </span>
          </p>
          <div className="card-actions justify-end">
            <Link to={`/group/${group._id}`} className="btn btn-primary">
              See More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupCard;
