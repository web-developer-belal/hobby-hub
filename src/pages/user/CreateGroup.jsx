import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-toastify";
import SectionTitle from "../../components/SectionTitle";

const CreateGroup = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData.entries());
    fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/groups`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formValues),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Group Created Successfully!");
          form.reset();
        } else {
          toast.error("Something wen'\t wrong.");
        }
      });
  };

  return (
    <div className="">
      
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-4 shadow-md p-3 md:p-6 rounded-md bg-base-100"
      >
        <SectionTitle title="Create group" subtitle="Enter valid information to create your group."></SectionTitle>
        
        <input
          type="text"
          name="groupName"
          placeholder="Group Name"
          className="input input-bordered w-full"
          required
        />

        <select
          name="category"
          className="select select-bordered w-full"
          required
        >
          <option disabled selected>
            Choose Category
          </option>
          <option>Drawing & Painting</option>
          <option>Photography</option>
          <option>Video Gaming</option>
          <option>Fishing</option>
          <option>Gardening</option>
          <option>Running</option>
          <option>Cooking</option>
          <option>Reading</option>
          <option>Writing</option>
          <option>Other</option>
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
