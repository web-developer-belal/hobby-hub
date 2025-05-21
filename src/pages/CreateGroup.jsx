import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";

const CreateGroup = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const newGroup = {
      name: form.groupName.value,
      category: form.category.value,
      description: form.description.value,
      location: form.location.value,
      maxMembers: form.maxMembers.value,
      startDate: form.startDate.value,
      imageUrl: form.imageUrl.value,
      creatorName: form.userName.value,
      creatorEmail: form.userEmail.value,
    };

    console.log(newGroup);
    toast.success("Group Created Successfully!");
    form.reset();
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Create New Group</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <input
          type="text"
          name="groupName"
          placeholder="Group Name"
          className="input input-bordered w-full"
          required
        />

        <select name="category" className="select select-bordered w-full" required>
          <option disabled selected>
            Choose Category
          </option>
          <option>Drawing & Painting</option>
          <option>Photography</option>
          <option>Video Gaming</option>
          <option>Fishing</option>
          <option>Running</option>
          <option>Cooking</option>
          <option>Reading</option>
          <option>Writing</option>
        </select>

        <textarea
          name="description"
          placeholder="Group Description"
          className="textarea textarea-bordered w-full"
          required
        ></textarea>

        <input
          type="text"
          name="location"
          placeholder="Meeting Location"
          className="input input-bordered w-full"
          required
        />

        <input
          type="number"
          name="maxMembers"
          placeholder="Max Members"
          className="input input-bordered w-full"
          required
        />

        <input
          type="date"
          name="startDate"
          className="input input-bordered w-full"
          required
        />

        <input
          type="url"
          name="imageUrl"
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

        <button type="submit" className="btn btn-primary mt-2">
          Create Group
        </button>
      </form>
    </div>
  );
};

export default CreateGroup;
