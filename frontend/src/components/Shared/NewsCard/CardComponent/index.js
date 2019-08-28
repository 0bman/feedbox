import shortid from 'shortid'
import { Card, Spinner } from '@blueprintjs/core'
import Img from 'react-image'
import isEmpty from 'lodash/isempty'
import convert from 'htmr'
import PropTypes from 'prop-types'

import CardBody from './CardBody'
import CardFooter from './CardFooter'

import './index.scss'

const CardComponent = ({ entry, handleToggleDrawer, isRenderFeedName }) => {
  const renderImg = (src) => (
    <Img
      className='card__img'
      loader={(
        <div className='card__img'>
          <Spinner size={50} />
        </div>
      )}
      src={src}
    />
  )

  const transformImg = {
    _: () => null,
    img: (node) => renderImg(node.src)
  }

  const summaryImg = convert(`${entry.summary}`, { transform: transformImg })
  const cap = isEmpty(summaryImg) ? renderImg(entry.image) : summaryImg
  const isEmptyImg = isEmpty(summaryImg) && isEmpty(entry.image)

  return (
    <Card
      key={shortid.generate()}
      className='card'
      interactive
      onClick={() => handleToggleDrawer(entry)}
    >
      {cap}
      <CardBody {...{ entry, isEmptyImg, isRenderFeedName }} />
      <CardFooter url={entry.url} />
    </Card>
  )
}

CardComponent.propTypes = {
  isRenderFeedName: PropTypes.bool,
  entry: PropTypes.object.isRequired,
  handleToggleDrawer: PropTypes.func.isRequired
}

export default CardComponent
