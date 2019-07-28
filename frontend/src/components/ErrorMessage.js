import PropTypes from 'prop-types'

const ErrorMessage = ({ message }) => <aside>{message}</aside>

ErrorMessage.propTypes = {
  message: PropTypes.string
}

export default ErrorMessage
