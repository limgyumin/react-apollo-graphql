import React from "react";
import { IPost } from "../../../interface/Post";
import "./MainPostItem.scss";
import { getDateFormat } from "../../../lib/getDateFormat";
import { GrFormClose } from "react-icons/gr";
import { Link } from "react-router-dom";

interface MainPostItemProps {
  post: IPost;
  deletePostHandler: (idx: number) => Promise<void>;
}

const MainPostItem = ({ post, deletePostHandler }: MainPostItemProps) => {
  return (
    <>
      <Link to={`/post/${post.idx}`} className="main-post-item">
        <div className="main-post-item-container">
          <h2 className="main-post-item-container-title">{post.title}</h2>
          <p className="main-post-item-container-description">
            {post.description}
          </p>
          <p className="main-post-item-container-content">{post.content}</p>
          <p className="main-post-item-container-created-at">
            {getDateFormat(post.created_at)}
          </p>
        </div>
        <GrFormClose
          className="main-post-item-close"
          onClick={() => deletePostHandler(post.idx!)}
        />
        <div className="main-post-item-progress-bar" />
      </Link>
    </>
  );
};

export default MainPostItem;
