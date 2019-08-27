import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import classNames from 'classnames'
import isEmpty from 'lodash/isempty'
import convert from 'htmr'

import './index.scss'

const CardBody = ({ entry, isEmptyImg }) => {
  const currentDate = dayjs()
  const published = dayjs(entry.published)
  const isSame = currentDate.isSame(published, 'day')
  const unit = isSame ? 'hour' : 'day'
  const publishedAt =
    currentDate.startOf(unit).diff(published.startOf(unit), unit, true)

  const isSummary = isEmptyImg && !isEmpty(entry.summary)
  const renderAuthor = !isEmpty(entry.author) &&
    <small title={entry.author}>by {entry.author} {' / '}</small>

  return (
    <div className={classNames('card__body', {
      card__body_min_height_115: !isEmptyImg,
      card__body_min_height_255: isEmptyImg
    })}
    >
      <h6
        className='card__body__title card__body__title_ellipsis'
        title={entry.title}
      >
        {entry.title}
      </h6>
      <p className='card__body__published_ellipis'>
        {renderAuthor}
        <small title={`Published: ${published}`}>
          {entry.published && publishedAt + unit[0]}
        </small>
      </p>
      {isSummary && (
        <p
          className='card__body__summary_ellipsis'
          title={entry.summary}
        >
          {convert(`${entry.summary}`)}
        </p>
      )}
    </div>
  )
}

CardBody.propTypes = {
  entry: PropTypes.object.isRequired,
  isEmptyImg: PropTypes.bool.isRequired
}

export default CardBody
