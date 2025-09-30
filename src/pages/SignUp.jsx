import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router";
import { useEffect } from "react";

const SignUp = () => {
  const { createUser, user } = useContext(AuthContext);
  // console.log(createUser);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/");
      Swal.fire({
        title: "You are already signed in, please sign out to sign up",
        icon: "success",
        showConfirmButton: false,
        timer: 2500,
      });
    }
  }, [user, navigate]);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...restFormData } = Object.fromEntries(
      formData.entries(),
    );
    // console.log(email, password, userProfile);

    //Create User with email and password in firebase auth
    createUser(email, password)
      .then((result) => {
        console.log(result);

        const userProfile = {
          email,
          ...restFormData,
          createdAt: result.user?.metadata?.creationTime,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };

        //Set user profile in MongoDb
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User created successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      })
      .then((error) => {
        console.log(error);
      });
  };
  return (
    <div className="font-raleway mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 py-12">
      <h2 className="font-rancho text-3xl font-bold text-[#664221]">
        Sign up to manage your Store
      </h2>
      <form
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 md:w-lg"
        onSubmit={handleSignUp}
      >
        <label className="label text-[#664221]">Name</label>
        <input
          type="text"
          className="input w-full"
          placeholder="Enter your name"
          name="name"
        />
        <label className="label text-[#664221]">Photo URL</label>
        <input
          type="text"
          className="input w-full"
          placeholder="Enter your photo URL"
          name="photoURL"
        />
        <label className="label text-[#664221]">Address</label>
        <input
          type="text"
          className="input w-full"
          placeholder="Enter your address"
          name="address"
        />
        <label className="label text-[#664221]">Phone</label>
        <input
          type="text"
          className="input w-full"
          placeholder="Enter your phone number"
          name="phone"
        />
        <label className="label text-[#664221]">Email</label>
        <input
          type="email"
          className="input w-full"
          placeholder="Enter your email"
          name="email"
        />

        <label className="label text-[#664221]">Password</label>
        <input
          type="password"
          className="input w-full"
          placeholder="Enter your password"
          name="password"
        />

        <button className="mt-4 rounded-md bg-[#664221] px-4 py-2 text-white hover:bg-[#664221]/80 hover:font-semibold">
          Sign Up
        </button>
        <p className="mt-4 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link to="/signin" className="text-[#664221]">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
