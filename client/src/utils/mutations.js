import { gql } from '@apollo/client';

export const CREATE_DATA = gql`
  mutation createData($data1: String!, $data2: String!) {
    createData(data1: $data1, data2: $data2) {
      _id
      data1
      data2
    }
  }
`;
