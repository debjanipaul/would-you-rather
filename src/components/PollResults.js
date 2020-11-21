import React from 'react'
import '../styles/PollResults.css'
import { Progress } from 'semantic-ui-react'
import Nav from './Nav'
import { connect } from 'react-redux';

class PollResults extends React.Component {
    render() {
        const { question, author, user, id, questionStatus } = this.props;
        return (
            <div>
                <Nav />
                <div id="itemsContainer">
                    <div id="headingDiv">
                        <h4>Added by {author.name}</h4>
                    </div>
                    <div id="items">
                        <div className="pic">
                            <img src={author.avatarURL2} alt="user1 pic"></img>
                        </div>
                        <div id='texts'>
                            <h3>Results:</h3>
                            <div id="result1Container">
                                <h4>{question.optionOne.text}</h4>
                                <Progress percent={44} progress label='2 out of 3 items' />
                            </div>
                            <div id="result1Container1">
                                <h4>{question.optionTwo.text}</h4>
                                <Progress percent={33.3} progress label='1 out of 3 items' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
function mapStateToProps({ authUser, users, questions }, { id, questionStatus }) {

    let question = questions[id];
    const author = question ? users[question.author] : '';
    const user = users[authUser];
    // console.log('question', question, id)

    return {
        question: question ? question : null,
        author,
        questionStatus,
        user
    }
}

export default connect(mapStateToProps)(PollResults);
