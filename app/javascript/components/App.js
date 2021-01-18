import React, { Component } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import ApartmentEdit from './pages/ApartmentEdit'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentNew from './pages/ApartmentNew'
import ApartmentShow from './pages/ApartmentShow'
import NotFound from './pages/NotFound'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import mockApartments from './mockApartments.js'

class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        apartments : mockApartments
      }

  }
  render () {
   
    return (
      <Router> 

        <Header
          logged_in={ this.props.logged_in }
          new_user_route={ this.props.new_user_route }
          sign_in_route={ this.props.sign_in_route }
          sign_out_route={ this.props.sign_out_route}
          />


       <Switch>
          <Route exact path='/' component={ Home } />

          {/* -----Index----- */}
          <Route
            path='/apartmentindex'
            render= { (props) => <ApartmentIndex
              apartments = { this.state.apartments }
            />
            }
          />

          {/* -----Show----- */}
          <Route
            path='/apartmentshow/:id'
            render={ (props) => {
              let id = props.match.params.id
              let apartment = this.state.apartments.find(apartment => apartment.id === parseInt(id))
              return (
                <ApartmentShow apartment={ apartment } />
              )
            }}
          />
          
          <Route component={ NotFound } />

        </Switch>
            
    </Router>

    );
  }
}

export default App
