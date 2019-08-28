import Layout from '../../components/Layout'
import Feed from '../../components/Feed'

const FeedsPage = () => (
  <Layout className='scroll_off'>
    <div className='container'>
      <div className='feeds_page'>
        <Feed />
      </div>
    </div>
  </Layout>
)

export default FeedsPage
