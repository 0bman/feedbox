import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Intent, Spinner } from '@blueprintjs/core'
import Layout from '../components/Layout'

import ErrorMessage from '../components/ErrorMessage'

export const allUsersQuery = gql`
  query {
    users {
      id
      email
    }
  }
`

const Users = () => (
  <Query query={allUsersQuery}>
    {({ loading, error, data: { users } }) => {
      if (error) return <ErrorMessage message='Error loading users.' />

      const mySpinner = <Spinner intent={Intent.PRIMARY} />
      if (loading) return mySpinner

      return (
        <Layout>
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.email}</li>
            ))}
          </ul>
        </Layout>
      )
    }}
  </Query>
)

export default Users
