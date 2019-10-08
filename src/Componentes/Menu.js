import React, { Component } from 'react'
import { Input, Menu, GridColumn } from 'semantic-ui-react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Formulario from './Formulario'
import Suculentas from './Suculentas'
import Galeria from './Galeria/Galeria'
import Inicio from './Inicio'
import { Container, Grid } from 'semantic-ui-react'


export default class MenuPointing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Router>
        <Menu pointing secondary size='large' attached='top'style={{backgroundColor:"#01003B"}} inverted >
        <Link to="/">
          <Menu.Item
            name='Inicio'
            active={activeItem === 'principal'}
            onClick={this.handleItemClick}
          />
        </Link>
        <Link to="/suculentas">
          <Menu.Item
            name='suculentas'
            active={activeItem === 'suculentas'}
            onClick={this.handleItemClick}
          />
        </Link>
        <Link to="/plantas">
          <Menu.Item
            name='plantas'
            active={activeItem === 'plantas'}
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
            active={activeItem === 'galeria'}
            onClick={this.handleItemClick}
          />
        </Link>

        </Menu>

        <Switch>
            <Route path="/" exact component={Inicio}/>
        </Switch>

        <Switch>
            <Route path="/suculentas">
              <Suculentas/>
            </Route>
        </Switch>

        <Switch>
            <Route path="/plantas">
              <Container>
                <Formulario/>
              </Container>
            </Route>
        </Switch>

        <Switch>
            <Route path="/cactus">
               
            </Route>
        </Switch>

        <Switch>
            <Route path="/galeria">
              <Galeria/>
            </Route>
        </Switch>

      </Router>
    )
  }
}