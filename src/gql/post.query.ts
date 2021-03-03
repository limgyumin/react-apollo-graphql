import gql from "graphql-tag";

export const GET_ALL_POSTS = gql`
  query getAllPosts {
    getAllPosts {
      idx
      title
      description
      content
      created_at
    }
  }
`;

export const GET_POST = gql`
  query getPost($idx: Float!) {
    getPost(idx: $idx) {
      idx
      title
      description
      content
      created_at
    }
  }
`;
