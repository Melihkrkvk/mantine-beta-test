import { gql } from "@apollo/client";

export const GET_NEWS = gql`
  query pages($take: Int!) {
    pages(take: $take) {
      items {
        id
        name
        uuid
        createdAt
        deletedAt
        description
        updatedAt
        template {
          width
          uuid
          gap
          height
          id
          margin
          name
          padding
          screens {
            rows {
              id
              columns {
                id
                component {
                  id
                  title
                  description
                  properties 
                  data
                }
              }
            }
          }
        }
      }
    }
  }
`;

/* export const GET_NEWS = gql`
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
`; */