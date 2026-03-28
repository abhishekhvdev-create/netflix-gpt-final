import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utility/userSlice";
import { PROFILE_IMAGE, SIGNOUT } from "../utility/constants";
import auth from "../utility/firebase";

export const Signout = () => {
  const dispatch = useDispatch();
  const user = useSelector((user) => user?.user?.user);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="absolute top-6 right-8 text-white flex flex-row justify-evenly">
      <span className="px-2">{user?.payload?.displayName}</span>
      <span className="w-10">
        <img src={PROFILE_IMAGE} />
      </span>
      <span
        href=""
        className="hover:underline font-bold cursor-pointer"
        onClick={handleSignout}
      >
        {SIGNOUT}
      </span>
    </div>
  );
};

export default Signout;
