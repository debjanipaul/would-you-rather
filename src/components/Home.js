import React from 'react'
import '../styles/Home.css'
import { connect } from 'react-redux';
import QuestionsDisplay from './QuestionsDisplay'
import '../styles/QuestionsDisplay.css'
import Nav from './Nav'
import '../styles/Nav.css'

class Home extends React.Component {
    state = {
        'questionsToDisplay': 'unanswered',
        'activeTab': 'unanswered'
    };
    handleTabChange = (e, tab) => {
        this.setState(() => ({
            activeTab: tab
        }));
    };

    render() {
        const { activeTab } = this.state;
        return (
            <div>
                <Nav />
                <div id="questionContainer">
                    <div id="buttonContainer">
                        <button className={"questionsDiv " + (activeTab === 'unanswered' ? 'active' : null)}
                            onClick={(e) => this.handleTabChange(e, 'unanswered')}>Unanswered Questions
                        </button>
                        <button className={"questionsDiv " + (activeTab === 'answered' ? 'active' : null)}
                            onClick={(e) => this.handleTabChange(e, 'answered')}>Answered Questions
                        </button>
                    </div>

                    {activeTab === 'unanswered' &&
                        <div>
                            {this.props.unansweredQuestionIds.map(id => (
                                <QuestionsDisplay id={id} key={id} />
                            ))}
                        </div>
                    }
                    {activeTab === 'answered' &&
                        <div>
                            {this.props.answeredQuestionIds.map(id => (
                                <QuestionsDisplay id={id} key={id} />
                            ))}
                        </div>
                    }

                </div>
            </div>
        )
    }
}

function mapStateToProps({ questions, authUser, users }) {
    console.log('authUser:', authUser)
    console.log('users:', users)
    console.log('questions:', questions)
    const answeredQuestionIds = Object.keys(users[authUser].answers).sort((a, b) => questions[b].timestamp - questions[a].timestamp);
    const unansweredQuestionIds = Object.keys(questions).filter(q => !answeredQuestionIds.includes(q)).sort((a, b) => questions[b].timestamp - questions[a].timestamp);

    return {
        answeredQuestionIds,
        unansweredQuestionIds
    }
}

export default connect(mapStateToProps)(Home);