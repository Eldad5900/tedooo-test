import "./comment.scss";
import React, { useState } from "react";

interface CommentProps {
  comment: string;
}

export const Comment = ({ comment }: CommentProps) => {
  const [commentOwner, setCommentOwner] = useState();

    return (
      <div className="comment">
        <div className="text">
          <div className="text-header">
          </div>
          <p>{comment}</p>
        </div>
      </div>
    );
  };