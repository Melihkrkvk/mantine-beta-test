import { gql } from "@apollo/client";

/* export const GET_NEWS = gql`
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
`; */

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
export const GET_NEWS = gql`
query pages($take: Int!) {
  pages(take: $take) {
    pagination {
      totalPages
      totalItems
      skip
    }
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
          gap
          id
          name
          maxWidth
          minWidth
          padding
          uuid
          rows {
            uuid
            id
            order
            width
            columns {
              componentUuid
              id
              component {
                name
                properties
                data
              }
            }
          }
        }
      }
    }
  }
}`;