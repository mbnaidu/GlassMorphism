import { Button, Input, TextField } from '@material-ui/core';
import React, { Component, useState } from 'react';
import Navbar from '../components/Navbar';
import Registrationc from '../Styles/Registrationc.css'



function Registration() {
    const [totalMembers,settotalMembers] = useState(1);
    const [rationNumber, setrationNumber] = useState(true);
    const [family, setfamily] = useState([]);
    const createElements = (n)=>{
        for(var i = 1; i <= n; i++){
            family.push(
                <li>{i}</li>
            );
        }
    }
    var id = 0;
    return (
            <div>
                <Navbar />
                {
                    rationNumber ? (
                        <div>
                            <div className="condiv">
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
                                                onChange={event=> settotalMembers(event.target.value)}
                                                />
                                        </div>
                                        <div className="fluid_button">
                                            <a >
                                                <Button onClick={() => {setrationNumber(false);}}><span>ENTER</span></Button>
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
                    ) : (
                        <div>
                            <div className="condiv">
                                <div>
                                    {createElements(totalMembers)}
                                    {family.map((m)=>{
                                        var gender = "Gender"
                                        id = id + 1;
                                        return(
                                            <div className="row">
                                                <div class="agileits-top column">
                                                    <form action="#" method="post">
                                                        <div class="form__group">
                                                            <input type="input" class="form__field" placeholder="Name" id='ration' required />
                                                            <label for="name" class="form__label">{id} Person</label>
                                                        </div>
                                                        <div class="form__group">
                                                            <input type="input" class="form__field" placeholder="Name" id='ration' required />
                                                            <label for="name" class="form__label">Aadhar Card Number</label>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="column">
                                                    <br/>
                                                    <br/>
                                                    <br/>
                                                    <br/>
                                                    <div class="hover">
                                                        <span>{gender}</span>
                                                        <a class="social-link"  target="_blank">
                                                            <i class="fa fa-male"></i></a><a class="social-link" target="_blank">
                                                            <i class="fa fa-female"></i>
                                                        </a>
                                                    </div>
                                                    <br/>
                                                    <div>
                                                        <div className="gener">
                                                            <TextField
                                                                id="outlined-helperText"
                                                                label="AGE"
                                                                type="number"
                                                                variant="outlined"
                                                                color="primary"
                                                                />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                    <div>
                                        <div class="container">
                                            <a class="btn cta">SUBMIT</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            )
}
export default Registration
