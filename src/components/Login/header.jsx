import { onAuthStateChanged, updateProfile } from "firebase/auth";
import BackgroundImage from "../utility/background-image";
import auth from "../utility/firebase";
import Logo from "../utility/logo";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        updateProfile(auth.currentUser, {
          displayName: "Abhishek HV",
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        })
          .then(() => {
            navigate("/browse");
          })
          .catch((error) => {
            // An error occurred
            // ...
          });

        // ...
      } else {
        navigate("/");
      }
    });
  }, []);

  return (
    <>
      <BackgroundImage />
      <Logo />
    </>
  );
};

export default Header;
