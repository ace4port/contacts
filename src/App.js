import React from 'react'
import './styles/main.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './container/Home'
import Menu from './components/Menu'
import Contacts from './container/Contacts'
import AddContacts from './container/AddContacts'
import VerifyContact from './container/VerifyContact'
import ViewContact from './container/ViewContact'

import CreateContact from './container/CreateContact'
import EditContact from './container/EditContact'

function App() {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contacts} />

        <Route exact path="/contact/add" component={AddContacts} />
        <Route exact path="/contact/verify" component={VerifyContact} />
        <Route exact path="/contact/view" component={ViewContact} />

        <Route exact path="/contact/create" component={CreateContact} />

        <Route exact path="/contact/edit" component={EditContact} />
      </Switch>
    </Router>
  )
}

export default App
