import PropTypes from 'prop-types'
import Header from '../Header'

import './grid.scss'
import './index.scss'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = (props) => {
  return (
    <div style={layoutStyle}>
      <Header />
      {props.children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.any.isRequired
}

export default Layout
