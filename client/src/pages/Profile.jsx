import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const { curentUser } = useSelector((state) => state.user);
  // const fileRef = useRef(null);
  // const [file, setFile] = useState(undefined);
  // useEffect(() => {}, [file]);
  console.log(curentUser.avatar);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7 ">Profile</h1>
      <form className="flex flex-col gap-4">
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
          className="border p-3 rounded-lg border-slate-300"
        />
        <input
          type="email"
          id="email"
          placeholder="Email"
          className="border p-3 rounded-lg border-slate-300"
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="border p-3 rounded-lg border-slate-300"
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-80 cursor-pointer uppercase">
          Update
        </button>
      </form>
      <div className="flex justify-between mt-4">
        <span className="text-red-700 cursor-pointer">Delete Account</span>
        <span className="text-red-700 cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
}
