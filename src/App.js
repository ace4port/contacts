import React from 'react'
import './styles/main.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Menu from './components/Menu'
import Contacts from './container/contact'

function App() {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route path="/" component={Contacts} />
      </Switch>
    </Router>
  )
}

export default App
