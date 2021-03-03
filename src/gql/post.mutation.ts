import gql from "graphql-tag";

export const CREATE_POST = gql`
  mutation createPost($postData: CreatePostInput!) {
    createPost(postData: $postData) {
      idx
      title
      description
      content
      created_at
    }
  }
`;

export const DELETE_POST = gql`
  mutation deletePost($idx: Float!) {
    deletePost(idx: $idx) {
      idx
      title
      description
      content
      created_at
    }
  }
`;
