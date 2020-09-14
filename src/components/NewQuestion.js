import React from 'react'
import '../styles/NewQuestion.css'
import Nav from './Nav'
import '../styles/Nav.css'

class SignIn extends React.Component {
    render() {
        return (

            <div>
                <Nav />
                <div id="NewQuestionContainer">
                    <div id="headerDiv">
                        <h2>Create New Question</h2>
                    </div>
                    <div id="texts">
                        <p>Complete the question</p>
                        <h3>Would You Rather...</h3>
                    </div>

                    <form id="inputText">
                        <input className="eachInput" type="text" name="name" value="Enter option one text here" />
                        <label>Or</label>
                        <input className="eachInput" type="text" name="name" value="Enter option two text here" />
                        <button className="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignIn;