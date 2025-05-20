import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import app from "../services/firebase.config.js";
export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);

  const signInUser = (email, password) => {
    setUserLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const registerUser = (email, password) => {
    setUserLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const profileUpdate = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const restPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = () => {
    setUserLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const monitor = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setUserLoading(false);
    });
    return () => {
      monitor();
    };
  }, []);

  const authData = {
    user,
    setUser,
    registerUser,
    signInUser,
    logout,
    googleSignIn,
    userLoading,
    setUserLoading,
    profileUpdate,
    restPassword
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
