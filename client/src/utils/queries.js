import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      wins
      losses
    }
  }
`;

export const QUERY_USERS = gql`
query users {
    users {
      _id
      username
      email
      wins
      losses
    }
  }
`;