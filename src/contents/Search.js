import { Input,Button } from '@material-ui/core';
import React, { Component, useState } from 'react';
import Navbar from '../components/Navbar';
import '../Styles/Searchc.css'
import axios from 'axios';
import {Modal, ModalHeader, ModalBody, ModalFooter, Table, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

function Search() {
    const [rationNumber, setRationNumber] = useState(0);
    const [result, setresult] = useState(false);
    const [arr,setarr] = useState([]);
    const getSearchResults = () => {
        let temp = [];
        const data = {
            "rationId":rationNumber,
        }
        axios.post('http://localhost:3001/getData', {data}).then(
            function(res) {
                res.data.map((m)=>{
                    // arr.push(m)
                    console.log(m)
                    setarr(arr=>[...arr,m])
                })
            }
        )
    }
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
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
                            <div>
                            <Modal isOpen={modal}  size="lg">
                                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                                <ModalBody>
                                    <Table striped bordered hover responsive="xl">
                                        <thead>
                                            <tr>
                                            <th>#</th>
                                            <th>RationID</th>
                                            <th>Name</th>
                                            <th>AadharNumber</th>
                                            <th>Gender</th>
                                            <th>Age</th>
                                            </tr>
                                        </thead>
                                        {arr.map((a)=>{
                                            return(
                                                <tbody>
                                                    <tr>
                                                    <th scope="row">1</th>
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