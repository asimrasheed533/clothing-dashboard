import { placeholderAvatar } from "assets";

export default function Avatar({ src, alt, className, ...props }) {
  return src ? (
    <img src={src} alt={alt} className={className} {...props} />
  ) : (
    <img
      src={placeholderAvatar}
      alt="placeholderAvatar"
      className={className}
      {...props}
    />
  );
}
