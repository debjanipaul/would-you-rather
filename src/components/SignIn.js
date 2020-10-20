import React from 'react'
import '../styles/SignIn.css'
import { Dropdown, Button } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css";
import { Link, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import { setAuthUser } from '../actions/authUser';

class SignIn extends React.Component {

    state = {
        value: ''
    };

    onChange = (e, { value }) => {
        this.setState({
            value: value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        const { setAuthUser } = this.props;
        const authUser = this.state.value;

        new Promise((res, rej) => {
            setTimeout(() => res(), 500);
        }).then(() => setAuthUser(authUser));
    };

    generateUsersData = () => {
        const { users } = this.props;

        return users.map(user => ({
            key: user.id,
            text: user.name,
            value: user.id,
            image: { avatar: true, src: user.avatarURL }
        }));
    };

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
                        <form onSubmit={this.handleSubmit}>
                            <Dropdown
                                placeholder='Select Friend'
                                fluid
                                selection
                                options={this.generateUsersData()}
                                onChange={this.onChange}
                                value={this.state.value}
                            />

                            <Link to="/"><button className="submit">Login</button></Link>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}
const ConnectedSiginForm = connect(
    mapStateToProps,
    { setAuthUser }
)(SignIn);

function mapStateToProps({ users }) {
    return {
        users: Object.values(users)
    };
}

export default SignIn;