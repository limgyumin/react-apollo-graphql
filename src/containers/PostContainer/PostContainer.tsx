import React from "react";
import { useQuery } from "react-apollo";
import { useParams } from "react-router-dom";
import Post from "../../components/Post";
import { GET_POST } from "../../gql/post.query";

const PostContainer = () => {
  type MatchType = {
    idx: string;
  };

  const { idx }: MatchType = useParams();

  const { loading, error, data } = useQuery(GET_POST, {
    variables: { idx: Number(idx) },
  });

  return <>{!loading && !error && <Post post={data.getPost} />}</>;
};

export default PostContainer;
