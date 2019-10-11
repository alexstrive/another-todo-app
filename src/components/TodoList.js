import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'
import { animated, useTransition } from 'react-spring'

const TodoList = ({ items, onComplete }) => {
  const transitions = useTransition(items, item => item.key, {
    from: {
      opacity: 0,
      transform: 'translate3d(0, -40px, 0'
    },
    enter: {
      opacity: 1,
      transform: 'translate3d(0, 0px, 0)'
    },
    leave: { opacity: 0, transform: 'translate3d(0, -40px, 0)' }
  })

  return (
    <div>
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <TodoItem {...item} onComplete={() => onComplete(item.key)} />
        </animated.div>
      ))}
    </div>
  )
}

TodoList.propTypes = {
  items: PropTypes.array.isRequired
}

TodoList.defaultProps = {
  items: []
}

export default TodoList
