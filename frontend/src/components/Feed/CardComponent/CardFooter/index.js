import PropTypes from 'prop-types'
import {
  Icon, Menu, MenuItem, MenuDivider, Popover, Position, AnchorButton
} from '@blueprintjs/core'

import './index.scss'

const CardFooter = ({ url }) => {
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

  return (
    <div className='card__footer'>
      <div>
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
  url: PropTypes.string.isRequired
}

export default CardFooter
