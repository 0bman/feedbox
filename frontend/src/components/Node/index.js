import { Button, Icon, Intent } from '@blueprintjs/core'
import { useState } from 'react'
import Link from 'next/link'

import Col from '../shared/Col'
import AddFeedModal from './AddFeedModal'

import './index.scss'

const Node = () => {
  const [isOpenModal, toggleOpenModal] = useState(false)

  const handleToggleModal = () => {
    toggleOpenModal(!isOpenModal)
  }

  return (
    <div className='container node_page'>
      <AddFeedModal {...{ isOpenModal, handleToggleModal }} />
      <div className='row'>
        <div className='col'>
          <h2 className='bp3-heading'>This is the node page</h2>
        </div>
        <div className='col' />
      </div>
      <div className='row'>
        <Col className='node_page__empty_state' md='6'>
          <div className='bp3-running-text text-center'>
            <h4 className='bp3-heading'>
              Which sources would you like to follow?
            </h4>
            <p className='bp3-text-muted bp3-text-large'>
              You can follow publications, blogs, keyword alerts, and twitter
              feeds
            </p>
            <Link href='/discover'>
              <Button
                className='node_page__btn_discover'
                intent={Intent.PRIMARY}
              >
                <Icon className='node_page__btn_icon' icon='globe' /> Discovery
              </Button>
            </Link>
            <Button intent={Intent.SUCCESS} onClick={handleToggleModal}>
              <Icon className='node_page__btn_icon' icon='small-plus' /> Add
              Content
            </Button>
          </div>
        </Col>
      </div>
    </div>
  )
}

export default Node
