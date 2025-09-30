import headerLogo from "../assets/headerLogo.png";
import headerBg from "../assets/headerBg.jpg";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { FaSignOutAlt } from "react-icons/fa";

const Header = () => {
  const { user, logout, profile } = useContext(AuthContext);
  console.log(profile);
  // console.log(user);
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col items-center justify-around bg-cover bg-center py-5 md:flex-row"
      style={{ backgroundImage: `url(${headerBg})` }}
    >
      <div className="flex items-center justify-center gap-2 md:w-1/2">
        <img src={headerLogo} alt="headerLogo" className="h-auto w-16" />
        <h1 className="font-rancho text-5xl text-white">Espressor Emporium</h1>
      </div>
      <div className="flex items-center justify-center gap-12 md:w-1/2 md:gap-16">
        <button className="rounded-md bg-[#664221] px-4 py-2 text-white hover:bg-[#794c23]">
          <Link to="/">Home</Link>
        </button>

        {user ? (
          <div className="flex items-center gap-16 md:w-1/2">
            <div className="flex items-center gap-4">
              <img
                src={profile?.photoURL}
                alt="profile"
                className="h-10 w-10 rounded-full object-cover object-center"
              />
              <h2 className="font-rancho text-2xl text-white">
                <Link to="/user">{profile?.name || user.email}</Link>
              </h2>
            </div>
            <button
              onClick={logout}
              className="cursor-pointer rounded-md bg-[#664221] px-4 py-2 text-white hover:bg-[#794c23]"
            >
              <FaSignOutAlt title="Sign Out" />
            </button>
          </div>
        ) : (
          <>
            <button
              onClick={() => navigate("/signin")}
              className="rounded-md bg-[#664221] px-4 py-2 text-white hover:bg-[#794c23]"
            >
              Sign In
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="rounded-md bg-[#664221] px-4 py-2 text-white hover:bg-[#794c23]"
            >
              Sign Up
            </button>{" "}
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
