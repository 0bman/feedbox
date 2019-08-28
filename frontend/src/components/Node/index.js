import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { useRouter } from 'next/router'
import get from 'lodash/get'
import isEmpty from 'lodash.isempty'

import NonIdealComponent from './NonIdealComponent'
import NewsCard from '../Shared/NewsCard'

const GET_FEED_LISTS = gql`
  query feedLists($nodeId: ID!) {
    feedsByNode(nodeId: $nodeId) {
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

const Node = () => {
  const router = useRouter()
  const nodeId = get(router, ['query', 'id'])
  const { data, loading } = useQuery(GET_FEED_LISTS, { variables: { nodeId } })

  if (loading) return <span>Loading...</span>

  const renderCards = () => {
    if (isEmpty(data.feedsByNode)) {
      return <NonIdealComponent />
    }

    return <NewsCard entries={data.feedsByNode} isRenderFeedName />
  }

  return renderCards()
}

export default Node
