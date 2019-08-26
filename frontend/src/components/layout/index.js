import PropTypes from 'prop-types'
import classNames from 'classnames'
import Header from '../Header'
import Menu from '../Menu'
import Footer from '../Footer'

import './grid.scss'
import './index.scss'

const Layout = (props) => {
  return (
    <div className={classNames('app-layout', props.className)}>
      <Menu />
      <Header />
      <div className='content'>{props.children}</div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string.isRequired
}

export default Layout
