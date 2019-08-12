import PropTypes from 'prop-types'
import Header from '../Header'
import Menu from '../Menu'
import Footer from '../Footer'

import './grid.scss'
import './index.scss'

const Layout = (props) => {
  return (
    <div className='app-layout'>
      <Menu />
      <Header />
      <div className='content'>{props.children}</div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.any.isRequired
}

export default Layout
