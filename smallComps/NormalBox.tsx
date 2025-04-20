import React from "react";

type NormalBoxProps = {
  variant?: string;
  text?: string;
};

const NormalBox = ({ variant, text }: NormalBoxProps) => {
  return <h4 className={variant}>{text}</h4>;
};

export default NormalBox;
