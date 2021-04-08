import { Input } from '@material-ui/core';
import React, { Component, useState } from 'react';
import Navbar from '../components/Navbar';
import '../Styles/Searchc.css'
import axios from 'axios';

function Search() {
    const [rationNumber, setRationNumber] = useState(0);
    const [result, setresult] = useState(false)
    const getSearchResults = () => {
        const data = {
            "rationId":rationNumber,
        }
        console.log(data);
        axios.post('http://localhost:3001/getData', {data}).then(
            function(res) {
                console.log(res);
            }
        )
    }
    return (
            <div>
                <Navbar />
                {result ? (
                        <div className="condiv">
                            {rationNumber}
                        </div>
                ) : (
                    <div>
                        <div className="condiv">
                            {/* <div className="search">
                            <input className="c-checkbox" type="checkbox" id="checkbox"/>
                                <div className="c-formContainer">
                                <form className="c-form" action="">
                                    <input className="c-form__input" type="number" pattern="[A-Za-z]{10}" onChange={event=>setpanNumber(event.target.value)} required/>
                                    <label className="c-form__buttonLabel" for="checkbox">
                                    <button className="c-form__button" type="button" onClick={()=>{setresult(true)}}>Search</button>
                                    </label>
                                    <label className="c-form__toggle" for="checkbox"  data-title="Search"></label>
                                </form>
                            </div>
                            </div> */}
                            <div>
                                <form>
                                    <div class="searchd-box">
                                        <input type="text" class="txt" placeholder="Search Here..." onChange={(event) => setRationNumber(event.target.value)}/>
                                        <a class="btn" onClick={() => getSearchResults()}><i class="fa fa-search"></i></a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            )
}

export default Search