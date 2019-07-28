import fetch from 'isomorphic-unfetch'
import PropTypes from 'prop-types'
import Layout from '../../components/MyLayout'

const Post = (props) => (
  <Layout>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
    <img alt={props.show.name} src={props.show.image.medium} />
  </Layout>
)

Post.getInitialProps = async (context) => {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  // console.log(`Fetched show: ${show.name}`)

  return { show }
}

Post.propTypes = {
  show: PropTypes.shape({
    name: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    image: PropTypes.shape({
      medium: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}

export default Post
