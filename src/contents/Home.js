import React, { Component } from 'react';
import profilepic from '../img/profile_photo.jpg';
import Navbar from '../components/Navbar';
import steve from '../img/steve.jpg'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'


class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="condiv home">
                    <h1>Madhu Charlie</h1>
                    <div className="hr_line glass"><div className="hr_inner"></div></div>
                    <div>
                        <Segment placeholder>
                            <Grid columns={2} relaxed='very' stackable>
                            <Grid.Column>
                                <Form>
                                <Form.Input
                                    icon='user'
                                    iconPosition='left'
                                    label='Username'
                                    placeholder='Username'
                                />
                                <Form.Input
                                    icon='lock'
                                    iconPosition='left'
                                    label='Password'
                                    type='password'
                                />

                                <Button content='Login' primary />
                                </Form>
                            </Grid.Column>

                            <Grid.Column verticalAlign='middle'>
                                <Button content='Sign up' icon='signup' size='big' />
                            </Grid.Column>
                            </Grid>

                            <Divider vertical>Or</Divider>
                        </Segment>
                    </div>
                </div>
            </div>
            
            )
        }
    }
    
    export default Home
    