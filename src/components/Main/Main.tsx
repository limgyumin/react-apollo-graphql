import React from "react";
import { Link } from "react-router-dom";
import { IPost } from "../../interface/Post";
import "./Main.scss";
import MainPostItem from "./MainPostItem";
import { HiOutlinePencilAlt } from "react-icons/hi";

interface MainProps {
  posts: IPost[];
  deletePostHandler: (idx: number) => Promise<void>;
}

const Main = ({ posts, deletePostHandler }: MainProps) => {
  return (
    <>
      <div className="main">
        <Link to="/handle" className="main-button">
          <HiOutlinePencilAlt className="main-button-icon" />
        </Link>
        <div className="main-container">
          {posts.map((post, idx) => (
            <React.Fragment key={idx}>
              <MainPostItem post={post} deletePostHandler={deletePostHandler} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Main;
