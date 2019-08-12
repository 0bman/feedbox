import { Icon, Intent, Tree } from '@blueprintjs/core'
import { useState } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'

import appToaster from '../AppToaster'
import Tabs from './Tabs'
import DrawerModal from './DrawerModal'

import './index.scss'
import { ALL_NODES, CREATE_NODE, UPDATE_NODE } from './queries'

const Menu = () => {
  const [isDrawerOpen, setToggleDrawer] = useState(false)
  const [nodes, setNodes] = useState([])

  useQuery(ALL_NODES, {
    onCompleted: ({ nodes }) => setNodes(nodes)
  })

  const [createNode] = useMutation(CREATE_NODE, {
    update(
      cache,
      {
        data: {
          createNode: { node }
        }
      }
    ) {
      const { nodes } = cache.readQuery({ query: ALL_NODES })

      appToaster().show({
        message: 'Successfuly created collection',
        intent: Intent.SUCCESS
      })

      cache.writeQuery({
        query: ALL_NODES,
        data: { nodes: nodes.concat([node]) }
      })
    }
  })
  const [updateNode] = useMutation(UPDATE_NODE)

  const handleToggleDrawer = () => {
    setToggleDrawer(!isDrawerOpen)
  }

  const onNodeClick = () => {
    // nodeData, _nodePath, e
    // console.log(nodeData)
  }

  const onNodeCollapse = (nodeData) => {
    updateNode({ variables: { ...nodeData, isExpanded: false } })
  }

  const onNodeExpand = (nodeData) => {
    updateNode({ variables: { ...nodeData, isExpanded: true } })
  }

  return (
    <div className='menu menu_background_gray'>
      <Tabs />
      <div className='tree tree_size_sm'>
        <div className='tree__title'>
          <span className='tree__title__text'>Feeds</span>
          <a
            className='
              tree__settings
              tree__settings_color_gray
              tree__settings_hover_color_dark'
          >
            <Icon icon='cog' />
          </a>
        </div>
        <DrawerModal {...{ isDrawerOpen, handleToggleDrawer, createNode }} />
        <Tree
          {...{
            onNodeClick,
            onNodeCollapse,
            onNodeExpand,
            contents: nodes,
            className:
              'tree__node tree__node_hover_cursor_pointer tree__node_hover'
          }}
        />
        <div
          className='tree__new_feed tree__new_feed_hover'
          onClick={handleToggleDrawer}
          role='presentation'
        >
          <a
            className='
              tree__new_link
              tree__new_link_hover
              tree__new_link_color_gray'
          >
            Create New Feed
          </a>
        </div>
      </div>
    </div>
  )
}

export default Menu
