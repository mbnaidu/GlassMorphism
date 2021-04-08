import { faBreadSlice } from '@fortawesome/free-solid-svg-icons';
import {  Button, FormControl, FormControlLabel, FormLabel, Input, Radio, RadioGroup, TextField } from '@material-ui/core';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import React, { Component, useState } from 'react';
import Navbar from '../components/Navbar';
import '../Styles/Registrationc.css'
import axios from 'axios';
import {Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import jsPDF from 'jspdf'

function Registration() {
    const [rationNumber, setRationNumber] = useState("");
    const [totalMembers, setTotalMembers] = useState(1);
    const [isRationpage, setIsRationPage] = useState(true);
    let family = [];
    let members = [];
    const createElements = (n)=>{
        for(var i = 1; i <= n; i++){
            family.push(
                <li>{i}</li>
            );
        }
    }
    
    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal);
    }
    const changeHandler = (key,value, index) => {
        var key1 = {};
        
        switch(key) {
            case 'name':
                key1.name = value;
                break;
            case 'aadharNumber':
                key1.aadharNumber = value;
                break;
            case 'gender':
                key1.gender = value;
                break;
            case 'age':
                key1.age = value;
                break;
            default:
                break;
        }
        if(members[index] !== undefined) {
            if(members[index][key] != undefined) {
                members[index][key] = value;
            } else {
                members[index][key] = value
            }
        } else {
            members.push({...key1});
        }
        // console.log(members);
    }
    const submitHandler = () => {
        // console.log("h")
        const data = {
            "rationId":rationNumber,
            "members":members
        }
        // console.log(data);
        axios.post('http://localhost:3001/addData', {data}).then(
            function(res) {
                // console.log(res);
            }
        )
    }
    const generatePDF = (x) => {
        var doc = new jsPDF('p', 'pt');
        doc.text(20, 20, 'This is the first title.')  
        doc.save('demo.pdf')
        
    }  
    return (
            <div>
                <Navbar />
                {
                    isRationpage ? (
                        <div>
                            <div className="condiv">
                                <div>
                                    <div class="main-w3layouts wrapper">
                                        <div class="main-agileinfo">
                                            <div class="agileits-top">
                                                <form action="#" method="post">
                                                    <div class="form__group">
                                                        <input type="input" class="form__field" placeholder="Name" id='ration' required value={rationNumber} onChange={event=> setRationNumber(event.target.value)}/>
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
                                                onChange={event=> setTotalMembers(event.target.value)}
                                                />
                                        </div>
                                        <div className="fluid_button">
                                            <a >
                                                <Button onClick={()=> {setIsRationPage(rationNumber.length === 10 ? false : true)}}><span >ENTER</span></Button>
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
                                    {family.map((m, index)=>{
                                        return(
                                            <div>
                                                <div class="agileits-top column">
                                                    <form action="#" method="post">
                                                        <div class="form__group">
                                                            <input type="input" class="form__field" placeholder="Name" id='ration' required  onChange={event => changeHandler("name", event.target.value, index)} />
                                                            <label for="name" class="form__label">{index+1} Person</label>
                                                        </div>
                                                        <div class="form__group">
                                                            <input type="input" class="form__field" placeholder="Name" id='ration' required onChange={event => changeHandler("aadharNumber", event.target.value, index)}/>
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
                                                        <FormControl component="fieldset" onChange={(event)=> changeHandler("gender", event.target.value, index)}>
                                                            <FormLabel component="legend">Gender</FormLabel>
                                                            <RadioGroup aria-label="gender" name="gender1">
                                                                <FormControlLabel value="f" control={<Radio />} label="Female" />
                                                                <FormControlLabel value="m" control={<Radio />} label="Male" />
                                                                <FormControlLabel value="o" control={<Radio />} label="Other" />
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
                                                                onChange = {(event) => changeHandler("age", event.target.value, index)}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                    <div>
                                        <div class="container">
                                            <a class="btn " onClick={() => {toggle();}}>CHECK</a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                <Modal isOpen={modal} toggle={toggle} >
                                    <ModalHeader toggle={toggle}>ALL DETAILS</ModalHeader>
                                    <ModalBody>
                                        {members.map((m)=>{
                                            return(
                                                <div>
                                                    <li>jji</li>
                                                </div>
                                            )
                                        })}
                                    </ModalBody>
                                    <ModalFooter>
                                    <Button color="primary" onClick={()=>{submitHandler();toggle();setIsRationPage(true);setRationNumber("");setTotalMembers(1)}}>SUBMIT</Button>{' '}
                                    <Button color="secondary" onClick={()=>{submitHandler();toggle();generatePDF(members);setIsRationPage(true);setRationNumber("");setTotalMembers(1)}}>PRINT AND SUBMIT</Button>
                                    </ModalFooter>
                                </Modal>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            )
}
export default Registration
