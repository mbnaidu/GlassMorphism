import { Input,Button } from '@material-ui/core';
import React, { Component, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import '../Styles/Searchc.css'
import axios from 'axios';
import {Modal, ModalHeader, ModalBody, ModalFooter, Table, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

function Search() {
    const [rationNumber, setRationNumber] = useState(0);
    const [result, setresult] = useState(false);
    const [arr,setarr] = useState([]);
    const [allusers,setallusers] = useState([]);
    useEffect(() => {
        axios.post('http://localhost:3001/getAllData', {}).then(
            function(res) {
                res.data.map((a)=>{
                    setallusers(allusers=>[...allusers,a])
                })
            }
        )
    }, [])
    const getSearchResults = () => {
        const data = {
            "searchText":rationNumber,
        }
        axios.post('http://localhost:3001/getData', {data}).then(
            function(res) {
                res.data.map((m)=>{
                    setarr(arr=>[...arr,m])
                })
            }
        )
    }
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    let total_users = 0;
    return (
            <div>
                <Navbar />
                    <div>
                        <div className="condiv">
                            <div>
                                <InputGroup>
                                        <Input placeholder="Search Here..." onChange={(event) => setRationNumber(event.target.value)} />
                                    <InputGroupAddon addonType="append">
                                    <InputGroupAddon>
                                        <Button class="learn-more" onClick={() => {setarr([]);getSearchResults();toggle()}}><i class="fa fa-search"></i> Search</Button>
                                    </InputGroupAddon>
                                    </InputGroupAddon>
                                </InputGroup>
                            </div>
                            <div className="alluser_details">
                                <Table striped bordered hover responsive="xl" dark>
                                        <thead>
                                            <tr>
                                            <th>S.NO</th>
                                            <th>RATION CARD NUMBER</th>
                                            <th>FULL NAME </th>
                                            <th>AADHAR NUMBER</th>
                                            <th>GENDER</th>
                                            <th>AGE</th>
                                            </tr>
                                        </thead>
                                        {allusers.map((a)=>{
                                            total_users = total_users + 1;
                                            return(
                                                <tbody>
                                                    <tr>
                                                    <th scope="row">{total_users}</th>
                                                    <td>{a.rationId}</td>
                                                    <td>{a.name}</td>
                                                    <td>{a.aadharNumber}</td>
                                                    <td>{a.gender}</td>
                                                    <td>{a.age}</td>
                                                    </tr>
                                                </tbody>
                                            )
                                        })}
                                    </Table>
                            </div>
                            <div>
                            <Modal isOpen={modal}  size="lg">
                                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                                <ModalBody>
                                    <Table striped bordered hover responsive="xl">
                                        <thead>
                                            <tr>
                                            <th>RATION CARD NUMBER</th>
                                            <th>FULL NAME </th>
                                            <th>AADHAR NUMBER</th>
                                            <th>GENDER</th>
                                            <th>AGE</th>
                                            </tr>
                                        </thead>
                                        {arr.map((a)=>{
                                            return(
                                                <tbody>
                                                    <tr>
                                                    <td>{a.rationId}</td>
                                                    <td>{a.name}</td>
                                                    <td>{a.aadharNumber}</td>
                                                    <td>{a.gender}</td>
                                                    <td>{a.age}</td>
                                                    </tr>
                                                </tbody>
                                            )
                                        })}
                                    </Table>
                                </ModalBody>
                                <ModalFooter>
                                <Button color="secondary" onClick={()=>{toggle();setarr([])}}>Cancel</Button>
                                </ModalFooter>
                            </Modal>
                            </div>
                        </div>
                    </div>
            </div>
            )
}

export default Search