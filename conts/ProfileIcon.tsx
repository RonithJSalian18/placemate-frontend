import React from "react";

type ProfileIconProps = {
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  className?: string;
};

const ProfileIcon = ({
  width,
  height,
  viewBox,
  fill,
  className,
}: ProfileIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="12" cy="12" r="10" fill="#1A1A1A" />
      <circle cx="12" cy="10" r="3" fill="white" />
      <path d="M12 14C9 14 7 16 7 18H17C17 16 15 14 12 14Z" fill="white" />
    </svg>
  );
};

export default ProfileIcon;
