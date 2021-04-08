import { Input,Button } from '@material-ui/core';
import React, { Component, useState } from 'react';
import Navbar from '../components/Navbar';
import '../Styles/Searchc.css'
import axios from 'axios';
import {Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap';

function Search() {
    const [rationNumber, setRationNumber] = useState(0);
    const [result, setresult] = useState(false);
    const [arr,setarr] = useState([])
    const getSearchResults = () => {
        const data = {
            "rationId":rationNumber,
        }
        axios.post('http://localhost:3001/getData', {data}).then(
            function(res) {
                console.log(res.data);
            }
        )
    }
    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal);
    }
    return (
            <div>
                <Navbar />
                    <div>
                        <div className="condiv">
                            <div>
                                <form>
                                    <div class="searchd-box">
                                        <input type="text" class="txt" placeholder="Search Here..." onChange={(event) => setRationNumber(event.target.value)}/>
                                        <a class="=" onClick={() => {getSearchResults();}}><i class="fa fa-search"></i></a>
                                    </div>
                                </form>
                            </div>
                            <Table dark>
                                <thead>
                                    <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
            </div>
            )
}

export default Search