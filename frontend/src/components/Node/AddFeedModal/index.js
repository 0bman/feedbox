import PropTypes from 'prop-types'
import {
  Dialog,
  Classes,
  Button,
  Intent,
  FormGroup,
  InputGroup
} from '@blueprintjs/core'
import { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import isEmpty from 'lodash.isempty'

import gql from 'graphql-tag'

const CREATE_FEED = gql`
  mutation($url: String!) {
    createFeed(input: { attributes: { url: $url } }) {
      errors {
        fullMessages
      }
    }
  }
`

const AddFeedModal = ({ isOpenModal, handleToggleModal }) => {
  const [url, setUrl] = useState(undefined)
  const [helperText, setHelperText] = useState(undefined)
  const [intent, setIntent] = useState(Intent.NONE)

  const [createFeed, { loading: mutationLoading }] = useMutation(CREATE_FEED)

  const onSubmit = (e) => {
    e.preventDefault()

    if (isEmpty(url)) {
      setIntent(Intent.DANGER)
      setHelperText('The URL is required.')
    } else {
      createFeed({ variables: { url } }).then(({ data }) => {
        const { errors } = data.createFeed

        if (isEmpty(errors)) {
          handleToggleModal()
        } else {
          setIntent(Intent.DANGER)
          setHelperText(errors.fullMessages[0])
        }
      })
    }
  }

  return (
    <Dialog
      icon='info-sign'
      isOpen={isOpenModal}
      onClose={handleToggleModal}
      title='Add your personal content'
    >
      <div className={Classes.DIALOG_BODY}>
        <FormGroup
          helperText={helperText}
          intent={intent}
          label='URL'
          labelFor='feed-url'
          labelInfo='(required)'
        >
          <InputGroup
            id='feed-url'
            intent={intent}
            large
            leftIcon='add-to-artifact'
            onChange={(e) => setUrl(e.target.value)}
            placeholder='Add website or RSS link'
          />
        </FormGroup>
      </div>
      <div className={Classes.DIALOG_FOOTER}>
        <div className={Classes.DIALOG_FOOTER_ACTIONS}>
          <Button onClick={handleToggleModal}>Cancel</Button>
          <Button
            intent={Intent.SUCCESS}
            loading={mutationLoading}
            onClick={onSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
    </Dialog>
  )
}

AddFeedModal.propTypes = {
  isOpenModal: PropTypes.bool.isRequired,
  handleToggleModal: PropTypes.func.isRequired
}

export default AddFeedModal
