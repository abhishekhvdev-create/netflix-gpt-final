import { NETFLIX_LOGO } from "./constants";
const Logo = () => {
  return (
    <div className="w-full h-20 absolute top-5">
      <img src={NETFLIX_LOGO} alt="Netflix Logo" className="w-50 " />
    </div>
  );
};

export default Logo;
