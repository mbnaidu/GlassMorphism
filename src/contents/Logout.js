import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import '../Styles/Socialc.css'

class Logout extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="condiv contact">
                    <h1 className="subtopic">Contact Me</h1>
                    <div>
				<div class="social glass">
					<div class="field">
						{/* <a class="sns-btn sns-btn--twitter">
							<i class="fa fa-twitter fa-2x"></i>
						</a>	
						<a class="sns-btn sns-btn--facebook">
							<i class="fa fa-facebook-f"></i>
						</a>
						<a class="sns-btn sns-btn--instagram">
							<i class="fa fa-instagram"></i>
						</a>
                        <a class="sns-btn sns-btn--whatsapp">
							<i class="fa fa-whatsapp "></i>
						</a> */}
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
					</div>
            </div> 
			</div>    
                </div>
            </div>
            )
        }
    }
    
    export default Logout
    