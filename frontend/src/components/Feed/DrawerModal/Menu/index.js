import {
  AnchorButton,
  Navbar,
  NavbarGroup,
  Icon
} from '@blueprintjs/core'

import './index.scss'

const Menu = () => {
  return (
    <Navbar
      className='feed_drawer_modal__body feed_drawer_menu_none_box_shadow'
    >
      <NavbarGroup>
        <AnchorButton minimal title='Read Later'>
          <Icon icon='bookmark' />
        </AnchorButton>
        <AnchorButton minimal title='Save to Favorite'>
          <Icon icon='star' />
        </AnchorButton>
        <AnchorButton minimal title='Copy link to clipboard'>
          <Icon icon='paperclip' />
        </AnchorButton>
      </NavbarGroup>
    </Navbar>
  )
}

export default Menu
