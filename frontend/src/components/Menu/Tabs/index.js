import Link from 'next/link'

const Tabs = () => (
  <ul>
    <li>Today</li>
    <li>Bookmarks</li>
    <li>
      <Link href='/discover'>
        <a>Discovery</a>
      </Link>
    </li>
  </ul>
)

export default Tabs
