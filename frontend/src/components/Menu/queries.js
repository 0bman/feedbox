import gql from 'graphql-tag'

const ALL_NODES = gql`
  query {
    nodes {
      id
      label
      secondaryLabel
      hasCaret
      isExpanded
      icon
      disabled
    }
  }
`

const CREATE_NODE = gql`
  mutation($label: String!) {
    createNode(input: { attributes: { label: $label } }) {
      node {
        id
        label
        secondaryLabel
        hasCaret
        isExpanded
        icon
        disabled
      }

      errors {
        fullMessages
      }
    }
  }
`

const UPDATE_NODE = gql`
  mutation($id: ID!, $isExpanded: Boolean!) {
    updateNode(input: { attributes: { isExpanded: $isExpanded, id: $id } }) {
      node {
        id
        label
        secondaryLabel
        hasCaret
        isExpanded
        icon
        disabled
      }

      errors {
        fullMessages
      }
    }
  }
`

export { ALL_NODES, CREATE_NODE, UPDATE_NODE }
