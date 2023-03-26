
import React, { useState } from "react";
import "./img.scss";

interface ImgProps {
  src: string;
}

export const Img = ({ src }: ImgProps) => {
  return (
    <div className="img-sizes">
      <img src={src} alt="img"></img>
    </div>
  );
};
