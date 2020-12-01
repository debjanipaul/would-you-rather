import React from 'react'
import '../styles/ViewPoll.css'
import Nav from './Nav'
import { connect } from 'react-redux';
import { handleSaveQuestionAnswer } from '../actions/users';
import Error from './Error'

class ViewPoll extends React.Component {
    state = {
        value: ''
    };

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        });
    }

    handleSubmit = (e) => {
        console.log("submit", this.props.authUser, this.props.id, this.state.value)
        e.preventDefault();
        if (this.state.value !== '') {
            const { authUser, question, id, handleSaveQuestionAnswer } = this.props;
            handleSaveQuestionAnswer(authUser, id, this.state.value);
        }
    };


    render() {
        const { question, author, user, id, questionStatus } = this.props;

        if (question === null || author === '') {
            return <Error />;
        }
        return (
            <div>
                <Nav />
                <div id="itemsContainer">
                    <div id="headingDiv">
                        <h4>{author.name} asks:</h4>
                    </div>
                    <div id="items">
                        <div className="pic">
                            <img src={author.avatarURL1} alt="user1 pic"></img>
                        </div>
                        <div id='texts'>
                            <h3>Would You Rather...</h3>
                            <form >
                                <label>
                                    <input
                                        type="radio"
                                        name="options"
                                        value="optionOne"
                                        checked={this.state.value === 'optionOne'}
                                        onChange={this.handleChange}
                                    />
                                    {question.optionOne.text}
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="options"
                                        value="optionTwo"
                                        checked={this.state.value === 'optionTwo'}
                                        onChange={this.handleChange}
                                    />
                                    {question.optionTwo.text}
                                </label>
                            </form>
                            <button id='submit' onClick={this.handleSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

function mapStateToProps({ authUser, users, questions }, { id }) {

    let question = questions[id];
    const author = question ? users[question.author] : '';
    const user = users[authUser];
    // console.log('question', question, id)

    return {
        question: question ? question : null,
        author,
        authUser,
        user,
        id
    }
}

export default connect(mapStateToProps, { handleSaveQuestionAnswer })(ViewPoll);
