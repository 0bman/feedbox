import classNames from 'classnames'
import PropTypes from 'prop-types'

const Col = (props) => {
  const cols = ['col', 'md', 'lg', 'sm', 'xl']

  const style = () => {
    const obj = {}
    cols.map((col) => {
      obj[`--col-${col}`] = props[col]
      return obj[`--col-${col}`]
    })

    return obj
  }

  return (
    <div className={classNames('col', props.className)} style={style()}>
      {props.children}
    </div>
  )
}

Col.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
}

export default Col
