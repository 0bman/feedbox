import { Button, Intent, NonIdealState } from '@blueprintjs/core'
import { useState } from 'react'
import Link from 'next/link'

import AddFeedModal from './AddFeedModal'

import './index.scss'

const Node = () => {
  const [isOpenModal, toggleOpenModal] = useState(false)

  const handleToggleModal = () => {
    toggleOpenModal(!isOpenModal)
  }

  const action = (
    <div>
      <Link href='/discover'>
        <Button
          className='node_page__btn_discover upcase'
          intent={Intent.PRIMARY}
        >
          Add Content
        </Button>
      </Link>
      <Button
        className='upcase'
        intent={Intent.SUCCESS}
        onClick={handleToggleModal}
      >
        Add Feed
      </Button>
    </div>
  )
  const description = `You can follow publications, blogs, keyword alerts,
                       and twitter feeds`

  return (
    <div className='container node_page_non_ideal'>
      <AddFeedModal {...{ isOpenModal, handleToggleModal }} />
      <NonIdealState
        action={action}
        description={description}
        icon='search'
        title='Which sources would you like to follow?'
      />
    </div>
  )
}

export default Node
