import React from "react";
import "./Handle.scss";

interface HandleProps {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  buttonClickHandler: () => void;
}

const Handle = ({
  title,
  setTitle,
  description,
  setDescription,
  content,
  setContent,
  buttonClickHandler,
}: HandleProps) => {
  return (
    <>
      <div className="handle">
        <div className="handle-container">
          <input
            className="handle-container-title"
            value={title}
            onChange={({ target: { value } }) => setTitle(value)}
            placeholder="제목을 입력해주세요."
          />
          <input
            className="handle-container-description"
            value={description}
            onChange={({ target: { value } }) => setDescription(value)}
            placeholder="설명을 입력해주세요."
          />
          <textarea
            className="handle-container-content"
            value={content}
            onChange={({ target: { value } }) => setContent(value)}
            placeholder="내용을 입력해주세요."
          />
          <div className="handle-container-button">
            <button
              className="handle-container-button-wrapper"
              onClick={() => buttonClickHandler()}
            >
              다해떠
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Handle;
