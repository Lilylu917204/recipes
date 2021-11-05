import React, { useEffect } from "react";
import { selectUserName, login, logout } from "../../features/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { auth, provider } from "../../common/firebase/firebase";

function Login() {
  const dispatch = useDispatch();
  const user = useSelector(selectUserName);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user is ", authUser);
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
            displayName: authUser.displayName,
            photo: authUser.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  const signInHandler = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((err) => console.log(err.message));
  };

  const signOutHandler = (e) => {
    e.preventDefault();
    auth
      .signOut()
      .then(() => {
        dispatch(logout());
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div>
      {user ? (
        <div>
          <span>Welcome,{user.displayName}</span>
          <span>{user.email}</span>
          <img src={user.photo} alt="user-image" />
          <button onClick={signOutHandler}>Sign Out</button>
        </div>
      ) : (
        <button onClick={signInHandler}>Sign In</button>
      )}
    </div>
  );
}

export default Login;
