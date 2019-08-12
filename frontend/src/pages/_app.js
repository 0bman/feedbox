import App, { Container } from 'next/app'
import { FocusStyleManager } from '@blueprintjs/core'
import { ApolloProvider } from '@apollo/react-hooks'
import withApollo from '../lib/withApollo' // eslint-disable-line

import 'normalize.css/normalize.css'
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'

class MyApp extends App {
  render() {
    FocusStyleManager.onlyShowFocusOnTabs()

    const { Component, pageProps, apolloClient } = this.props

    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApollo(MyApp)
