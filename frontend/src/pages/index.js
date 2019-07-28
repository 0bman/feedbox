import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import PropTypes from 'prop-types'
import Layout from '../components/MyLayout'

const Index = (props) => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map((show) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href='/p/[id]'>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async () => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  // console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data.map((entry) => entry.show)
  }
}

Index.propTypes = {
  shows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default Index
