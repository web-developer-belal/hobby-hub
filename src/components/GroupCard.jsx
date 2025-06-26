import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router";

const GroupCard = ({ group }) => {
  return (
    <div className="card backdrop-blur-md bg-base-100/30 shadow-xl border border-white/10 transition-all hover:shadow-2xl hover:-translate-y-1">
      <figure>
        <img
          src={group.imageUrl}
          alt={group.groupName}
          className="h-48 w-full object-cover rounded-t-lg"
        />
      </figure>
      <div className="card-body p-5">
        <h3 className="card-title text-base-content">
          {group.groupName}{" "}
          <span className="badge badge-success bg-success/10 rounded-full text-success border-success/30">
            {group.category}
          </span>
        </h3>
        <p className="text-sm text-base-content/70">
          Start Date: {new Date(group.startDate).toDateString()}
        </p>
        <div className="flex items-start gap-2 text-sm text-base-content/80 mt-2">
          <FaUserCircle className="text-lg mt-1 text-primary" />
          <span className="flex flex-col">
            <span>
              <b>Created by:</b> {group.userName}
            </span>
            <span className="text-xs text-base-content/50">{group.userEmail}</span>
          </span>
        </div>
        <div className="card-actions justify-end mt-4">
          <Link 
            to={`/group/${group._id}`} 
            className="btn btn-primary btn-sm md:btn-md bg-primary/90 hover:bg-primary border-primary/50"
          >
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GroupCard;