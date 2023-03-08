import blankImage from '../assets/blank.png';

export default function ImageProfile({ src, size, profileImg }) {
  return (
    <img
      src={src || profileImg || blankImage}
      className="rounded-sm cursor-pointer"
      alt="ImageProfile"
      width={size}
      height={size}
    />
  );
}
