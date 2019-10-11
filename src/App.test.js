import React from 'react'
import {
  render,
  fireEvent,
  waitForElementToBeRemoved
} from '@testing-library/react'
import App from './App'
import '@testing-library/jest-dom/extend-expect'

const renderApp = () => render(<App />)

test('Renders entire application', () => {
  renderApp()
})

test('Adds todo tasks', () => {
  const app = renderApp()
  const taskInput = app.getByPlaceholderText('e.g. Create Time Machine')

  fireEvent.change(taskInput, { target: { value: 'Task' } })
  fireEvent.keyDown(taskInput, { key: 'Enter' })
  expect(app.getByText('Task')).toBeInTheDocument()

  fireEvent.change(taskInput, { target: { value: 'Another Task' } })
  fireEvent.keyDown(taskInput, { key: 'Enter' })
  expect(app.getByText('Another Task')).toBeInTheDocument()
})

test('Adds and removes tasks', async () => {
  const app = renderApp()
  const taskInput = app.getByPlaceholderText('e.g. Create Time Machine')

  fireEvent.change(taskInput, { target: { value: 'Task' } })
  fireEvent.keyDown(taskInput, { key: 'Enter' })
  expect(app.getByText('Task')).toBeInTheDocument()

  const completeButton = app.getByText('☑️')
  fireEvent.click(completeButton)
  await waitForElementToBeRemoved(() => app.getByText('Task'))
})
