import React from 'react'
import '../styles/PollResults.css'
import { Progress } from 'semantic-ui-react'
import Nav from './Nav'
import { connect } from 'react-redux';
import Error from './Error'

class PollResults extends React.Component {
    render() {
        const { question, author, authUser } = this.props;
        const optionOneTotal = question.optionOne.votes.length;
        const optionTwoTotal = question.optionTwo.votes.length;
        const totalVotes = optionOneTotal + optionTwoTotal;
        const optionOnePercent = Math.round((optionOneTotal / totalVotes) * 100);
        const optionTwoPercent = Math.round((optionTwoTotal / totalVotes) * 100);
        //console.log(optionOnePercent, optionTwoPercent,)

        if (question === null || author === '') {
            return <Error />;
        }

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
                                <div className="voteContainer">
                                    {question.optionOne.votes.includes(authUser) ? (
                                        <div className="yourVote">
                                            &#10003; You Voted
                                        </div>
                                    ) : null}
                                </div>
                                <h4>{question.optionOne.text}</h4>
                                <Progress percent={optionOnePercent} progress>
                                    {optionOneTotal} out of {totalVotes} users
                                </Progress>
                            </div>
                            <div id="result1Container1">
                                <div className="voteContainer">
                                    {question.optionTwo.votes.includes(authUser) ? (
                                        <div className="yourVote">
                                            &#10003; You Voted
                                        </div>
                                    ) : null}
                                </div>
                                <h4>{question.optionTwo.text}</h4>
                                <Progress percent={optionTwoPercent} progress>
                                    {optionTwoTotal} out of {totalVotes} users
                                </Progress>
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
        user,
        authUser
    }
}

export default connect(mapStateToProps)(PollResults);
