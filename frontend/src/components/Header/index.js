import { Navbar } from '@blueprintjs/core'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { useRouter } from 'next/router'
import split from 'lodash.split'
import last from 'lodash.last'
import includes from 'lodash.includes'
import classNames from 'classnames'
import get from 'lodash/get'

import Actions from './Actions'
import './index.scss'

const GET_FEED = gql`
  query getFeed($id: ID!) {
    feed(id: $id) {
      id
      name
      description
    }
  }
`

const GET_NODE = gql`
  query getNode($id: ID!) {
    node(id: $id) {
      id
      label
    }
  }
`

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

const Header = () => {
  const router = useRouter()
  const type = last(split(router && router.asPath, '/', 2))
  const isIncludesType = includes(['feeds', 'nodes', ''], type)
  const id = get(router, ['query', 'id'])
  const queries = () => {
    switch (type) {
    case 'feeds':
      return {
        typeName: 'feed',
        query: GET_FEED,
        label: 'Feed',
        variables: { id }
      }
    case 'nodes':
      return {
        typeName: 'node',
        query: GET_NODE,
        label: 'Node',
        variables: { id }
      }
    default:
      return {
        typeName: 'allEntries',
        query: ALL_ENTRIES,
        label: 'Today',
        variables: {}
      }
    }
  }
  const { query, typeName, label, variables } = queries()

  const { data, loading } = useQuery(query, { variables })

  const name = () => {
    if (loading) return 'Loading...'

    return data[typeName].name || data[typeName].label || label
  }

  const renderName = () => {
    if (!isIncludesType) return null

    return (
      <span className={classNames({ 'bp3-skeleton': loading })}>{name()}</span>
    )
  }

  return (
    <Navbar className='header'>
      <div className='container'>
        {isIncludesType && <Actions name={renderName()} />}
      </div>
    </Navbar>
  )
}

export default Header
