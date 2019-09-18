import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import NewsCard from '../Shared/NewsCard'

const ENTRIES_BY_BOOKMARKS = gql`
  query {
    entriesByBookmarks {
      id
      author
      image
      title
      summary
      content
      url
      published
      categories
      bookmarked
      feed {
        name
        url
        scheme
      }
    }
  }
`

const Bookmarks = () => {
  const { data, loading } = useQuery(ENTRIES_BY_BOOKMARKS)

  if (loading) return <span>Loading...</span>

  return <NewsCard entries={data.entriesByBookmarks} isRenderFeedName />
}

export default Bookmarks
