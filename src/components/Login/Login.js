import React, { useState } from "react";
import { login } from "../../features/userSlice";
import { useDispatch } from "react-redux";
import { auth, provider } from "../../common/firebase/firebase";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const dispatch = useDispatch();

  const emailSignInHandler = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        dispatch(
          login({
            email: authUser.user.email,
            uid: authUser.user.uid,
            displayName: authUser.user.displayName,
            photoURL: authUser.user.photoURL,
          })
        );
      })
      .catch((err) => alert(err));
  };

  const registerHandler = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password).then((authUser) => {
      authUser.user
        .updateProfile({
          displayName: name,
          photoURL: profilePic,
        })
        .then(() => {
          dispatch(
            login({
              email: authUser.user.email,
              uid: authUser.user.uid,
              displayName: name,
              photoURL: profilePic,
            })
          );
        });
    });
  };

  const googleSignInHandler = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((err) => alert(err));
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={name}
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Profile picture URL"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" onClick={emailSignInHandler}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?
        <span onClick={registerHandler}>Register Now</span>
      </p>

      <button onClick={googleSignInHandler}>Sign In with Google</button>
    </div>
  );
}

export default Login;
