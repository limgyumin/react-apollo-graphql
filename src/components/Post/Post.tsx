import React from "react";
import { IPost } from "../../interface/Post";
import { getDateFormat } from "../../lib/getDateFormat";
import "./Post.scss";

interface PostProps {
  post: IPost;
}

const Post = ({ post }: PostProps) => {
  return (
    <>
      <div className="post">
        <div className="post-container">
          <div className="post-container-area">
            <p className="post-container-area-index">{post.idx}번째 글</p>
            <h1 className="post-container-area-title">{post.title}</h1>
            <p className="post-container-area-created-at">
              {getDateFormat(post.created_at)}
            </p>
            <p className="post-container-area-content">{post.content}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
