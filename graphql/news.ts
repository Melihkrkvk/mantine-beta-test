import { gql } from "@apollo/client";

export const GET_NEWS = gql`
  query ExampleQuery($take: Int!) {
    pages(take: $take) {
      __typename
      items {
        id
        name
        description
        templateId
      }
    }
  }
`;