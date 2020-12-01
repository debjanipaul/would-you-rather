import React from 'react'
import '../styles/QuestionsDisplay.css'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class QuestionsDisplay extends React.Component {
    render() {
        const { question, author, id, questionStatus } = this.props;

        let text = ''
        let questionStatusLink = `/question/${id}`

        if (questionStatus === 'answered') {
            text = 'View Result';

        } else if (questionStatus === 'unanswered') {
            text = 'View Poll';
        }

        return (
            <div>
                <div id="questionsContainer">
                    <div id='name'>
                        <h4>{author.name} asks:</h4>
                    </div>
                    <div id="picAskContainer">
                        <div className="pic1">
                            <img src={author.avatarURL1} alt="user1 pic"></img>
                        </div>
                        <div id="questionDiv">
                            <h4>Would You Rather</h4>
                            <p>{question.optionOne.text}</p>
                            <Link to={questionStatusLink}>
                                <button>{text}</button>
                            </Link>

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

export default connect(mapStateToProps)(QuestionsDisplay);