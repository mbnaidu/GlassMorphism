import React, { Component } from 'react';
import Navitem from './Navitem';
import profilepic from '../img/profile_photo.jpg';
import '../Styles/Socialc.css'
import { NavLink } from 'react-router-dom';

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
            <h2>NAVEEN</h2>
            <ul className="nav_items">
                <NavLink item="SEARCH" to="/search" style={{textDecorationLine:"none",color:"HighlightText"}} activec={this.activeitem}>SEARCH</NavLink>
                <br/>
                <br/>
                <br/>
                <NavLink item="REGISTRATION" to="/registration" style={{textDecorationLine:"none",color:"HighlightText",color:"HighlightText"}} activec={this.activeitem}>REGISTRATION</NavLink>
                <br/>
                <br/>
                <br/>
                <NavLink item="LOGOUT" to="/logout" style={{textDecorationLine:"none",color:"HighlightText"}} activec={this.activeitem}>LOGOUT</NavLink>
                <br/>
                <br/>
                <br/>
            </ul>
            </nav>
            )
        }
    }
    
    export default Navbar
    