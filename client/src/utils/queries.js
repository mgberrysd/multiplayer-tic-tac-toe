import { gql } from '@apollo/client';

export const QUERY_EXAMPLE = gql`
  query data {
    data {
      _id
      name
    }
  }
`;
