import React from 'react'
import { Grid, Image, Segment, Icon, Header, Label, Embed } from 'semantic-ui-react'
import Globular from '../Imagenes/globular.jpg'
import Paleta from '../Imagenes/paleta.jpg'
import Alargado from '../Imagenes/alargado.jpg'
import Columnar from '../Imagenes/columnar.jpg'

const GridExampleVerticalAlignment = () => (
  <Grid verticalAlign='middle' columns={5} centered>
    <Grid.Row>
      <Grid.Column textAlign="center">
      <Label>Estructura globular</Label>
        <Segment inverted>
        <img src={Globular} width="100%;"/>
        </Segment>
      </Grid.Column>
      <Grid.Column textAlign="center">
      <Label>Estructura de hoja o paleta</Label>
        <Segment inverted textAlign="center">
        <img src={Paleta} width="100%;"/>
        </Segment>
        <br />
        <Label>Estructura alargada o rastrera</Label>
        <Segment inverted textAlign="center">
        <img src={Alargado} width="100%;"/>
        </Segment>
      </Grid.Column>
      <Grid.Column textAlign="center">
      <Label>Estructura columnar</Label>
        <Segment inverted textAlign="center">
        <img src={Columnar} width="100%;"/>
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridExampleVerticalAlignment