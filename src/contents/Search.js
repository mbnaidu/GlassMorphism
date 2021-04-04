import { Input } from '@material-ui/core';
import React, { Component, useState } from 'react';
import Navbar from '../components/Navbar';
import Searchc from '../Styles/Searchc.css'


function Search() {
    const [panNumber, setpanNumber] = useState(0);
    const [result, setresult] = useState(false)
    return (
            <div>
                <Navbar />
                {result ? (
                        <div className="condiv">
                            {panNumber}
                        </div>
                ) : (
                    <div>
                        <div className="condiv">
                            <div className="search">
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
                            </div>
                        </div>
                    </div>
                )}
            </div>
            )
}

export default Search