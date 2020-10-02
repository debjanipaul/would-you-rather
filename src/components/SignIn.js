import React from 'react'
import '../styles/SignIn.css'
import { Dropdown, Button } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css";
import { Link, Route, Switch } from "react-router-dom";

import user1 from '../assets/user1.png';
import user2 from '../assets/user2.png';
import user3 from '../assets/user3.png';

const friendOptions = [
    {
        key: 'Jenny Hess',
        text: 'Jenny Hess',
        value: 'Jenny Hess',
        image: { avatar: true, src: user1 },
    },
    {
        key: 'Elliot Fu',
        text: 'Elliot Fu',
        value: 'Elliot Fu',
        image: { avatar: true, src: user2 },
    },
    {
        key: 'Stevie Feliciano',
        text: 'Stevie Feliciano',
        value: 'Stevie Feliciano',
        image: { avatar: true, src: user3 },
    }]

class SignIn extends React.Component {
    render() {
        return (

            <div>
                <div id="signInContainer">
                    <div id="SignInHeader">
                        <h4>Welcome to the Would You Rather App</h4>
                        <p>Please Sign In to continue</p>
                        <div id="signInLogo">
                            <img src={require('../assets/signInNinjaLogo.png')} alt="Sign in Logo"></img>
                        </div>
                        <h3>Sign In</h3>
                        <Dropdown
                            placeholder='Select Friend'
                            fluid
                            selection
                            options={friendOptions}
                        />

                        <Link to="/home"><button className="submit">Submit</button></Link>
                        {/* <button class="submit">Submit</button> */}
                    </div>
                </div>
            </div>

        )
    }
}

export default SignIn;