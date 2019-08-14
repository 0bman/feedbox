// eslint-disable-next-line
// See https://github.com/palantir/blueprint/blob/e9c501cd18440af6cd0ec95158e5b0ab3985f113/packages/core/src/components/tree/tree.tsx

import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Classes, Utils } from '@blueprintjs/core'
import { useRouter } from 'next/router'
import TypedTreeNode from './TypedTreeNode'

const Tree = ({
  onNodeClick,
  onNodeCollapse,
  onNodeExpand,
  contents,
  className,
  baseUrl,
  param
}) => {
  const router = useRouter()
  const nodeFromPath = (path, treeNodes) => {
    if (path.length === 1) {
      return treeNodes[path[0]]
    }
    return nodeFromPath(path.slice(1), treeNodes[path[0]].childNodes)
  }

  const handlerHelper = (handlerFromProps, nodeProps, e) => {
    if (Utils.isFunction(handlerFromProps)) {
      const nodeData = nodeFromPath(nodeProps.path, contents)
      handlerFromProps(nodeData, nodeProps.path, e)
    }
  }

  const handleNodeCollapse = (nodeProps, e) => {
    handlerHelper(onNodeCollapse, nodeProps, e)
  }

  const handleNodeClick = (nodeProps, e) => {
    handlerHelper(onNodeClick, nodeProps, e)
  }

  const handleNodeExpand = (nodeProps, e) => {
    handlerHelper(onNodeExpand, nodeProps, e)
  }

  const renderNodes = (treeNodes, currentPath = [], className) => {
    if (treeNodes == null) return null

    const nodeItems = treeNodes.map((node, i) => {
      const elementPath = currentPath.concat(i)
      const href = `${baseUrl}/[${param}]`
      const as = `${baseUrl}/${node[param]}`
      const isSelected = router.query[param] === node[param]

      return (
        <TypedTreeNode
          {...node}
          key={node.id}
          as={as}
          depth={elementPath.length - 1}
          href={href}
          isSelected={isSelected}
          onClick={handleNodeClick}
          onCollapse={handleNodeCollapse}
          onExpand={handleNodeExpand}
          path={elementPath}
        >
          {renderNodes(node.childNodes, elementPath)}
        </TypedTreeNode>
      )
    })

    return (
      <ul className={classNames(Classes.TREE_NODE_LIST, className)}>
        {nodeItems}
      </ul>
    )
  }

  return (
    <div className={classNames(Classes.TREE, className)}>
      {renderNodes(contents, [], Classes.TREE_ROOT)}
    </div>
  )
}

Tree.propTypes = {
  onNodeClick: PropTypes.func,
  onNodeCollapse: PropTypes.func,
  onNodeExpand: PropTypes.func,
  className: PropTypes.string,
  baseUrl: PropTypes.string,
  param: PropTypes.string,
  contents: PropTypes.array
}

export default Tree
