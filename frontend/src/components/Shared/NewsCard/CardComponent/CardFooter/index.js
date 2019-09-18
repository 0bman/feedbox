import PropTypes from 'prop-types'
import {
  Icon, Menu, MenuItem, MenuDivider, Popover, Position, AnchorButton
} from '@blueprintjs/core'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { useState } from 'react'

import './index.scss'

const CREATE_BOOKMARK = gql`
  mutation($entryId: ID!) {
    toggleBookmark(input: { attributes: { entryId: $entryId } }) {
      message

      errors {
        fullMessages
      }
    }
  }
`

const CardFooter = ({ url, entry }) => {
  const [currentEntry, setEntry] = useState({ ...entry })
  const [toggleBookmark] = useMutation(CREATE_BOOKMARK, {
    onCompleted: () => {
      setEntry({ ...currentEntry, bookmarked: !currentEntry.bookmarked })
    }
  })
  const starIcon = currentEntry.bookmarked ? 'star' : 'star-empty'

  const menu = (
    <Menu>
      <MenuItem icon='graph' text='Graph' />
      <MenuItem icon='map' text='Map' />
      <MenuItem icon='th' shouldDismissPopover={false} text='Table' />
      <MenuItem disabled icon='zoom-to-fit' text='Nucleus' />
      <MenuDivider />
      <MenuItem icon='cog' text='Settings...'>
        <MenuItem disabled icon='add' text='Add new application' />
        <MenuItem icon='remove' text='Remove application' />
      </MenuItem>
    </Menu>
  )

  const onClickShare = (e) => {
    e.preventDefault()
    e.stopPropagation()
    window.open(url)
  }

  const onClickBookmark = (e) => {
    e.preventDefault()
    e.stopPropagation()

    toggleBookmark({ variables: { entryId: currentEntry.id } })
  }

  return (
    <div className='card__footer'>
      <div>
        <AnchorButton minimal onClick={onClickBookmark} small>
          <Icon icon={starIcon} iconSize={14} />
        </AnchorButton>
        <AnchorButton minimal onClick={onClickShare} small>
          <Icon icon='share' iconSize={14} />
        </AnchorButton>
        <Popover content={menu} position={Position.BOTTOM}>
          <AnchorButton minimal small>
            <Icon icon='more' iconSize={14} />
          </AnchorButton>
        </Popover>
      </div>
    </div>
  )
}

CardFooter.propTypes = {
  url: PropTypes.string.isRequired,
  entry: PropTypes.object.isRequired
}

export default CardFooter
