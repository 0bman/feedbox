import Link from 'next/link'

const Tabs = () => (
  <ul>
    <li>
      <Link href='/'>
        <a>Today</a>
      </Link>
    </li>
    <li>
      <Link href='/stars'>
        <a>Stars</a>
      </Link>
    </li>
    <li>
      <Link href='/discover'>
        <a>Discovery</a>
      </Link>
    </li>
  </ul>
)

export default Tabs
