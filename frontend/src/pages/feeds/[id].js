import PropTypes from 'prop-types'
import withScreenDimensions from '../../lib/withScreenDimensions'
import Layout from '../../components/Layout'
import Feed from '../../components/Feed'

const FeedsPage = ({ dimensions }) => {
  return (
    <Layout className='scroll_off'>
      <div className='container'>
        <div className='feeds_page'>
          <Feed
            height={dimensions.height}
            width={dimensions.width}
          />
        </div>
      </div>
    </Layout>
  )
}

FeedsPage.propTypes = {
  dimensions: PropTypes.object.isRequired
}

export default withScreenDimensions(FeedsPage)
