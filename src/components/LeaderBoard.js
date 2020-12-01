import React from 'react'
import '../styles/LeaderBoard.css'
import Nav from './Nav'
import '../styles/Nav.css'
import { connect } from 'react-redux';

class LeaderBoard extends React.Component {
    render() {
        const { userData } = this.props;
        return (
            <div>
                <Nav />
                {userData.map(user => (
                    <div id="itemsContainer1">
                        <div class="pic2">
                            <img src={user.avatarURL} alt="user1 pic"></img>
                        </div>
                        <div id='midSection'>
                            <h3>{user.name}</h3>
                            <div class="QuestPoints">
                                <p className="QuestPointsItems">Answered Questions</p>
                                <p className="QuestPointsItems1">{user.answerCount}</p>
                            </div>
                            <div class="QuestPoints">
                                <p className="QuestPointsItems">Created Questions</p>
                                <p className="QuestPointsItems1">{user.questionCount}</p>
                            </div>
                        </div>
                        <div id="scoreDiv">
                            <h4>Score</h4>
                            <p>{user.total}</p>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    const userData = Object.values(users)
        .map(user => ({
            id: user.id,
            name: user.name,
            avatarURL: user.avatarURL,
            answerCount: Object.values(user.answers).length,
            questionCount: user.questions.length,
            total: Object.values(user.answers).length + user.questions.length
        }))
        .sort((a, b) => a.total - b.total)
        .reverse();
    console.log('userData', userData);
    return {
        userData
    };
}

export default connect(mapStateToProps)(LeaderBoard);
