import { useLoaderData } from "react-router";
import { format, isBefore } from "date-fns";
import { Typewriter } from "react-simple-typewriter";
import CountUp from "react-countup";
import { FaUserCircle, FaUsers } from "react-icons/fa";

const GroupDetails = () => {
  const group = useLoaderData();
  const isExpired = isBefore(new Date(group.startDate), new Date());
  const handelJoin = () => {};
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="card lg:card-side bg-base-100 shadow-sm">
        <figure className="lg:w-1/2">
          <img
            src={group.imageUrl}
            alt={group.groupName}
            className="h-full w-full object-cover"
          />
        </figure>
        <div className="card-body lg:w-1/2 relative">
          <h2 className="card-title text-2xl text-primary font-extrabold">
            <Typewriter
              words={[group.groupName]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
            <span className="badge badge-soft badge-success">
              {group.category}
            </span>
          </h2>

          <p>
            <b>Start Date:</b>{" "}
            {format(new Date(group.startDate), "eee MMM dd yyyy")}
          </p>
          <p>
            <b>Location:</b> {group.location}
          </p>
          <div className="absolute -right-4 -top-4 bg-emerald-500 text-white min-w-24 min-h-26 p-2 flex flex-col items-center justify-center rounded-sm shadow-lg border-4 border-white z-10">
            <FaUsers className="text-lg mb-1" />
            <CountUp
              start={0}
              end={group.maxMembers}
              duration={2}
              className="text-2xl font-bold"
            />
            <div className="text-xs font-semibold mt-1">Max Members</div>
          </div>
          <p>
            <b>Description:</b> {group.description}
          </p>
          <hr className="my-2" />

          <p className="flex items-start gap-2 text-sm mt-2">
            <FaUserCircle className="text-lg mt-1 text-primary" />
            <span className="flex flex-col">
              <span>
                <b>Created by:</b> {group.userName}
              </span>
              <span className="text-xs text-gray-400">{group.userEmail}</span>
            </span>
          </p>

          <div className="mt-4">
            {isExpired ? (
              <div className="">
                <p className="text-red-600 font-semibold mt-2">
                  ⚠️ This group is no longer active.
                </p>
              </div>
            ) : (
              <div className="text-center">
                <button onClick={handelJoin} className="btn btn-success w-full mt-2">
                  Join Group
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupDetails;
