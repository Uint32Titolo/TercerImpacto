import React, { Component } from 'react'
import { Input, Menu, GridColumn, Icon, Segment } from 'semantic-ui-react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Suculentas from './Suculentas'
import Proximamente from './Proximamente'
import Cactus from './Cactus'
import Galeria from './Galeria/Galeria'
import Inicio from './Inicio'
import { Container, Grid } from 'semantic-ui-react'
document.body.style = 'background: #2E8B57'

export default class MenuPointing extends Component {
  state = { activeItem: 'inicio' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      
      <Router>
        <Segment inverted attached='top'>
        <Menu inverted pointing secondary size='large'>
        <Link to="/">
          <Menu.Item
            name='inicio'
            active={activeItem === 'inicio'}
            onClick={this.handleItemClick}
          />
        </Link>
        <Link to="/suculentas/ini">
          <Menu.Item
            name='suculentas'
            active={activeItem === 'suculentas'}
            onClick={this.handleItemClick}
          />
        </Link>
        <Link to="/cactus">
          <Menu.Item
            name='cactus'
            active={activeItem === 'cactus'}
            onClick={this.handleItemClick}
          />
        </Link>
        <Link to="/galeria">
          <Menu.Item
            name='galeria'
            content='Galería'
            active={activeItem === 'galeria'}
            onClick={this.handleItemClick}
          />
        </Link>
        <Link to="/Proximamente">
          <Menu.Item
            name='Proximamente'
            content='Proximamente'
            active={activeItem === 'Proximamente'}
            onClick={this.handleItemClick}
          />
        </Link>        
          <Menu.Item position='right'>
          <Icon name='leaf'/>
          </Menu.Item>
        </Menu>
        </Segment>
      
        <Switch>
            <Route path="/" exact component={Inicio}/>
        </Switch>

        <Switch>
            <Route path="/suculentas/ini">
              <br/>
              <Suculentas/>
            </Route>
        </Switch>

        <Switch>
            <Route path="/cactus">
              <br/>
              <Cactus/>
            </Route>
        </Switch>

        <Switch>
            <Route path="/galeria">
              <Galeria/>
            </Route>
        </Switch>
        <Switch>
            <Route path="/Proximamente">
              <Proximamente/>
            </Route>
        </Switch>


      </Router>
    )
  }
}