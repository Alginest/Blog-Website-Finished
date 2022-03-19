import React, { useContext, useEffect, useState } from "react";
import { auth, db } from "./firebase/firebase";
import { signOut } from "firebase/auth";
import { deleteDoc, doc } from "firebase/firestore";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [person, setPerson] = useState([]);
  const [postList, setPostList] = useState([]);
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setUser(false);
      window.location.pathname = "/login";
    });
  };
  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };
  useEffect(() => {
    if (!user) return;
    let newPerson = {
      name: auth.currentUser.displayName,
      image: auth.currentUser.photoURL,
      id: auth.currentUser.uid,
    };
    setPerson(newPerson);
  }, [user]);
  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        person,
        signUserOut,
        postList,
        setPostList,
        deletePost,
        menu,
        toggleMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
//costume hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
