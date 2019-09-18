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

const Header = () => {
  const router = useRouter()
  const type = last(split(router && router.asPath, '/', 2))
  const isIncludesType = includes(['feeds', 'nodes', 'stars', ''], type)
  const id = get(router, ['query', 'id'])
  const queries = () => {
    switch (type) {
    case 'feeds':
      return {
        typeName: 'feed',
        query: GET_FEED,
        label: 'Feed',
        colName: 'name',
        variables: { id }
      }
    case 'nodes':
      return {
        typeName: 'node',
        query: GET_NODE,
        label: 'Node',
        colName: 'label',
        variables: { id }
      }
    case 'stars':
      return {
        typeName: null,
        query: null,
        colName: null,
        label: 'Stars',
        variables: {}
      }
    default:
      return {
        typeName: null,
        query: null,
        colName: null,
        label: 'Today',
        variables: {}
      }
    }
  }
  const { query, typeName, label, variables, colName } = queries()
  const doQuery = (q) => {
    if (q) {
      // eslint-disable-next-line
      return useQuery(q, { variables })
    }
    return { data: null, loading: false }
  }

  const { data, loading } = doQuery(query)

  const name = () => {
    if (loading) return 'Loading...'

    return get(data, [typeName, colName], label)
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
