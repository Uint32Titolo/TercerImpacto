import React, { Component } from 'react'
import { Grid, Menu, Segment, Image, Container } from 'semantic-ui-react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import '../App.css'
import Cactacea from '../Imagenes/cactacea.jpg'

export default class MenuExampleTabularOnLeft extends Component {
  state = { activeItem: 'cactaceas' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Router>
      <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
          <Link to="/suculentas/cactaceas">
          <Menu.Item
          name='cactaceas'
          content="Cactaceas"
          active={activeItem === 'cactaceas'}
          onClick={this.handleItemClick}
        />
        </Link>
        <Link to="/suculentas/agavaceas">
        <Menu.Item
          name='agavaceas'
          content="Agaváceas"
          active={activeItem === 'agavaceas'}
          onClick={this.handleItemClick}
        />
        </Link>
        <Menu.Item
          name='aizoaceas'
          content="Aizoáceas"
          active={activeItem === 'aizoaceas'}
          onClick={this.handleItemClick}
        />
          <Menu.Item
          name='crasulaceas'
          content="Crasuláceas"
          active={activeItem === 'crasulaceas'}
          onClick={this.handleItemClick}
        />
          <Menu.Item
          name='euforbiaceas'
          content="Euforbiáceas"
          active={activeItem === 'euforbiaceas'}
          onClick={this.handleItemClick}
        />
          <Menu.Item
          name='apocinacee'
          content="Apocinacee"
          active={activeItem === 'apocinacee'}
          onClick={this.handleItemClick}
        />
          <Menu.Item
          name='portulacaceae'
          content="Portulacaceae"
          active={activeItem === 'portulacaceae'}
          onClick={this.handleItemClick}
        />
          <Menu.Item
          name='didiereaceae'
          content="Didiereaceae"
          active={activeItem === 'didiereaceae'}
          onClick={this.handleItemClick}
        />
          <Menu.Item
          name='asphodelaceae'
          content="Asphodelaceae"
          active={activeItem === 'asphodelaceae'}
          onClick={this.handleItemClick}
        />
          <Menu.Item
          name='hiacintaceas'
          content="Hiacintaceas"
          active={activeItem === 'hiacintaceas'}
          onClick={this.handleItemClick}
        />
        </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment className="Suculentas">
          <Switch>
            <Route path="/suculentas/cactaceas">
            <div>
            Este Tipos de suculentas de especie se distribuye en zonas desérticas con clima muy seco, especialmente en América central y América del sur. Sin embargo también se han adaptado a lugares con climas cálidos como Australia, África oriental y el Mediterráneo. Entre sus particularidades se encuentran sus espinas por lo que son muy similares a los cactus. Son totalmente plantas de sol por lo que prefieren la exposición constante. Además que son muy sensibles a las temperaturas bajas.
              <br/>
              <img src={Cactacea}/>
            </div>
            </Route>
            <Route path="/suculentas/agavaceas">
            <div>
            asdasd
            </div>
            </Route>
        </Switch>
          </Segment>
        </Grid.Column>
      </Grid>
      </Router>
    )
  }
}