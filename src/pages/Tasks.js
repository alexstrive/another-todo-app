import React, { useCallback, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ActionButton from '../components/ActionButton'
import TodoList from '../components/TodoList'

const Wrapper = styled.div`
  padding: 20px 30px;
  width: 500px;
  margin: 50px auto;
  background: white;
`

const TaskInput = styled.input`
  width: 100%;
  height: 40px;
  font-size: 2rem;
  margin-bottom: 20px;
`

const getRandomPhrase = () => {
  const phrases = [
    'Create Time Machine',
    'Go to the Moon',
    'Start a business',
    'Play a Guitar',
    'Read 50 books',
    'Complete always postponed task'
  ]

  return phrases[Math.floor(Math.random() * phrases.length)]
}

const initialState = JSON.parse(localStorage.getItem('items')) || []

const Tasks = () => {
  const [items, setItems] = useState(initialState)

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  }, [items])

  const handleAddItem = useCallback(
    event => {
      if (!event.target.value.trim()) {
        return
      }

      if (event.key === 'Enter') {
        setItems([
          ...items,
          { title: event.target.value, key: items.length + 1 }
        ])
        event.target.value = ''
      }
    },
    [items]
  )

  const handleRemoveItem = useCallback(
    targetItemKey => {
      setItems(items.filter(item => item.key !== targetItemKey))
    },
    [items]
  )

  const exportJson = useCallback(() => {
    navigator.clipboard.writeText(JSON.stringify(items))
  }, [items])

  return (
    <Wrapper>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <div>
          <Link to="/tasks">Tasks</Link> <Link to="/archive">Archive</Link>
        </div>
        <div>
          <ActionButton onClick={exportJson}>↗️</ActionButton>
        </div>
      </div>
      <TaskInput
        placeholder={`e.g. ${getRandomPhrase()}`}
        type="text"
        onKeyDown={handleAddItem}
      />
      <TodoList items={items} onComplete={handleRemoveItem} />
    </Wrapper>
  )
}

export default Tasks
