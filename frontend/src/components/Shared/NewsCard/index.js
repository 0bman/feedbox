import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import chunk from 'lodash.chunk'
import { FixedSizeList as List } from 'react-window'
import shortid from 'shortid'
import clamp from 'lodash.clamp'

import CardComponent from './CardComponent'
import DrawerModal from './DrawerModal'

import withScreenDimensions from '../../../lib/withScreenDimensions'

const NewsCard = ({ entries, dimensions, isRenderFeedName }) => {
  const { width, height } = dimensions
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
  const lists = chunk(entries, rowColNumber)

  useEffect(() => {
    setColNumber(Math.round(listWidth / cardWidth))
  }, [listWidth])

  const handleToggleDrawer = (entry) => {
    toggleDrawer(!isDrawerOpen)
    setEntry(entry)
  }

  const renderCell = (entry) => (
    <CardComponent
      key={shortid.generate()}
      entry={entry}
      handleToggleDrawer={handleToggleDrawer}
      isRenderFeedName={isRenderFeedName}
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

NewsCard.propTypes = {
  entries: PropTypes.array.isRequired,
  isRenderFeedName: PropTypes.bool,
  dimensions: PropTypes.shape({
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
  }).isRequired
}

export default withScreenDimensions(NewsCard)
