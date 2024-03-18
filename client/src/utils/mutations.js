import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
        email
        wins
        losses
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const UPDATE_WINS = gql`
mutation updateWins() {
  updateWins() {
    user {
      _id
      username
      email
      wins
      losses
    }
  }
}`;

export const UPDATE_LOSSES = gql`
mutation updateLosses() {
  updateLosses() {
    user {
      _id
      username
      email
      wins
      losses
    }
  }
}`;