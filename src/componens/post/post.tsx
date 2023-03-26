import React, { useEffect, useRef, useState } from "react";
import { postService } from "../../service/post";
import { Comment } from "../comment/comment";
import { Img } from "../Img/Img";
import { LikeButton } from "../likeButton/likeButton";
import "./post.scss";

interface Props {
  userName: string;
  shopName: string;
  imgSrc: string;
  imgSrcTow: string;
  text:string;
}
interface Comment {
  username: string;
  text: string;
}

interface State {
  comments: Comment[];
  likes: string[];
  userName: string;
  companyName: string;
  imgSrc: string;
  imgSrcTow: string;
  text:string;
}

export const Post: React.FC<Props> = ({userName,shopName,text,imgSrc,imgSrcTow}: Props) => {
  const [post, setPost] = useState<State>({
    comments: [],
    likes: [],
    userName: userName,
    companyName: shopName,
    imgSrc: imgSrc,
    imgSrcTow:imgSrcTow,
    text:text,
  });
  const [isLike , setLike] = useState (false) ;  
  const [commentText , setCommentText] = useState ("") ; 
  const postServices = new postService();
  const addComment = () => {
      const newComment = {
        username: "Jane Smith",
        text: commentText,
      };
      setPost((prevPost) => ({
        ...prevPost,
        comments: [...prevPost.comments, newComment],
      }));
      setCommentText("");
  };

  const likePost =  () => {
    setLike(!isLike);
    setPost((prevPost) => {
      let newLikes = [...prevPost.likes];
      if (isLike) {
        newLikes = newLikes.filter((like) => like !== post.userName);
      } else {
        newLikes.push(post.userName);
      }
      return { ...prevPost, likes: newLikes };
    });

  };

  const dislikePost =  () => {
    setLike(!isLike);
    setPost((prevPost) => {
      let newLikes = [...prevPost.likes];
      if (isLike) {
        newLikes = newLikes.filter((like) => like !== post.userName);
      } else {
        newLikes.push(post.userName);
      }
      return { ...prevPost, likes: newLikes };
    });

  };

  const helook = async (postId:string) => {
    try{
       const data = postServices.viwedPost(postId);
    }catch(err)
    {
      console.log(err);
    }
  }

  return (
    <div className="post">
      <h3 className="user-company" >Shop Name : {post.companyName}</h3>
      <h5 className="user-full-Name">Name: {post.userName}</h5>
        <a className="textarea">{post.text}</a>
      <div className="img-post">  
      {!imgSrcTow ? (
      <Img src={post.imgSrc}></Img>
      ):(
        <>
        <Img src={post.imgSrc}></Img>
        <Img src={post.imgSrcTow}></Img>
        </>
      )}
      </div>
      <div className="post-footer">
        <div className="post-footer-buttons">
          <LikeButton
            isLiked={isLike}
            like={likePost}
            dislike={dislikePost}
          />
        </div>
        <div className="post-footer-text">
          <p>{post?.likes.length} likes</p>
          <p>{post?.comments.length} comments</p>
        </div>
      </div>
      <div className="comments">
            <div className="comment-input-wrapper">
              <input
                className="comment-input"
                placeholder="add a comment"
                onChange={(e) => setCommentText(e.target.value)}
              ></input>
              <button className="comment-post" onClick={addComment}>Post</button>
            </div>
            {post.comments?.map((comment, ind) => {
              return <Comment key={ind} comment={comment.text}/>
            })}
      </div>
    </div>
  );
};