import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";

const MyGroups = () => {
  const { user } = useContext(AuthContext);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `${import.meta.env.VITE_APP_BACKEND_URL}/my-groups?email=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => setGroups(data));
    }
  }, [user]);

  const handelDelete = (id) => {
    fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/group/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount == 1) {
          const newGroups = groups.filter((data) => data._id != id);
          setGroups(newGroups);
          toast.success("Deleted successfully");
        }
      });
  };

  return (
    <div className="p-6 shadow max-w-6xl mx-auto rounded-md my-10">
      <h2 className="text-2xl font-bold mb-4">My Groups</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Group</th>
              <th>Start Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {groups.map((data) => {
              return (
                <tr key={data._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={data.imageUrl} alt={data.groupName} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{data.groupName}</div>
                        <div className="text-sm opacity-50">
                          {data.location}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{data.startDate}</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <Link
                        to={`/updateGroup/${data._id}`}
                        className="btn btn-success btn-sm"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handelDelete(data._id)}
                        className="btn btn-error btn-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyGroups;
