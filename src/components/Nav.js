import React from 'react'
import '../styles/Nav.css'
import { Link, Route, Switch } from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (

            <nav id="navContainer">
                <Link to="/home" className="navItems">Home</Link>
                <Link to="/add" className="navItems">New Questions</Link>
                <Link to="/leaderboard" className="navItems">Leader Board</Link>
                {/* <div className="navItems">Home</div>
                <div className="navItems">New Questions</div>
                <div className="navItems">Leader Board</div> */}
                <div className="navItems" id="namePicContainer">
                    <div className=""><img src={require('../assets/user1.png')} alt="user1 pic"></img></div>
                    <div className="">Debjani Paul</div>
                </div>
                <Link to="/" className="navItems">Logout</Link>
                {/* <div className="navItems">Logout</div> */}
            </nav>

        )
    }
}

export default Nav;