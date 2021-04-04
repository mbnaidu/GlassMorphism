import React, { Component } from 'react';
import profilepic from '../img/profile_photo.jpg';
import Navbar from '../components/Navbar';
import Example from '../components/example';



class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="condiv">
                    <Example />
                </div>
            </div>
            
            )
        }
    }
    
    export default Home
    