import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import NewsCard from '../Shared/NewsCard'

const ALL_ENTRIES = gql`
  query {
    allEntries {
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

const Home = () => {
  const { data, loading } = useQuery(ALL_ENTRIES)

  if (loading) return <span>Loading...</span>

  return <NewsCard entries={data.allEntries} isRenderFeedName />
}

export default Home
