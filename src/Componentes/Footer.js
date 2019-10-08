import React from 'react'
import '../App.css'
import {  Button,Grid,Segment,  Container,  Divider,  Image,} from 'semantic-ui-react';
function  Footer(props){
        return(
            <div className="footer">
                <Grid centered columns={1} padded > 
                    
                    <Grid columns={3} spacing={4} verticalAlign='text-left'>
                      <Grid.Column textAlign="left" style={{fontSize: '1.5em'}}  >
                        Wiki Nature
                      </Grid.Column>

                      <Grid.Column textAlign="left" style={{fontSize: '1.5em'}} >
                          Sobre Nosotros
                      </Grid.Column>

                      <Grid.Column textAlign="left" style={{fontSize: '1.5em'}}>
                          Redes Sociales
                      </Grid.Column>
                    </Grid>
                </Grid>
            </div>



        );
}
export default Footer