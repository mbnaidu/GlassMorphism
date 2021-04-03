import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Socialc from '../Styles/Socialc.css'

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
						<a class="sns-btn sns-btn--twitter">
							<i class="sns-btn__icon fab fa-twitter"></i>
						</a>	
						<a class="sns-btn sns-btn--facebook">
							<i class="sns-btn__icon fab fa-facebook-f"></i>
						</a>
						<a class="sns-btn sns-btn--instagram">
							<i class="sns-btn__icon fab fa-instagram"></i>
						</a>
                        <a class="sns-btn sns-btn--whatsapp">
							<i class="sns-btn__icon fab fa-whatsapp"></i>
						</a>
					</div>
            </div> 
			</div>    
                </div>
            </div>
            )
        }
    }
    
    export default Logout
    