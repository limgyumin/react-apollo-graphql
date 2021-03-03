import React, { useCallback } from "react";
import { useMutation, useQuery } from "react-apollo";
import { useHistory } from "react-router-dom";
import Main from "../../components/Main";
import { DELETE_POST } from "../../gql/post.mutation";
import { GET_ALL_POSTS } from "../../gql/post.query";
import { IPost } from "../../interface/Post";

const MainContainer = () => {
  const { loading, error, data } = useQuery(GET_ALL_POSTS);
  const [deletePost] = useMutation(DELETE_POST);

  const history = useHistory();

  const deletePostHandler = useCallback(
    async (idx: number) => {
      await deletePost({
        variables: { idx },
        update(cache) {
          const { getAllPosts }: any = cache.readQuery({
            query: GET_ALL_POSTS,
          });
          cache.writeQuery({
            query: GET_ALL_POSTS,
            data: {
              getAllPosts: getAllPosts.filter(
                (post: IPost) => post.idx !== idx
              ),
            },
          });
        },
      });
      alert("글이 삭제되었습니다.");
      history.push("/");
    },
    [deletePost]
  );

  return (
    <>
      {!loading && !error && (
        <Main posts={data.getAllPosts} deletePostHandler={deletePostHandler} />
      )}
    </>
  );
};

export default MainContainer;
