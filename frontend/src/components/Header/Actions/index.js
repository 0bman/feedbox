import PropTypes from 'prop-types'
import {
  NavbarGroup,
  Breadcrumbs,
  Button,
  Icon,
  Alignment,
  NavbarDivider
} from '@blueprintjs/core'
import Router from 'next/router'

import './index.scss'

const Actions = ({ name }) => {
  const items = [
    { text: <Icon icon='home' />, onClick: () => Router.push('/') },
    { text: name }
  ]

  return (
    <div className='header__actions'>
      <NavbarGroup>
        <Breadcrumbs className='header__breadcrumbs' items={items} />
      </NavbarGroup>
      <NavbarGroup align={Alignment.RIGHT}>
        <Button icon='tick' minimal />
        <Button
          className='header__user_actions__btn_margin_left_20'
          icon='properties'
          minimal
        />
        <Button
          className='header__user_actions__btn_margin_left_20'
          icon='refresh'
          minimal
        />
        <Button
          className='header__user_actions__btn_margin_left_20'
          icon='more'
          minimal
        />
        <NavbarDivider />
        <Button icon='cog' minimal />
      </NavbarGroup>
    </div>
  )
}

Actions.propTypes = {
  name: PropTypes.object.isRequired
}

export default Actions
