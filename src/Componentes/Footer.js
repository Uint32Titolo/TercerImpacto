import React from 'react'
import '../App.css'
import {  Button,Grid,Segment, Header, Container,  Divider, Image,} from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"


function  Footer(props){
        return(
            <div className="footer">
                <Grid centered columns={1} padded > 
                    
                    <Grid columns={3} spacing={4} verticalAlign='text-left'>
                      <Grid.Column textAlign="left"  >
                        <Header as="h1" textAlign="left"  style={{ fontSize: '1.5em' }} inverted >
                            WIKI NATURE
                        </Header>
                            <Grid.Row>
                                <Link to="/suculentas" >Suculentas</Link> 
                            </Grid.Row>
                            <Grid.Row>
                                <Link to="/cactuss">Cactus</Link> 
                            </Grid.Row>
                            <Grid.Row>
                                <Link to="/galeria">Galeria</Link> 
                            </Grid.Row>
                            <Grid.Row>
                                <Link to="/plantas">Plantas</Link> 
                            </Grid.Row>
                      </Grid.Column>

                      <Grid.Column textAlign="left"  >
                        <Header as="h1" textAlign="left"  style={{ fontSize: '1.5em' }} inverted >
                            SOBRE NOSOTROS
                        </Header>
                       

                      </Grid.Column>

                      <Grid.Column textAlign="left" >
                        <Header as="h1" textAlign="left"  style={{ fontSize: '1.5em' }} inverted >
                            REDES SOCIALES
                        </Header>


                      </Grid.Column>
                    </Grid>
                </Grid>
            </div>



        );
}
export default Footer