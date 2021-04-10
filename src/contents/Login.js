import React, { useState } from 'react';
import {withRouter} from 'react-router-dom';
import '../Styles/Loginc.css'
import Example from '../components/example';
import logo from '../img/one.png'
import logog2 from '../img/two.png'
import { Button } from 'reactstrap';

function Login({ history }) {
    const [intro,setIntro] = useState(false)
    return (
        <div>
            <nav className="glass login">
                <section class="login">
                    <form action="javascript:void(0);" id="form">
                        <label for="username">
                            Username
                            <input id="username" type="text"></input>
                        </label>
                        <label for="password">
                            Password
                            <input id="password" type="password"></input>
                        </label>
                        <button type="submit" onClick={() => history.push('/registration')}>Login</button>
                    </form>
                </section>
            </nav>
            {
                intro ? (
                    <div className="condiv login">
                        <Example />
                    </div>
                ) : (
                    <div>
                        <div className="condiv login">
                            <div className="title">
                                <img src={logo} width="100px" height="100px"/>
                                <span class="textg">నున్న గ్రామ రజక జన సేవా సంఘం</span>
                                <img src={logog2} width="100px" height="100px"/>
                            </div>
                            <div>
                                <Example />
                            </div>
                            <Button className="about_us" onClick={()=>{setIntro(true)}}>ABOUT US</Button>
                        </div>
                    </div>
                )
            }
        </div>
    );
}
export default withRouter(Login)