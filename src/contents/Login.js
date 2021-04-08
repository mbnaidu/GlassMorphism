import React from 'react';
import {withRouter} from 'react-router-dom';
import '../Styles/Loginc.css'
import Example from '../components/example';


function Login({ history }) {
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
            <div className="condiv login">
                <div>
                    <div class="box">
                        <div class="inner">
                            <span>నున్న గ్రామ</span>
                        </div>
                        <div class="inner">
                            <span>నున్న గ్రామ</span>
                        </div>
                    </div>
                </div>
                <div>
                    <Example />
                </div>
            </div>
        </div>
    );
}
export default withRouter(Login)