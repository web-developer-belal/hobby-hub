import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";

const UpdateGroup = () => {
  const { user } = useContext(AuthContext);
  const group = {
    groupName: "Nature Walkers",
    category: "Hiking",
    description: "A group for people who love to explore nature trails together.",
    location: "Central Park, NYC",
    maxMembers: 20,
    startDate: "2025-06-15",
    imageUrl: "https://i.ibb.co/sample-image.jpg",
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedGroup = {
      name: form.groupName.value,
      category: form.category.value,
      description: form.description.value,
      location: form.location.value,
      maxMembers: form.maxMembers.value,
      startDate: form.startDate.value,
      imageUrl: form.imageUrl.value,
      updatedBy: user?.email,
    };

    console.log(updatedGroup);
    toast.success("Group updated successfully!");
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
