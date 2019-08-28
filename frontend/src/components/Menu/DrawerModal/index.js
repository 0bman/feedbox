import PropTypes from 'prop-types'
import {
  Drawer,
  FormGroup,
  InputGroup,
  Button,
  Intent
} from '@blueprintjs/core'
import { useState } from 'react'

import './index.scss'

const DrawerModal = ({ isDrawerOpen, handleToggleDrawer, createNode }) => {
  const [label, setLabel] = useState(undefined)
  const [helperText, setHelperText] = useState(undefined)
  const [intent, setIntent] = useState(Intent.NONE)

  const resetForm = () => {
    setIntent(Intent.NONE)
    setHelperText(undefined)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (label && label.length > 0) {
      createNode({ variables: { label } })
      handleToggleDrawer()
      resetForm()
    } else {
      setIntent(Intent.DANGER)
      setHelperText('The field is required.')
    }
  }

  const onClose = () => {
    resetForm()
    handleToggleDrawer()
  }

  return (
    <Drawer
      className='bp3_drawer__header'
      isCloseButtonShown
      isOpen={isDrawerOpen}
      onClose={onClose}
      size='75%'
      title=''
    >
      <section className='drawer'>
        <div className='bp3-running-text'>
          <h1 className='bp3-heading'>Create New Feed</h1>
          <div
            className='drawer__sub drawer__sub_color_gray drawer__sub_size_m'
          >
            A private collection of trusted sources you want to read
          </div>
        </div>
        <form className='drawer__form' onSubmit={handleSubmit}>
          <FormGroup
            className='drawer__form_group'
            helperText={helperText}
            intent={intent}
            label='Title'
            labelFor='feed-title'
            labelInfo='(required)'
          >
            <InputGroup
              id='feed-title'
              intent={intent}
              large
              leftIcon='add-to-artifact'
              onChange={(e) => setLabel(e.target.value)}
              placeholder='Title'
            />
          </FormGroup>
          <Button
            className='drawer__submit_btn'
            intent='success'
            large
            text='Save'
            type='submit'
          />
          <Button large onClick={onClose} text='Cancel' />
        </form>
      </section>
    </Drawer>
  )
}

DrawerModal.propTypes = {
  isDrawerOpen: PropTypes.bool.isRequired,
  handleToggleDrawer: PropTypes.func.isRequired,
  createNode: PropTypes.func.isRequired
}

export default DrawerModal
