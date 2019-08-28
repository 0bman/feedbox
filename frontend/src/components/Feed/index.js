import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { useRouter } from 'next/router'
import get from 'lodash/get'

import NewsCard from '../Shared/NewsCard'

const GET_ENTRIES = gql`
  query getEntries($id: ID!) {
    entries(id: $id) {
      id
      author
      image
      title
      summary
      content
      url
      published
      categories
      feed {
        name
        url
        scheme
      }
    }
  }
`

const Feed = () => {
  const router = useRouter()
  const id = get(router, ['query', 'id'])
  const { data, loading } = useQuery(GET_ENTRIES, { variables: { id } })

  if (loading) return <span>Loading...</span>

  return <NewsCard entries={data.entries} />
}

export default Feed
