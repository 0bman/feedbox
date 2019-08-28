import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { useRouter } from 'next/router'
import get from 'lodash/get'
import chunk from 'lodash.chunk'
import { FixedSizeList as List } from 'react-window'
import shortid from 'shortid'
import clamp from 'lodash.clamp'

import CardComponent from './CardComponent'
import DrawerModal from './DrawerModal'

const GET_ENTRIES = gql`
  query getEntries($id: ID!) {
    entries(id: $id) {
      id
      author
      image
      title
      summary
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

const Feed = ({ width, height }) => {
  const router = useRouter()
  const [isDrawerOpen, toggleDrawer] = useState(false)
  const [rowColNumber, setColNumber] = useState(3)
  const [entry, setEntry] = useState(null)
  const defaultRowHeight = 360
  const bottomGutter = 50
  const leftGutter = 50
  const listMaxWidth = 870
  const listMinWidth = 0
  const cardWidth = 286
  const menuWidth = 250
  const innerWidth = width - menuWidth - leftGutter
  const listWidth = clamp(innerWidth, listMinWidth, listMaxWidth)

  const id = get(router, ['query', 'id'])
  const { data, loading } = useQuery(GET_ENTRIES, { variables: { id } })

  useEffect(() => {
    setColNumber(Math.round(listWidth / cardWidth))
  }, [listWidth])

  if (loading) return <span>Loading...</span>

  const lists = chunk(data.entries, rowColNumber)

  const handleToggleDrawer = (entry) => {
    toggleDrawer(!isDrawerOpen)
    setEntry(entry)
  }

  const renderCell = (entry) => (
    <CardComponent
      key={shortid.generate()}
      entry={entry}
      handleToggleDrawer={handleToggleDrawer}
    />
  )

  // eslint-disable-next-line
  const row = ({ index, style }) => (
    <div style={{ ...style, display: 'flex' }}>
      {lists[index].map(renderCell)}
    </div>
  )

  return (
    <>
      <DrawerModal
        entry={entry}
        handleToggleDrawer={handleToggleDrawer}
        isDrawerOpen={isDrawerOpen}
      />
      <List
        height={height - bottomGutter}
        itemCount={lists.length}
        itemSize={defaultRowHeight}
        width={listWidth}
      >
        {row}
      </List>
    </>
  )
}

Feed.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
}

export default Feed
