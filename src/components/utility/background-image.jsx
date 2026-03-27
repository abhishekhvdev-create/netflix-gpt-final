import { NETFLIX_BACKGROUND_IMAGE } from "./constants";

const BackgroundImage = () => {
  return (
    <div>
      <img src={NETFLIX_BACKGROUND_IMAGE} className="w-full" />
    </div>
  );
};

export default BackgroundImage;
