import { Input, TextField } from '@material-ui/core';
import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Registrationc from '../Styles/Registrationc.css'


class Registration extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="condiv">
                    <h1>Registration</h1>
                    <div>
                        <div class="main-w3layouts wrapper">
                            <div class="main-agileinfo">
                                <div class="agileits-top">
                                    <form action="#" method="post">
                                        <div class="form__group">
                                            <input type="input" class="form__field" placeholder="Name" id='ration' required />
                                            <label for="name" class="form__label">RATION CARD</label>
                                        </div>
                                    </form>
                                </div>
                            <div className="total_members">
                                <TextField
                                    id="outlined-helperText"
                                    label="Total Members"
                                    type="number"
                                    variant="outlined"
                                    color="primary"
                                    />
                            </div>
                            {/* <div>
                                <form id="app-cover">
                                            <div id="select-box">
                                                    <input type="checkbox" id="options-view-button"/>
                                                    <div id="select-button" class="brd">
                                                            <div id="selected-value">
                                                                <span>Total Members</span>
                                                            </div>
                                                            <div id="chevrons">
                                                                <span>ok</span>
                                                            </div>
                                                    </div>
                                                    <div id="options">
                                                            <div class="option">
                                                                    <input class="s-c top" type="radio" name="platform" value="codepen"/>
                                                                    <input class="s-c bottom" type="radio" name="platform" value="codepen"/>
                                                                    <span class="label">2</span>
                                                                    <span class="opt-val">2</span>
                                                            </div>
                                                            <div class="option">
                                                                    <input class="s-c top" type="radio" name="platform" value="dribbble"/>
                                                                    <input class="s-c bottom" type="radio" name="platform" value="dribbble"/>
                                                                    <span class="label">3</span>
                                                                    <span class="opt-val">3</span>
                                                            </div>
                                                            <div class="option">
                                                                    <input class="s-c top" type="radio" name="platform" value="behance"/>
                                                                    <input class="s-c bottom" type="radio" name="platform" value="behance"/>
                                                                    <span class="label">4</span>
                                                                    <span class="opt-val">4</span>
                                                            </div>
                                                            <div class="option">
                                                                    <input class="s-c top" type="radio" name="platform" value="hackerrank"/>
                                                                    <input class="s-c bottom" type="radio" name="platform" value="hackerrank"/>
                                                                    <span class="label">5</span>
                                                                    <span class="opt-val">5</span>
                                                            </div>
                                                            <div class="option">
                                                                    <input class="s-c top" type="radio" name="platform" value="stackoverflow"/>
                                                                    <input class="s-c bottom" type="radio" name="platform" value="stackoverflow"/>
                                                                    <span class="label">6</span>
                                                                    <span class="opt-val">6</span>
                                                            </div>
                                                            <div class="option">
                                                                    <input class="s-c top" type="radio" name="platform" value="freecodecamp"/>
                                                                    <input class="s-c bottom" type="radio" name="platform" value="freecodecamp"/>
                                                                    <span class="label">FreeCodeCamp</span>
                                                                    <span class="opt-val">FreeCodeCamp</span>
                                                            </div>
                                                            <div id="option-bg"></div>
                                                    </div>
                                            </div>
                                    </form>
                            </div> */}
                            <div className="fluid_button">
                                <a href="#">
                                    <span>   ENTER</span>
                                    <div class="liquid"></div>
                                </a>
                            </div>
                                <ul class="colorlib-bubbles">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
    }
    
export default Registration
    