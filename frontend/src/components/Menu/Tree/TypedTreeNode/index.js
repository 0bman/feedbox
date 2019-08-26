// eslint-disable-next-line
// See https://github.com/palantir/blueprint/blob/e9c501cd18440af6cd0ec95158e5b0ab3985f113/packages/core/src/components/tree/treeNode.tsx

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Classes, Utils, Collapse, Icon } from '@blueprintjs/core'
import Link from 'next/link'
import Img from 'react-image'

const TypedTreeNode = (props) => {
  const {
    depth, children, className, disabled, icon, isExpanded, isSelected, label,
    onClick, onCollapse, onExpand, secondaryLabel, href, as
  } = props

  const handleClick = (e) => {
    Utils.safeInvoke(onClick, props, e)
  }

  const classes = classNames(
    Classes.TREE_NODE,
    {
      [Classes.DISABLED]: disabled,
      [Classes.TREE_NODE_SELECTED]: isSelected,
      [Classes.TREE_NODE_EXPANDED]: isExpanded
    },
    className
  )

  const contentClasses = classNames(
    Classes.TREE_NODE_CONTENT,
    `${Classes.TREE_NODE_CONTENT}-${depth}`,
  )

  const eventHandlers = () => {
    if (disabled) {
      return {}
    }
    return {
      onClick: handleClick
    }
  }

  const handleCaretClick = (e) => {
    e.preventDefault()
    e.stopPropagation()

    Utils.safeInvoke(isExpanded ? onCollapse : onExpand, props, e)
  }

  const maybeRenderCaret = () => {
    const { hasCaret = React.Children.count(children) > 0 } = props

    if (hasCaret) {
      const clsOpen = Classes.TREE_NODE_CARET_OPEN
      const clsClosed = Classes.TREE_NODE_CARET_CLOSED
      const caretClasses = classNames(
        Classes.TREE_NODE_CARET,
        isExpanded ? clsOpen : clsClosed
      )
      const onClick = disabled ? undefined : handleCaretClick
      return (
        <Icon
          className={caretClasses}
          icon='chevron-right'
          onClick={onClick}
        />
      )
    }
    return <span className={Classes.TREE_NODE_CARET_NONE} />
  }

  const maybeRenderSecondaryLabel = () => {
    if (secondaryLabel != null) {
      return (
        <span className={Classes.TREE_NODE_SECONDARY_LABEL}>
          {secondaryLabel}
        </span>
      )
    }
    return undefined
  }

  return (
    <li className={classes}>
      <Link as={as} href={href}>
        <a className={contentClasses} {...eventHandlers()}>
          {maybeRenderCaret()}
          {icon && (
            <Img
              className={classNames(Classes.TREE_NODE_ICON, 'favicon')}
              src={icon}
            />
          )}
          <span className={Classes.TREE_NODE_LABEL}>{label}</span>
          {maybeRenderSecondaryLabel()}
        </a>
      </Link>
      <Collapse isOpen={isExpanded}>{children}</Collapse>
    </li>
  )
}

TypedTreeNode.propTypes = {
  hasCaret: PropTypes.bool,
  as: PropTypes.string,
  href: PropTypes.string,
  secondaryLabel: PropTypes.string,
  onExpand: PropTypes.func,
  onCollapse: PropTypes.func,
  onClick: PropTypes.func,
  label: PropTypes.string,
  isSelected: PropTypes.bool,
  isExpanded: PropTypes.bool,
  icon: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.any,
  depth: PropTypes.number
}

export default TypedTreeNode
