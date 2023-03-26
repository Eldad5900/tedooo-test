import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./likeButton.scss";

interface LikeButtonProps {
  isLiked?: boolean;
  like: () => void;
  dislike: () => void;
}

export const LikeButton: React.FC<LikeButtonProps> = ({isLiked = false,like,dislike}) => {
  const [liked, setLiked] = useState<boolean>(isLiked);

  const click = () => {
    const likeState = !liked;
    setLiked(likeState);
    likeState ? like() : dislike();
  };

  return (
    <div onClick={click} className="lkbtn" >
      {liked ? <AiFillHeart className="red" /> : <AiOutlineHeart />}
    </div>
  );
};

