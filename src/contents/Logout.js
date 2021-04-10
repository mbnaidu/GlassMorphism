import React, { Component } from 'react';
import { useHistory } from 'react-router';
import Navbar from '../components/Navbar';
import '../Styles/Socialc.css'


function Logout() {
    const history = useHistory();
    return (
        <div>
            <Navbar />
                <div className="condiv contact">
                    <h1 className="subtopic">Contact Me</h1>
                    <div>
				<div class="social glass">
					<div class="field">
                        <div class="hexagon-wrapper">
                            <div class="hexagon">
                                <i class="fab fa-facebook"></i>
                            </div>
                        </div>
                        <div class="hexagon-wrapper">
                            <div class="hexagon">
                                <i class="fab fa-twitter"></i>
                            </div>
                        </div>
                        <div class="hexagon-wrapper">
                            <div class="hexagon">
                                <i class="fab fa-instagram"></i>
                            </div>
                        </div>
                        <div class="hexagon-wrapper">
                            <div class="hexagon">
                                <i class="fa fa-sign-out" onClick={() => history.push('/')}></i>
                            </div>
                        </div>
					</div>
                </div> 
			</div>    
                </div>
        </div>
    )
}

export default Logout