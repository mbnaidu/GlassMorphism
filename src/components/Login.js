import React from 'react';
import {withRouter} from 'react-router-dom';
import '../Styles/Loginc.css'
import Example from './example';


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
                        <button type="submit" onClick={() => history.push('/search')}>Login</button>
                    </form>
                </section>
            </nav>
            <div className="condiv login">
                <div>
                    <div class="box">
                        <div class="inner">
                            <span>COMMUNITY</span>
                        </div>
                        <div class="inner">
                            <span>COMMUNITY</span>
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