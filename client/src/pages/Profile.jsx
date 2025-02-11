import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  signInFailure,
  signInStart,
  signInSuccess,
  signOutUserFailure,
  signOutUserStart,
  signOutUserSuccess,
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
} from "../redux/user/userSlice";
import { Link } from "react-router-dom";

export default function Profile() {
  const { curentUser, loading, error } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const dispatch = useDispatch();
  // const fileRef = useRef(null);
  // const [file, setFile] = useState(undefined);
  // useEffect(() => {}, [file]);
  // console.log(loading);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  console.log(curentUser);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${curentUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data.message));
        return;
      }

      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error.message));
    }
  };

  const handleDeleteUser = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/api/user/delete/${curentUser._id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };

  const handleSignout = async () => {
    try {
      dispatch(signOutUserStart());
      const res = await fetch(`/api/auth/signout`);
      const data = await res.json();
      if (data.success === false) {
        dispatch(signOutUserFailure(data.message));
      }
      dispatch(signOutUserSuccess(data));
    } catch (error) {
      dispatch(signOutUserFailure(error.message));
    }
  };
  // console.log(curentUser.avatar);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7 ">Profile</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* <input
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          ref={fileRef}
          accept="image/*"
          hidden
        /> */}
        <img
          // onClick={() => fileRef.current.click()}
          src={curentUser.avatar}
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
          alt="profile"
        />
        <input
          type="text"
          id="username"
          placeholder="Username"
          defaultValue={curentUser.username}
          className="border p-3 rounded-lg border-slate-300"
          onChange={handleChange}
        />
        <input
          type="email"
          id="email"
          placeholder="Email"
          defaultValue={curentUser.email}
          className="border p-3 rounded-lg border-slate-300"
          onChange={handleChange}
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="border p-3 rounded-lg border-slate-300"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-80 cursor-pointer uppercase"
        >
          {loading ? "Updating..." : "Update"}
        </button>
        <Link
          className="bg-green-700 p-3 text-white rounded-lg uppercase text-center"
          to="/create-listing"
        >
          Create Listing
        </Link>
      </form>
      <div className="flex justify-between mt-4">
        <span
          className="text-red-700 cursor-pointer"
          onClick={handleDeleteUser}
        >
          Delete Account
        </span>
        <span onClick={handleSignout} className="text-red-700 cursor-pointer">
          Sign Out
        </span>
      </div>
      <p className="text-red-700 mt-5">{error ? error : ""}</p>
      <p className="text-green-600 mt-5">
        {updateSuccess ? "User Updated Successfully!" : ""}
      </p>
    </div>
  );
}
