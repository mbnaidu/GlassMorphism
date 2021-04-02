import React, { Component } from 'react';
import Navitem from './Navitem';
import profilepic from '../img/profile_photo.jpg';

class Navbar extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'NavItemActive':''
        }
    }
    activeitem=(x)=>
    {
        if(this.state.NavItemActive.length>0){
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({'NavItemActive':x},()=>{
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    };
    render() {
        return (
            <nav className="glass">
            <img src={profilepic} className="profilepic"></img>
            <h2>MADHU CHARLIE</h2>
            <ul>
            <Navitem item="HOME" tolink="/home"  activec={this.activeitem}></Navitem>
            <Navitem item="SEARCH" tolink="/about"  activec={this.activeitem}></Navitem>
            <Navitem item="REGISTRATION" tolink="/portfolio"  activec={this.activeitem}></Navitem>
            <Navitem item="LOGOUT" tolink="/contact"  activec={this.activeitem}></Navitem>
            </ul>
            </nav>
            )
        }
    }
    
    export default Navbar
    