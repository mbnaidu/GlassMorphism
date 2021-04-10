import { faBreadSlice } from '@fortawesome/free-solid-svg-icons';
import {  Button, FormControl, FormControlLabel, FormLabel, Input, Radio, RadioGroup, TextField } from '@material-ui/core';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import React, { Component, useState } from 'react';
import Navbar from '../components/Navbar';
import '../Styles/Registrationc.css'
import axios from 'axios';
import {Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import jsPDF from 'jspdf'
import logo from '../img/one.png'
import logo1 from '../img/jj.png'


function Registration() {
    const [rationNumber, setRationNumber] = useState("");
    const [totalMembers, setTotalMembers] = useState(1);
    const [isRationpage, setIsRationPage] = useState(true);
    const [phone,setphone] = useState("");
    const [address,setaddress] = useState("");
    const [arr,setarr] = useState([]);
    let family = [];
    const [members,setmembers] = useState([]);
    const createElements = (n)=>{
        for(var i = 1; i <= n; i++){
            family.push(
                <li>{i}</li>
            );
        }
    }
    const [madhu,setmadhu] = useState(["abcdefghijklm","babcdefghijklm","cabcdefghijklm","dabcdefghijklm","eabcdefghijklm","abcdefghijklmf","abcdefghijklmg"])
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
    }
    const submitHandler = () => {
        const data = {
            "rationId":rationNumber,
            "members":members,
            "phone":phone,
            "address":address
        }
        axios.post('http://localhost:3001/addData', {data}).then(
            function(res) {
                // console.log(res);
            }
        )
    }
    let g = 0;
    const generatePDF = () => {
        var doc = new jsPDF('p', 'pt');
        doc.addImage(logo, 'JPEG', 15, 20, 60, 60);
        doc.addImage(logo1, 'JPEG', 520, 20, 60, 60);
        doc.setFontSize(19);
        doc.text('NUNNA GRAMA RAJAKA JANA SEVA SANGHAM', 80, 50);
        doc.setFontSize(15)
        doc.text('(Regd. No.45656, C.C.No:56456)',170, 80);
        doc.text('Nunna Village, Dhobi Ghat Center, High School Road ,Vijayawada Rural Mandal,', 50, 110);
        doc.text('Krishna District, Pin code : 521212, Contact:7075606998', 130, 130); 
        doc.text('-------------------------------------------------------------------------------------------------------------------------- ', 0, 145); 
        doc.text('RATION NUMBER : ' + rationNumber,50,192);
        doc.text('PHONE NUMBER  : ' + phone,50,222);
        doc.text('-----------------------------------------------------------------------------------------------------------------', 18, 250);
        doc.text('FULL NAME',65,272);
        doc.text('AADHAR NUMBER',195,272);
        doc.text('GENDER',375,272);
        doc.text('AGE',480,272);
        doc.text('-----------------------------------------------------------------------------------------------------------------', 18, 290);
        doc.text('|',18,295);
        doc.text('|',18,293);
        doc.text('|',18,292);
        doc.text('|',18,289);
        doc.text('|',18,287);
        doc.text('|',18,285);
        doc.text('|',18,283);
        doc.text('|',18,281);
        doc.text('|',18,279);
        doc.text('|',18,277);
        doc.text('|',18,275);
        doc.text('|',18,273);
        doc.text('|',18,271);
        doc.text('|',18,269);
        doc.text('|',18,267);
        doc.text('|',18,265);
        doc.text('|',18,263);
        doc.text('|',18,261);
        doc.text('|',18,259);
        doc.text('|',18,257);
        doc.text('|',18,267);
        // 
        doc.text('|',580,295);
        doc.text('|',580,293);
        doc.text('|',580,292);
        doc.text('|',580,289);
        doc.text('|',580,287);
        doc.text('|',580,285);
        doc.text('|',580,283);
        doc.text('|',580,281);
        doc.text('|',580,279);
        doc.text('|',580,277);
        doc.text('|',580,275);
        doc.text('|',580,273);
        doc.text('|',580,271);
        doc.text('|',580,269);
        doc.text('|',580,267);
        doc.text('|',580,265);
        doc.text('|',580,263);
        doc.text('|',580,261);
        doc.text('|',580,259);
        doc.text('|',580,257);
        doc.text('|',580,267);
        let variable = 290;
        members.map((m)=>{
            variable = variable + 40;
            doc.text('|',18,variable);
            doc.text('|',18,variable-8);
            doc.text('|',18,variable-10);
            doc.text('|',18,variable-13);
            doc.text('|',18,variable-15);
            doc.text('|',18,variable-17);
            doc.text('|',18,variable-19);
            doc.text('|',18,variable-22);
            doc.text('|',18,variable-12);
            doc.text('|',18,variable-7);
            doc.text('|',18,variable-1);
            doc.text('|',18,variable-2);
            doc.text('|',18,variable-3);
            doc.text('|',18,variable-4);
            doc.text('|',18,variable-5);
            doc.text('|',18,variable+3);
            doc.text('|',18,variable+4);
            doc.text('|',18,variable+5);
            doc.text('|',18,variable+6);
            doc.text('|',18,variable+7);
            doc.text('|',18,variable+8);
            // 
            doc.text('|',580,variable);
            doc.text('|',580,variable-8);
            doc.text('|',580,variable-10);
            doc.text('|',580,variable-13);
            doc.text('|',580,variable-15);
            doc.text('|',580,variable-17);
            doc.text('|',580,variable-19);
            doc.text('|',580,variable-22);
            doc.text('|',580,variable-12);
            doc.text('|',580,variable-7);
            doc.text('|',580,variable-1);
            doc.text('|',580,variable-2);
            doc.text('|',580,variable-3);
            doc.text('|',580,variable-4);
            doc.text('|',580,variable-5);
            doc.text('|',580,variable+3);
            doc.text('|',580,variable+4);
            doc.text('|',580,variable+5);
            doc.text('|',580,variable+6);
            doc.text('|',580,variable+7);
            doc.text('|',580,variable+8);
            doc.text(m.name,30,variable);
            doc.text(m.aadharNumber,200,variable);
            doc.text(m.gender,370,variable);
            doc.text(m.age,480,variable);
            g = variable;
        })
        doc.text('-----------------------------------------------------------------------------------------------------------------', 18, variable+17);
        doc.text("ADDRESS : " + address,50,g+40);
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
                                                    <div class="form__group">
                                                        <input type="input" class="form__field" placeholder="Name" id='ration' required value={phone} onChange={event=> setphone(event.target.value)}/>
                                                        <label for="name" class="form__label">PHONE NUMBER</label>
                                                    </div>
                                                    <div class="form__group">
                                                        <input type="input" class="form__field" placeholder="Name" id='ration' required value={address} onChange={event=> setaddress(event.target.value)}/>
                                                        <label for="name" class="form__label">ADDRESS</label>
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
                                                <Button onClick={()=> {generatePDF();setIsRationPage(rationNumber.length >= 0 ? false : true)}}><span >ENTER</span></Button>
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
                                            <a class="btn " onClick={() => {toggle();submitHandler();}}>CHECK</a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                <Modal isOpen={modal} toggle={toggle} >
                                    <ModalHeader toggle={toggle}>SUCCESSFULLY ADDED</ModalHeader>
                                    <ModalBody>
                                    </ModalBody>
                                    <ModalFooter>
                                    <Button color="primary" onClick={()=>{toggle();setIsRationPage(true);setRationNumber("");setTotalMembers(1);setaddress("");setphone("")}}>SUBMIT</Button>{' '}
                                    <Button color="secondary" onClick={()=>{toggle();generatePDF(members);setIsRationPage(true);setRationNumber("");setTotalMembers(1);setaddress("");setphone("")}}>PRINT AND SUBMIT</Button>
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
