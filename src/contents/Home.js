import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/profile_photo.jpg';
import Navbar from '../components/Navbar';



class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="condiv home">
                    <h1>Madhu Charlie</h1>
                    <ReactTypingEffect className="typingeffect" text={['A','B','C']} speed={100} eraseDelay={900}/>
                    <div className="hr_line glass"><div className="hr_inner"></div></div>
                </div>
            </div>
            
            )
        }
    }
    
    export default Home
    