import React from 'react'
import '../styles/Nav.css'
import { Link } from "react-router-dom";
import { setAuthUser } from '../actions/authUser';
import { connect } from 'react-redux';

class Nav extends React.Component {
    render() {
        const { authUser, users } = this.props;
        // console.log('users: ', users)
        return (

            <nav id="navContainer">
                <Link to="/" className="navItems">Home</Link>
                <Link to="/add" className="navItems">New Questions</Link>
                <Link to="/leaderboard" className="navItems">Leader Board</Link>
                <div className="navItems" id="namePicContainer">
                    <div className=""><img src={users[authUser].avatarURL} alt="user1 pic"></img></div>
                    <div className="">{users[authUser].name}</div>
                </div>
                <Link to="/signIn" className="navItems">Logout</Link>
            </nav>

        )
    }
}
function mapStateToProps({ users, authUser }) {
    return {
        authUser,
        users
    };
}

export default connect(
    mapStateToProps,
    { setAuthUser }
)(Nav);

