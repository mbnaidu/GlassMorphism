import React from 'react';
import {withRouter} from 'react-router-dom';
import Loginc from '../Styles/Loginc.css'


function Login({ history }) {
    return (
    <div>
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
                <button type="submit" onClick={() => history.push('/home')}>Login</button>
            </form>
        </section>
    </div> 
    );
}
export default withRouter(Login)