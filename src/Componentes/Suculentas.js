import React, { Component } from 'react'
import { Grid, Menu, Segment, Image, Container, Divider } from 'semantic-ui-react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import '../App.css'
import Cactacea from '../Imagenes/cactacea.jpg'
import Agavaceas from '../Imagenes/agavaceas.jpg'
import Aizoaceas from '../Imagenes/aizoaceas.jpg'
import Crasulaceas from '../Imagenes/crasulaceas.jpg'
import Euforbiaceas from '../Imagenes/euforbiaceas.jpg'
import Apocinacee from '../Imagenes/apocinacee.jpg'
import Portulacaceae from '../Imagenes/portulacaceae.jpg'
import Didiereaceae from '../Imagenes/didiereaceae.jpg'
import Asphodelaceae from '../Imagenes/asphodelaceae.jpg'
import Hiacintaceas from '../Imagenes/hiacintaceas.jpg'


export default class MenuExampleTabularOnLeft extends Component {
  state = { activeItem: 'cactaceas' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Router>
      <Grid>
        <Grid.Column width={3}>
          <Menu inverted pointing vertical size='large'>
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
        <Link to="/suculentas/aizoaceas">
        <Menu.Item
          name='aizoaceas'
          content="Aizoáceas"
          active={activeItem === 'aizoaceas'}
          onClick={this.handleItemClick}
        />
        </Link>
        <Link to="/suculentas/crasulaceas">
          <Menu.Item
          name='crasulaceas'
          content="Crasuláceas"
          active={activeItem === 'crasulaceas'}
          onClick={this.handleItemClick}
        />
        </Link>
        <Link to="/suculentas/euforbiaceas">
          <Menu.Item
          name='euforbiaceas'
          content="Euforbiáceas"
          active={activeItem === 'euforbiaceas'}
          onClick={this.handleItemClick}
        />
        </Link>
        <Link to="/suculentas/apocinacee">
          <Menu.Item
          name='apocinacee'
          content="Apocinacee"
          active={activeItem === 'apocinacee'}
          onClick={this.handleItemClick}
        />
        </Link>
        <Link to="/suculentas/portulacaceae">
          <Menu.Item
          name='portulacaceae'
          content="Portulacaceae"
          active={activeItem === 'portulacaceae'}
          onClick={this.handleItemClick}
        />
        </Link>
        <Link to="/suculentas/didiereaceae">
          <Menu.Item
          name='didiereaceae'
          content="Didiereaceae"
          active={activeItem === 'didiereaceae'}
          onClick={this.handleItemClick}
        />
        </Link>
        <Link to="/suculentas/asphodelaceae">
          <Menu.Item
          name='asphodelaceae'
          content="Asphodelaceae"
          active={activeItem === 'asphodelaceae'}
          onClick={this.handleItemClick}
        />
        </Link>
        <Link to="/suculentas/hiacintaceas">
          <Menu.Item
          name='hiacintaceas'
          content="Hiacintaceas"
          active={activeItem === 'hiacintaceas'}
          onClick={this.handleItemClick}
        />
        </Link>

        </Menu>
        </Grid.Column>

        <Grid.Column stretched width={13} className="Suculentas">
          <Segment inverted>
          <Switch>
          <Route path="/suculentas/ini">
            <h1>
              Cactaceas
            </h1>
            <Divider />
            <div>
            Este Tipos de suculentas de especie se distribuye en zonas desérticas con clima muy seco, especialmente en América central y América del sur. Sin embargo también se han adaptado a lugares con climas cálidos como Australia, África oriental y el Mediterráneo. Entre sus particularidades se encuentran sus espinas por lo que son muy similares a los cactus. Son totalmente plantas de sol por lo que prefieren la exposición constante. Además que son muy sensibles a las temperaturas bajas.
            </div>
            <img src={Cactacea} width="100%;" vspace="10"/>
            </Route>
            <Route path="/suculentas/cactaceas">
            <h1>
              Cactaceas
            </h1>
            <Divider />
            <div>
            Este Tipos de suculentas de especie se distribuye en zonas desérticas con clima muy seco, especialmente en América central y América del sur. Sin embargo también se han adaptado a lugares con climas cálidos como Australia, África oriental y el Mediterráneo. Entre sus particularidades se encuentran sus espinas por lo que son muy similares a los cactus. Son totalmente plantas de sol por lo que prefieren la exposición constante. Además que son muy sensibles a las temperaturas bajas.
            </div>
            <img src={Cactacea} width="100%;" vspace="10"/>
            </Route>
            <Route path="/suculentas/agavaceas">
            <h1>
              Agaváceas
            </h1>
            <Divider />
            <div>
            Sus hojas se caracterizan por ser fibrosas y muy grandes, además de tener flores en sus puntas. Habitan en lugares de América principalmente en México, donde se le da una gran importancia a nivel económico y cultural. Este tipo de suculentas se utiliza para la extracción de fibra así como para realizar bebidas como el mezcal. Entre las especies que existen se encuentran la yucca, agave, furcraea, sansevieria entre otras.
            </div>
            <img src={Agavaceas} width="100%;" vspace="10"/>
            </Route>
            <Route path="/suculentas/aizoaceas">
            <h1>
              Aizoáceas
            </h1>
            <Divider />
            <div>
            Estos Tipos de suculentas herbáceas con hojas muy carnosas, con el objetivo de adaptarse a largos periodos de sequía. Se pueden encontrar en zonas desoladas como desiertos. Entre los géneros que se pueden ver fácilmente son los carpobrotus, lithops, aptenia, drosanthemum, conophytum, faucaria, pleiospilos, conicosia, glottiphyllum entre otras.
            </div>
            <img src={Aizoaceas} width="100%;" vspace="10"/>
            </Route>
            <Route path="/suculentas/crasulaceas">
            <h1>
              Crasuláceas
            </h1>
            <Divider />
            <div>
            Es una especie subarbustiva que se extienden en zonas secas del hemisferio norte y el sur de África. En cuanto a esta familia de plantas se encuentran alrededor de 1300 especies distribuidas en 48 géneros. Algunos de sus géneros más nombrados en la botánica se encuentran el sedum, aeonium, crassula, kalanchoe, echeveria, sempervivum, umbilicus, monanthes entre otros.
            </div>
            <img src={Crasulaceas} width="100%;" vspace="10"/>
            </Route>
            <Route path="/suculentas/euforbiaceas">
            <h1>
              Euforbiáceas
            </h1>
            <Divider />
            <div>
            Son muy parecidas a las crasas, por lo general les favorece el clima templado con mucha luz. Esta especie se puede observar en arbustos, árboles o hierbas distinguiéndose mediante sus flores. Se dan especialmente en climas tropicales de América. Se ha comprobado que existen alrededor de 7500 especies y 300 géneros. Algunas especies crecen con sustancias de alta toxicidad para librarse de los enemigos, sus hojas son simples y en muchos casos estipuladas.
            </div>            
            <img src={Euforbiaceas} width="100%;" vspace="10"/>
            </Route>
            <Route path="/suculentas/apocinacee">
            <h1>
              Apocinacee
            </h1>
            <Divider />
            <div>
            Se distribuyen especialmente en zonas tropicales de América, Asia y Oceanía, se conoce que existen alrededor de 1500 especies en el mundo. Una característica que atañe a todas estas especies es que poseen un látex tóxico que lo usan como defensa. Entre las más conocida se encuentran las adelfas, vinca o allamanda.
            </div>
            <img src={Apocinacee} width="100%;" vspace="10"/>
            </Route>
            <Route path="/suculentas/portulacaceae">
            <h1>
              Portulacaceae
            </h1>
            <Divider />
            <div>
            Se encuentran en regiones de África, Australia y Sudamérica, se conocen entre 20 géneros y 500 especies. Sus hojas son carnosas frecuentemente en rosetas basales. En el caso de especies con suculencia se pueden encontrar las portulaca, cistanthe talinum y las portulacarias.
            </div>            
            <img src={Portulacaceae} width="100%;" vspace="10"/>
            </Route>
            <Route path="/suculentas/didiereaceae">
            <h1>
              Didiereaceae
            </h1>
            <Divider />
            <div>
            En cuanto a esta especie se pueden encontrar solo 11 especies especialmente en Madagascar. Su apariencia son tal como arbustos espinosos, de hojas caducas y sus tallos son redondos genéticamente adaptados para acumular agua.
            </div>
            <img src={Didiereaceae} width="100%;" vspace="10"/>
            </Route>
            <Route path="/suculentas/asphodelaceae">
            <h1>
              Asphodelaceae
            </h1>
            <Divider />
            <div>
            Su hábitat es principal de las zonas áridas especialmente de Europa del sur Sudáfrica. Sus hojas presentan suculencia y se caracterizan por ser espinosas. Entre los géneros más conocidos se encuentra el aloe, gasteria, bulbine, kniphofia, astroloba, eremurus, xeronina entre otras.
            </div>            
            <img src={Asphodelaceae} width="100%;" vspace="10"/>
            </Route>
            <Route path="/suculentas/hiacintaceas">
            <h1>
            Hiacintaceas
            </h1>
            <Divider />
            <div>
            Viven en climas templados o tropicales tal como el clima del mediterráneo. Sus hojas son muy carnosas y entre los principales géneros se encuentran las ledebouria, scillia, muscari, galtonia, leopoldia entre otras.
            </div>            
            <img src={Hiacintaceas} width="100%;" vspace="10"/>
            </Route>
        </Switch>
          </Segment>
        </Grid.Column>
      </Grid>
      </Router>
    )
  }
}