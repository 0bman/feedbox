import {
  Icon, Menu, MenuItem, MenuDivider, Popover, Position
} from '@blueprintjs/core'

import './index.scss'

const CardFooter = () => {
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

  return (
    <div className='card__footer'>
      <div>
        <Icon icon='share' />
        <Popover content={menu} position={Position.BOTTOM}>
          <Icon icon='more' />
        </Popover>
      </div>
    </div>
  )
}

export default CardFooter
