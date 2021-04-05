import { Button, FormControl, FormControlLabel, FormLabel, Input, Radio, RadioGroup, TextField } from '@material-ui/core';
import React, { Component, useState } from 'react';
import Navbar from '../components/Navbar';
import '../Styles/Registrationc.css'



function Registration() {
    const [totalMembers,settotalMembers] = useState(1);
    const [rationNumber, setrationNumber] = useState(true);
    const [family, setfamily] = useState([]);
    const [members,setmembers] = useState([]);
    const [gender,setgender] = useState([]);
    const [number,setnumber] = useState("");
    const createElements = (n)=>{
        for(var i = 1; i <= n; i++){
            family.push(
                <li>{i}</li>
            );
        }
    }
    const finalmembers = (f) => {
        for(var i=0;i<f.length;i++){
            if(f[i]!=""){
                members.push(f[i]);
            }
        }
    }
    const send = (h) => {
        gender.push(h)
    }
    const [senddata,setsenddata] = useState([]);
    const finalcall = (m,g) => {
        for(var i=0;i<m.length;i++){
            senddata.push(m[i],g[i]);
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
                                                        <input type="input" class="form__field" placeholder="Name" id='ration' required value={number} onChange={event=> setnumber(event.target.value)}/>
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
                                        let name;
                                        let full = [];
                                        let store = [];
                                        const calling = () =>{
                                            console.log(store)
                                            if(store!=""){
                                                full.push(store[store.length-1]);
                                            }
                                        }
                                        const setname = (z)=>{
                                            if(z!="" && z!="undefined"){
                                                store.push(z);
                                            }
                                        };
                                        var m = id;
                                        id = id + 1;
                                        return(
                                            <div className="row">
                                                <div class="agileits-top column">
                                                    <form action="#" method="post">
                                                        <div class="form__group">
                                                            <input type="input" class="form__field" placeholder="Name" id='ration' required value={name} onChange={event=> setname(event.target.value)} />
                                                            <label for="name" class="form__label">{id} Person</label>
                                                        </div>
                                                        <div class="form__group">
                                                            <input type="input" class="form__field" placeholder="Name" id='ration' required />
                                                            <label for="name" class="form__label">Aadhar Card Number</label>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="column colu2">
                                                    <br/>
                                                    <br/>
                                                    <br/>
                                                    <br/>
                                                    <div>
                                                        <FormControl component="fieldset" onChange={(event)=>{send(event.target.value);calling();finalmembers(full);}}>
                                                            <FormLabel component="legend">Gender</FormLabel>
                                                            <RadioGroup aria-label="gender" name="gender1">
                                                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                                                            </RadioGroup>
                                                        </FormControl>
                                                    </div>
                                                    <br/>
                                                    <div className="column colu3">
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
                                            <a class="btn cta" onClick={()=>{console.log(senddata);finalcall(members,gender)}}>SUBMIT</a>
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
