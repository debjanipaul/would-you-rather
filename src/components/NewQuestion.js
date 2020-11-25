import React from 'react'
import '../styles/NewQuestion.css'
import Nav from './Nav'
import '../styles/Nav.css'
import { handleSaveQuestion } from '../actions/questions';
import { connect } from 'react-redux';

class NewQuestion extends React.Component {
    state = {
        option1: '',
        option2: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { option1, option2 } = this.state
        const { authUser, handleSaveQuestion } = this.props
        console.log('authUser', authUser)
        handleSaveQuestion(option1, option2, authUser)
        this.setState({
            option1: '',
            option2: ''
        })
    }


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
                        <input className="eachInput"
                            type="text"
                            id="option1"
                            value={this.state.option1}
                            placeholder="Enter option one text here"
                            onChange={this.handleChange}
                        />
                        <label>Or</label>
                        <input className="eachInput"
                            type="text"
                            id="option2"
                            value={this.state.option2}
                            placeholder="Enter option two text here"
                            onChange={this.handleChange}
                        />
                        <button className="submit" onClick={this.handleSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}
function mapStateToProps({ authUser }) {
    return {
        authUser
    };
}

export default connect(
    mapStateToProps,
    { handleSaveQuestion }
)(NewQuestion);

