import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { useNavigate } from "react-router";

const User = () => {
  const { user, profile } = useContext(AuthContext);
  console.log(profile);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="mx-auto mt-8 max-w-7xl p-4 md:mt-0 md:p-24">
      {user && profile && (
        <div className="flex flex-col items-center justify-center gap-2 p-2 sm:flex-row sm:items-center sm:gap-4 sm:p-0">
          <img
            src={profile?.photoURL || "https://via.placeholder.com/40"}
            alt={profile?.name || "User"}
            className="h-32 w-32 rounded-md border-2 border-white object-center sm:h-12 sm:w-12 md:h-72 md:w-72 md:rounded-full md:object-contain"
          />
          <div className="flex flex-col text-center sm:text-left md:gap-4">
            <h2 className="font-rancho truncate text-2xl text-[#794c23] sm:text-4xl sm:font-bold">
              {profile?.name || user?.email}
            </h2>
            <p className="flex items-center gap-2 truncate text-sm text-[#794c23]">
              <FaEnvelope /> {profile?.email || "No email found"}
            </p>
            <p className="flex items-center gap-2 truncate text-sm text-[#794c23]">
              <FaMapMarkerAlt /> {profile?.address || "No address found"}
            </p>

            <p className="flex items-center gap-2 truncate text-sm text-[#794c23]">
              <FaPhone /> {profile?.phone || "No phone number found"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
