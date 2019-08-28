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
  const isIncludesType = includes(['feeds', 'nodes'], type)
  const typeName = type === 'feeds' ? 'feed' : 'node'

  const id = get(router, ['query', 'id'])
  const query = type === 'feeds' ? GET_FEED : GET_NODE
  const { data, loading } = useQuery(query, {
    variables: { id }
  })

  const name = () => {
    if (loading) return 'Loading...'

    return data[typeName].name || data[typeName].label
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
