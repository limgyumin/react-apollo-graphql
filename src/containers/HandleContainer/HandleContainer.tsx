import React, { useCallback, useEffect, useState } from "react";
import { useMutation } from "react-apollo";
import { useHistory } from "react-router-dom";
import Handle from "../../components/Handle";
import { CREATE_POST } from "../../gql/post.mutation";
import { GET_ALL_POSTS } from "../../gql/post.query";
import { isEmpty } from "../../lib/isEmpty";

const HandleContainer = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const history = useHistory();

  const [createPost] = useMutation(CREATE_POST);

  const buttonClickHandler = useCallback(async () => {
    if (isEmpty(title) || isEmpty(description) || isEmpty(content)) {
      alert("내용을 모두 입력해주세요!");
      return;
    }

    await createPost({
      variables: { postData: { title, description, content } },
      update(cache, { data: { createPost } }) {
        const { getAllPosts }: any = cache.readQuery({
          query: GET_ALL_POSTS,
        });
        cache.writeQuery({
          query: GET_ALL_POSTS,
          data: { getAllPosts: [createPost, ...getAllPosts] },
        });
      },
    });
    history.push("/");
  }, [title, description, content, createPost, history]);

  useEffect(() => {
    return () => {
      setTitle("");
      setDescription("");
      setContent("");
    };
  }, [setTitle, setDescription, setContent]);

  return (
    <>
      <Handle
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        content={content}
        setContent={setContent}
        buttonClickHandler={buttonClickHandler}
      />
    </>
  );
};

export default HandleContainer;
