import { twMerge } from "tailwind-merge";
import { MdImageNotSupported } from "react-icons/md";

interface AvatarProp {
  src?: string;
  alt?: string;
  className?: string;
}

function Avatar({ src, alt = "Avatar image", className }: AvatarProp) {
  const classes = twMerge("w-20 h-20 rouded-full overflow-hidden", className);

  return (
    <div className={classes}>
      {src ? (
        <img src={src} alt={alt} className="w-full h-full" />
      ) : (
        <div className="w-full h-full rounded-[100%] bg-gray-200 flex justify-center items-center">
          <span>
            <MdImageNotSupported className="w-6 h-6" />
          </span>
        </div>
      )}
    </div>
  );
}

export default Avatar;
