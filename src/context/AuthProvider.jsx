import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase.init";
import { useState, useEffect } from "react";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // store logged in user
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  // Observe user state
  useEffect(() => {
    let isMounted = true; // safety flag

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!isMounted) return;

      setUser(currentUser);

      if (currentUser?.email) {
        fetch("http://localhost:3000/users") // returns all users
          .then((res) => res.json())
          .then((users) => {
            if (isMounted) {
              // Find the logged-in user's profile by email
              const matchedUser = Array.isArray(users)
                ? users.find((u) => u.email === currentUser.email)
                : users.email === currentUser.email
                  ? users
                  : null;

              setProfile(matchedUser || null);
              console.log("Matched profile:", matchedUser);
            }
          })
          .catch((err) => console.error("Profile fetch error:", err));
      } else {
        setProfile(null);
      }

      setLoading(false);
    });

    return () => {
      isMounted = false; // prevent state updates after unmount
      unsubscribe(); // cleanup Firebase listener
    };
  }, []);

  const userInfo = {
    createUser,
    signInUser,
    user,
    loading,
    logout,
    profile,
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
