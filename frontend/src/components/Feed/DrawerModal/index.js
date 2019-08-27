import PropTypes from 'prop-types'
import {
  Drawer,
  Spinner,
  AnchorButton
} from '@blueprintjs/core'
import convert from 'htmr'
import dayjs from 'dayjs'
import Img from 'react-image'

import './index.scss'
import Menu from './Menu'

const DrawerModal = ({ isDrawerOpen, handleToggleDrawer, entry }) => {
  if (!entry) return null

  const renderImg = (src) => (
    <Img
      loader={(
        <div className='feed_drawer_modal__img_spinner'>
          <Spinner size={50} />
        </div>
      )}
      src={src}
    />
  )

  const transformImg = {
    img: (node) => renderImg(node.src)
  }

  const summary = convert(`${entry.summary}`, { transform: transformImg })

  const onClose = () => {
    handleToggleDrawer(null)
  }
  const currentDate = dayjs()
  const published = dayjs(entry.published)
  const isSame = currentDate.isSame(published, 'day')
  const unit = isSame ? 'hour' : 'day'
  const publishedAt = currentDate
    .startOf(unit)
    .diff(published.startOf(unit), unit, true)
  const { scheme, url } = entry.feed

  return (
    <Drawer
      className='
        feed_drawer_modal_border_bottom_gray
        feed_drawer_modal_header_no_padding'
      isCloseButtonShown
      isOpen={isDrawerOpen}
      onClose={onClose}
      size='70%'
      title={<Menu />}
    >
      <section className='feed_drawer_modal__body'>
        <h1 className='feed_drawer_modal__title'>
          <a
            className='
              feed_drawer_modal__title_blank_link
              feed_drawer_modal__link_btn_hover_black_color'
            href={entry.url}
            rel='noopener noreferrer'
            target='_blank'
          >
            {entry.title}
          </a>
        </h1>
        <div className='feed_drawer_modal_text_gray'>
          <small className='feed_drawer_modal__feed_name'>
            <a
              className='
                feed_drawer_modal_text_gray
                feed_drawer_modal__link_site
                feed_drawer_modal__link_btn_hover_gray_color'
              href={`${scheme}://${url}`}
              rel='noopener noreferrer'
              target='_blank'
            >
              {entry.feed.name}
            </a>
          </small>
          {entry.author && (
            <small>
              by {entry.author} {' / '}
            </small>
          )}
          {entry.published && <small>{publishedAt + unit[0]}</small>}
        </div>
        <p className='feed_drawer_modal__summary'>{summary}</p>
        <br />
        <AnchorButton
          className='
            upcase
            feed_drawer_modal__open_button
            feed_drawer_modal_text_gray
            feed_drawer_modal__link_btn_hover_gray_color'
          fill
          href={entry.url}
          large
          target='_blank'
          text='Visit Website'
        />
      </section>
    </Drawer>
  )
}

DrawerModal.propTypes = {
  isDrawerOpen: PropTypes.bool.isRequired,
  handleToggleDrawer: PropTypes.func.isRequired,
  entry: PropTypes.object
}

export default DrawerModal
