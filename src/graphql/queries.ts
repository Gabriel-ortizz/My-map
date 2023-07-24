import {gql} from 'graphql-request'

export const GET_PAGES = gql`
query getPages{
  pages {
    heading
    id
    slug
    body{
      html
    }
  }
}
`
