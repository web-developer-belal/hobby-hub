import React, { use, useState } from "react";
import { FaSave } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Profile = () => {
  const { user, setUser, profileUpdate } = use(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleSaveChanges = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const name = form.name.value;
    const photo = form.photoURL.value;

    if (name.length < 3 || photo.length < 5) {
      toast("Please enter a valid name.");
      return;
    }
    profileUpdate(name,photo).then(() => {
      setUser({
        displayName:name,
        photoURL:photo,
        email:user.email
      })
      setLoading(false);
      toast('Profile update successfully.')
    }).catch(() => {
      toast('Something wen'/'t wrong.')
      setLoading(false);
    });
  };

  return (
    <div className="max-h-screen max-w-5xl mx-auto my-10 grid grid-cols-1 md:grid-cols-5 gap-5 md:gap-10">
      <Helmet>
        <title>{user.displayName} profile | PetPawJoy</title>
      </Helmet>
      <div className="md:col-span-2 bg-gray-100 p-6 shadow-lg rounded-lg">
        <div className="flex flex-col items-center ">
          
          <div className="avatar mb-3">
            <div className="w-24 h-24 rounded-full ring ring-primary ring-offset-2">
              <img src={user.photoURL} alt={user.name} />
            </div>
          </div>

         
          <h2 className="text-xl font-semibold text-primary">
            {user.displayName}
          </h2>
        
          <p className="text-sm text-gray-600">{user.email}</p>
        </div>
      </div>

      <div className="flex-1  md:col-span-3">
        <form
          onSubmit={handleSaveChanges}
          className="bg-white p-6 rounded-lg shadow-lg space-y-6"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-gray-700 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="input input-bordered w-full"
              defaultValue={user.displayName}
              placeholder="Enter your name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="photoURL" className="text-gray-700 font-medium">
              Photo URL
            </label>
            <input
              type="text"
              id="photoURL"
              className="input input-bordered w-full"
              defaultValue={user.photoURL}
              placeholder="Enter your photo URL"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="btn btn-primary text-white flex items-center gap-2"
            >
              {loading ? <span className="loading loading-spinner"></span> : ""}
              <FaSave />
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
