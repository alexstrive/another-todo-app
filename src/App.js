import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import Tasks from './pages/Tasks'

const GlobalStyles = createGlobalStyle`
body {
  font-family: "Helvetica";
  font-size: 2rem;
  background: #eee;
}
`

/**
 * Main component
 *
 * Persists application's state inside of localStorage
 *
 */
const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" />
          <Route path="/tasks" component={Tasks} />
          <Route path="/archive" />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
