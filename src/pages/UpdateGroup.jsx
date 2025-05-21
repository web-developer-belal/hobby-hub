import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";
import { useLoaderData, useParams } from "react-router";

const UpdateGroup = () => {
  const { user } = useContext(AuthContext);
  const group = useLoaderData();
  const { id } = useParams();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData.entries());
    fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/group/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formValues),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount == 1) {
          toast.success("Group Updated Successfully!");
        } else {
          toast.error("Something wen'\t wrong.");
        }
      });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Update Group</h2>
      <form onSubmit={handleUpdate} className="grid grid-cols-1 gap-4">
        <input
          type="text"
          name="groupName"
          defaultValue={group.groupName}
          placeholder="Group Name"
          className="input input-bordered w-full"
          required
        />

        <select
          name="category"
          defaultValue={group.category}
          className="select select-bordered w-full"
          required
        >
          <option disabled>Choose Category</option>
          <option>Drawing & Painting</option>
          <option>Photography</option>
          <option>Video Gaming</option>
          <option>Fishing</option>
          <option>Running</option>
          <option>Cooking</option>
          <option>Reading</option>
          <option>Writing</option>
          <option>Hiking</option>
        </select>

        <textarea
          name="description"
          defaultValue={group.description}
          placeholder="Group Description"
          className="textarea textarea-bordered w-full"
          required
        ></textarea>

        <input
          type="text"
          name="location"
          defaultValue={group.location}
          placeholder="Meeting Location"
          className="input input-bordered w-full"
          required
        />

        <input
          type="number"
          name="maxMembers"
          defaultValue={group.maxMembers}
          placeholder="Max Members"
          className="input input-bordered w-full"
          required
        />

        <input
          type="date"
          name="startDate"
          defaultValue={group.startDate}
          className="input input-bordered w-full"
          required
        />

        <input
          type="url"
          name="imageUrl"
          defaultValue={group.imageUrl}
          placeholder="Image URL"
          className="input input-bordered w-full"
          required
        />

        <input
          type="text"
          name="userName"
          defaultValue={user?.displayName || "Anonymous"}
          readOnly
          className="input input-bordered w-full bg-base-200"
        />

        <input
          type="email"
          name="userEmail"
          defaultValue={user?.email || "example@email.com"}
          readOnly
          className="input input-bordered w-full bg-base-200"
        />

        <button type="submit" className="btn btn-accent mt-2">
          Update Group
        </button>
      </form>
    </div>
  );
};

export default UpdateGroup;
