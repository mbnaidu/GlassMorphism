import React, { Component } from 'react';
import profilepic from '../img/profile_photo.jpg';
import Navbar from '../components/Navbar';
import Example from '../components/example';
import '../Styles/Homec.css'


class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="condiv">
                    <div>
                        <div class="box">
                            <div class="inner">
                                <span>COMMUNITY</span>
                            </div>
                            <div class="inner">
                                <span>COMMUNITY</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Example />
                    </div>
                </div>
            </div>
            )
        }
    }
    
    export default Home
    