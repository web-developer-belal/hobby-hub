import { Link } from "react-router";

const myGroups = [
  {
    id: "1",
    name: "Writers Unite",
    category: "Writing",
    date: "2025-06-05",
  },
];

const MyGroups = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Groups</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {myGroups.map((group) => (
              <tr key={group.id}>
                <td>{group.name}</td>
                <td>{group.category}</td>
                <td>{group.date}</td>
                <td>
                  <Link to={`/updateGroup/${group.id}`} className="btn btn-info btn-xs mr-2">Update</Link>
                  <button className="btn btn-error btn-xs">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyGroups;
