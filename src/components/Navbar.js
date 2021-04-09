import React, { Component } from 'react';
import Navitem from './Navitem';
import profilepic from '../img/profile_photo.jpg';
import '../Styles/Socialc.css'

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
            <ul className="nav_items">
                <Navitem item="SEARCH" tolink="/search" activec={this.activeitem}></Navitem>
                <Navitem item="REGISTRATION" tolink="/registration"  activec={this.activeitem}></Navitem>
                <Navitem item="LOGOUT" tolink="/logout"  activec={this.activeitem}></Navitem>
            </ul>
            </nav>
            )
        }
    }
    
    export default Navbar
    