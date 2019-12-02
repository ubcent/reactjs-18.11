import './Layout.scss';

import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { Messenger } from 'components/Messenger';
import { Header } from 'components/Header';
import { ChatList } from 'components/ChatList';


export class Layout extends Component {

    
    render() {

        return (
            <div className='layout'>
                
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Header />
                    </Grid>
                </Grid>
                
                <Container className="layout__container" maxwidth="lg" minwidth="sm">
                    <Grid container spacing={3}>
                        
                        <Grid item xs={12} sm={4}>
                            <ChatList/>
                        </Grid>
                        
                        <Grid item xs={12} sm={8}>
                            <Messenger match={this.props.match}/>
                        </Grid>

                    </Grid>
                </Container>
            </div>
        );
    }
}