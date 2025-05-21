import { useParams } from "react-router";

const GroupDetails = () => {
  const { id } = useParams();

  const group = {
    id,
    name: "Weekend Hikers",
    category: "Hiking",
    date: "2025-06-10",
    location: "Mountain Trail Park",
    description: "Join us for scenic hikes every weekend.",
    maxMembers: 15,
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="card bg-base-100 shadow-xl border">
        <div className="card-body">
          <h2 className="card-title text-2xl">{group.name}</h2>
          <p><b>Category:</b> {group.category}</p>
          <p><b>Date:</b> {group.date}</p>
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
