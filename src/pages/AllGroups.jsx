// pages/AllGroups.jsx
import { Link } from "react-router";

const fakeGroups = [
  {
    id: "1",
    name: "Nature Photography",
    category: "Photography",
    date: "2025-06-01",
  },
  {
    id: "2",
    name: "Writers Unite",
    category: "Writing",
    date: "2025-06-05",
  },
  {
    id: "3",
    name: "Weekend Hikers",
    category: "Hiking",
    date: "2025-06-10",
  },
];

const AllGroups = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Explore All Hobby Groups</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {fakeGroups.map((group) => (
          <div key={group.id} className="card bg-base-100 shadow-xl border">
            <div className="card-body">
              <h2 className="card-title">{group.name}</h2>
              <p><span className="font-semibold">Category:</span> {group.category}</p>
              <p><span className="font-semibold">Start Date:</span> {group.date}</p>
              <div className="card-actions justify-end">
                <Link to={`/group/${group.id}`} className="btn btn-primary btn-sm">
                  See More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllGroups;
