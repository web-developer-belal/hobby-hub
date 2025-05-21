import React from "react";
import { Link } from "react-router";

const GroupCard = ({ group }) => {
  return (
    <div>
      <div key={group._id} className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src={group.imageUrl}
            alt={group.groupName}
            className="h-48 w-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h3 className="card-title">{group.groupName}</h3>
          <p className="text-sm text-gray-500">Category: {group.category}</p>
          <p className="text-sm text-gray-500">
            Start Date: {new Date(group.startDate).toDateString()}
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
