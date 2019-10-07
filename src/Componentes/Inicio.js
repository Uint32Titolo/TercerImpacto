import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Responsive, Button,List, Form,Grid,Header, Message,Segment,  Container,  Divider,  Image,} from 'semantic-ui-react';
import Suculentas from '../Imagenes/Suculentas.jpeg'
import Cactuss from '../Imagenes/cactuss.jpg'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import '../App.css'


//document.body.style = 'background: #212121;' ;



export default class DesktopContainer extends Component {

  state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
  render() {
    const { activeItem } = this.state

    return (
      <Grid centered columns={1} padded >
        <Grid.Column>

          <Header as="h1" textAlign="center" color='green' style={{ fontSize: '3.5em',  paddingTop: '0.5em' }} >
            Wiki Nature
          </Header>
        
          <Grid columns={3} spacing={4} verticalAlign='text-top' >
              
              <Grid.Column as="h1" textAlign="center" style={{ paddingBottom: '1em', paddingTop: '1.3em' }}  >
                  Suculentas
                  <Segment as="h3" color='#212121' inverted >
                    <img src={Suculentas} width="100%;"  vspace="10" /> 
                    <p style={{fontSize: '0.9em', paddingBottom: '1em'}}>
                      Las plantas suculentas son aquellas en las que algún órgano o parte se ha modificado en una nueva especialización que permite el almacenamiento de agua en cantidades mucho mayores que en el resto de las plantas.
                    </p>
                    <Link to="/suculentas"> 
                      <Button color="orange" fluid size="small" circular active={activeItem === 'suculentas'} onClick={this.handleItemClick}>
                        Conocer Más
                      </Button>
                    </Link>
                  </Segment>
              </Grid.Column>

              <Grid.Column as="h1" textAlign="center">
                Cactus
                <Segment as="h3" color='#212121' inverted >
                  <img src={Cactuss} width="100%; " vspace="10"/>
                  <p style={{fontSize: '0.9em', paddingBottom: '1em'}}>
                   Los cactus conforman la familia de plantas suculentas denominada Cactaceae. Estas especies, como buenas crasas que son, se caracterizan por acumular agua y nutrientes en sus tejidos, así, pueden adaptarse sin problema al hábitat en el que se encuentren.
                  </p>
                  <Link to="/suculentas">
                    <Button color="orange" fluid size="small" circular active={activeItem === 'suculentas'} onClick={this.handleItemClick}>
                        Conocer Más
                    </Button>
                  </Link>
                </Segment>
              </Grid.Column>

              <Grid.Column as="h1" textAlign="center">
                Galeria
                <Segment as="h3" color='#212121' inverted >
                  <img src={Suculentas} width="100%; " vspace="10"/>
                  <p style={{fontSize: '0.9em', paddingBottom: '1em'}}>
                    buena buenadd buena buena buena buena buena buena buenab uen usandasd
                  </p>
                  <Link to="/suculentas">
                    <Button color="orange" fluid size="small" circular active={activeItem === 'suculentas'} onClick={this.handleItemClick}>
                      Conocer Más
                    </Button>
                  </Link>
                </Segment>
              </Grid.Column>

          </Grid>
      
        </Grid.Column>
      </Grid>
    )
  }
}



