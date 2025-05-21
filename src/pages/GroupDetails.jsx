import { useLoaderData } from "react-router";

const GroupDetails = () => {
  const group=useLoaderData();
  
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="card bg-base-100 shadow-xl border">
        <div className="card-body">
          <h2 className="card-title text-2xl">{group.groupName}</h2>
          <p><b>Category:</b> {group.category}</p>
          <p><b>Date:</b> {group.startDate}</p>
          <p><b>Location:</b> {group.location}</p>
          <p><b>Description:</b> {group.description}</p>
          <p><b>Max Members:</b> {group.maxMembers}</p>
          <div className="mt-4">
            <button className="btn btn-success">Join Group</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupDetails;
