import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router";

const SignIn = () => {
  const { signInUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/");
      // Swal.fire({
      //   title: "You are already signed in!",
      //   icon: "success",
      //   showConfirmButton: false,
      //   timer: 2500,
      // });
    }
  }, [user, navigate]);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password } = Object.fromEntries(formData.entries());
    signInUser(email, password)
      .then((result) => {
        navigate("/");
        //Update last logged in time
        const signInInfo = {
          email,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };
        fetch(`http://localhost:3000/users`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signInInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
        Swal.fire({
          // position: "bottom-end",
          title: "Sign In Successfully",
          text: "Sign In Successfully",
          showConfirmButton: false,
          timer: 1500,
          icon: "success",
          // width: "300px",
        });
        console.log(result);
      })
      .catch((error) => {
        Swal.fire({
          title: "Sign In Failed",
          text: "Sign In Failed",
          icon: "error",
          showConfirmButton: false,
          timer: 2500,
        });
        console.log(error);
      });
  };
  return (
    <div className="font-raleway mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 py-12">
      <h2 className="font-rancho text-3xl font-bold text-[#664221]">
        Sign in to manage your Store
      </h2>

      <form
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 md:w-lg"
        onSubmit={handleSignIn}
      >
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
          Sign In
        </button>
        <p className="mt-4 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link to="/signup" className="text-[#664221]">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
