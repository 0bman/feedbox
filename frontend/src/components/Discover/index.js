import {
  InputGroup,
  MenuItem,
  Classes
} from '@blueprintjs/core'
import classNames from 'classnames'
import { QueryList } from '@blueprintjs/select'
import { useState } from 'react'
import { useLazyQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import isEmpty from 'lodash.isempty'
import debounce from 'lodash.debounce'
import Link from 'next/link'

const SEARCH_FEEDS = gql`
  query FeedsList($query: String!) {
    searchFeeds(query: $query) {
      id
      name
      favicon
    }
  }
`

const Discover = () => {
  const [isNoResults, toggleResults] = useState(false)
  const [searchFeeds, { data }] = useLazyQuery(SEARCH_FEEDS, {
    onCompleted: (data) => {
      toggleResults(isEmpty(data && data.searchFeeds))
    }
  })

  const itemRenderer = (item) => (
    <Link key={item.id} as={`/feeds/${item.id}`} href='/feeds/[id]'>
      <MenuItem
        icon={<img alt={item.name} className='favicon' src={item.favicon} />}
        text={item.name}
      />
    </Link>
  )

  const doSearch = (query) => {
    searchFeeds({ variables: { query } })
  }
  const onQueryChange = debounce(doSearch, 500)

  const renderQueryList = (listProps) => {
    const { handleQueryChange, query, className, itemList } = listProps

    return (
      <div className={classNames(Classes.OMNIBAR, className)}>
        <InputGroup
          autoFocus
          large
          leftIcon='search'
          onChange={handleQueryChange}
          placeholder='Search by topic, website name or RSS link'
          value={query}
        />
        {itemList}
      </div>
    )
  }

  return (
    <div className='container discover_page'>
      <div className='row'>
        <div className='col'>
          <div className='bp3-running-text'>
            <h4>Discover the best sources for any topic</h4>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <QueryList
            className='bp3-omnibar'
            itemRenderer={itemRenderer}
            items={isEmpty(data && data.searchFeeds) ? [] : data.searchFeeds}
            noResults={isNoResults && <MenuItem disabled text='No results.' />}
            onQueryChange={onQueryChange}
            renderer={renderQueryList}
          />
        </div>
      </div>
    </div>
  )
}

export default Discover
