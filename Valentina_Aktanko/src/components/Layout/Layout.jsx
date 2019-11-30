import './Layout.scss';

import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { Messenger } from 'components/Messenger';
import { Header } from 'components/Header';
import { ChatList } from 'components/ChatList';


export class Layout extends Component {

    render() {

        return (
            // <div className="layout" >

            //     <Grid container spacing={0}>
            //         <Grid item xs={12}>
            //             <Header />
            //         </Grid> 

            //         <Container className="layout__container" maxWidth="lg"> 
            //             <Grid item xs={12}>                        
            //                 <Grid item xs={12} sm={4}>
            //                     text
            //                 </Grid>
            //                 <Grid item xs={12} sm={8}>
            //                     text
            //                 </Grid>       
            //             </Grid>              
            //         </Container>

            //         <Grid item xs={12} sm={4}>
            //              text
            //          </Grid>
            //          <Grid item xs={12} sm={8}>
            //              text
            //          </Grid> 
            //     </Grid>
             
            //     <Grid
            //         container
            //         spacing={0}
            //         alignItems="center"
            //         justify="center"
                
            //         >
            //         <Container className="layout__container" maxWidth="lg">                     
            //             <Grid item xs={12} sm={4} style={{ minHeight: '200px', backgroundColor: '#aaa', }}>
                            
            //             </Grid> 
            //             <Grid item xs={12} sm={8} style={{ minHeight: '200px', backgroundColor: '#bbb', }}>
                            
            //             </Grid>  
            //         </Container>

            //     </Grid> 

            //             <Grid container spacing={3}>
            //                 <Grid item xs={12}>
            //                     <Header />
            //                 </Grid>
                            
            //                     <Container className="layout__container" maxWidth="lg">
            //                     <Grid item xs={12} sm={4}>
            //                         <ChatList/>
            //                     </Grid>

            //                     <Grid item xs={12} sm={8}>
            //                         <Messenger />
            //                     </Grid>
                                
            //                     </Container>
                            
            //             </Grid>


            // </div>

            <div className='layout'>
                
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Header />
                    </Grid>
                </Grid>

                <Container className="layout__container" maxWidth="lg" minWidth="sm">
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={4}>
                            <ChatList/>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <Messenger />
                        </Grid>
                    </Grid>
                </Container>
            </div>
        );
    }
}