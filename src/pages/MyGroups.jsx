import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { format } from "date-fns";
import CountUp from "react-countup";

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
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this group!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
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
              Swal.fire("Deleted!", "Your group has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="p-6 bg-base-100 shadow max-w-6xl mx-auto rounded-md my-10">
      <h2 className="text-2xl font-bold mb-4">My Groups</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Group</th>
              <th>Category</th>
              <th>Members</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {groups?.map((data) => (
              <tr key={data._id}>
                <td>
                  <Link to={`/group/${data._id}`} className="flex items-center gap-4">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={data.imageUrl} alt={data.groupName} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{data.groupName}</div>
                      <div className="text-sm text-gray-500">{format(new Date(data.startDate), "eee MMM dd yyyy")}</div>
                    </div>
                  </Link>
                </td>
                <td>
                  <span className="badge badge-soft badge-success">
                    {data.category}
                  </span>
                </td>
                <td><CountUp start={0} end={data.maxMembers}></CountUp></td>
                
                <td>{data.location}</td>
                
                <td>
                  <div className="flex gap-2">
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyGroups;
